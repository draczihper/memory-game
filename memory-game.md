```jsx
import { useEffect, useState } from 'react'; 
import ImageGrid from './components/ImageGrid'; 
import ScoreBoard from './components/ScoreBoard'; 
import { shuffleArray } from './utils/shuffle'; 
import useSound from 'use-sound'; 
import winSound from './assets/win.mp3'; 
import loseSound from './assets/lose.mp3';

function App() {  
const [characters, setCharacters] = useState([]);  
const [clickedIds, setClickedIds] = useState([]);  
const [score, setScore] = useState(0);  
const [bestScore, setBestScore] = useState(0);  
const [isLoading, setIsLoading] = useState(true);  
const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'  
const [difficulty, setDifficulty] = useState(12);  
const [darkMode, setDarkMode] = useState(false);

const [playWin] = useSound(winSound);  
const [playLose] = useSound(loseSound);

useEffect(() => {  
const fetchData = async () => {  
try {  
const idsMap = {  
8: [1, 4, 7, 25, 52, 63, 133, 37],  
12: [1, 4, 7, 25, 39, 52, 63, 133, 150, 37, 66, 92],  
16: [1, 4, 7, 25, 39, 52, 63, 133, 150, 37, 66, 92, 5, 17, 19, 44],  
};
    const ids = idsMap[difficulty];

    const results = await Promise.all(
      ids.map(async (id) => {
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await res.json();
          const image = data?.sprites?.other?.['official-artwork']?.front_default;
          if (!image) return null;
          return { id: data.id, name: data.name, image };
        } catch (err) {
          console.error(`Error fetching Pokémon ID ${id}`, err);
          return null;
        }
      })
    );

    const cleaned = results.filter(Boolean);
    setCharacters(shuffleArray(cleaned));
  } catch (err) {
    console.error('Global fetch error:', err);
  } finally {
    setIsLoading(false);
  }
};

fetchData();
}, [difficulty]);

const handleCardClick = (id) => {  
if (clickedIds.includes(id)) {  
setScore(0);  
setClickedIds([]);  
setGameStatus('lost');  
playLose();  
} else {  
const newScore = score + 1;  
setScore(newScore);  
setClickedIds((prev) => [...prev, id]);
  if (newScore > bestScore) {
    setBestScore(newScore);
  }

  if (newScore === difficulty) {
    setGameStatus('won');
    playWin();
  }
}

setCharacters((prev) => shuffleArray(prev));
};

const restartGame = () => {  
setClickedIds([]);  
setScore(0);  
setGameStatus('playing');  
setCharacters((prev) => shuffleArray(prev));  
};

const themeClass = darkMode ? 'dark' : '';

if (isLoading) {  
return (  
<div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>  
<p className={`text-xl animate-pulse ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Loading Pokémon...

);  
}

return (  
<div className={`${themeClass} min-h-screen px-4 sm:px-6 lg:px-8 py-6 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>

{/* ✅ Theme Toggle */}  
<button  
onClick={() => setDarkMode(!darkMode)}  
className="self-end mb-4 px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"  
>  
{darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    {/* ✅ Game Introduction */}
    <div className="text-center max-w-2xl mb-8">
      <h1 className="text-3xl font-bold mb-2">🧠 Pokémon Memory Game</h1>
      <p className="text-base">
        Test your memory by clicking on each Pokémon only once. Every time you click, the cards shuffle.
      </p>
      <p className="text-sm mt-2">
        If you click the same Pokémon twice, your score resets. Try to reach a perfect score!
      </p>
    </div>

    {/* 🎚️ Difficulty Select */}
    <div className="mb-6">
      <label className="mr-2 font-medium">Difficulty:</label>
      <select
        value={difficulty}
        onChange={(e) => {
          setIsLoading(true);
          setDifficulty(Number(e.target.value));
          setClickedIds([]);
          setScore(0);
          setGameStatus('playing');
        }}
        className="px-3 py-1 rounded border border-gray-300 dark:bg-gray-800 dark:text-gray-100"
      >
        <option value={8}>Easy (8)</option>
        <option value={12}>Medium (12)</option>
        <option value={16}>Hard (16)</option>
      </select>
    </div>

    {/* 🏆 Score Display */}
    <ScoreBoard score={score} bestScore={bestScore} />

    {/* 🎉 Feedback Message */}
    {gameStatus === 'won' && (
      <div className="text-green-500 font-semibold mb-4">🎉 You win! You've clicked all unique Pokémon!</div>
    )}
    {gameStatus === 'lost' && (
      <div className="text-red-500 font-semibold mb-4">❌ Oops! You clicked a Pokémon twice. Try again.</div>
    )}

    {/* 🔁 Restart Button */}
    {(gameStatus === 'won' || gameStatus === 'lost') && (
      <button
        onClick={restartGame}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        🔄 Play Again
      </button>
    )}

    {/* 🎴 Game Grid */}
    <ImageGrid characters={characters} onCardClick={handleCardClick} />
  </div>
</div>
);  
}

export default App;
```
