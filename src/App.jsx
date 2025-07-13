import { useEffect, useState } from "react"
import { shuffleArray } from "./utils/shuffle";
import ImageGrid from "./components/ImageGrid";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [characters, setCharacters] = useState([]);
  const [clickedNames, setClickedNames] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const names = ['pikachu', 'charizard', 'mewto', 'eevee', 'bulbasaur', 'gengar', 'blastoise', 'charmander', 'butterfree', 'tyranitar', 'arcanine', 'greninja'];
      const results = await Promise.all(
        names.map(async name => {
          try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await res.json();
            return {
              id: data.id,
              name: data.name,
              image: data.sprites.other['official-artwork'].front_default,
            }
          } catch (error) {
            console.error("Failed to fetch pokemon:", error)
          }
        }))
      setCharacters(shuffleArray(results))
      } catch {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();

  }, [])

  const handleCardClick = (name) => {
        if (clickedNames.includes(name)){
          setScore(0);
          setClickedNames([]);
        } else {
          const newScore = score + 1;
          const newClicked = [...clickedNames, name]
          setScore(newScore);
          setBestScore(prev => Math.max(prev, newScore));
          setClickedNames(newClicked)
        }
        setCharacters(prev => shuffleArray(prev))
  }

  if(isLoading){
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700  animate-pulse">Loading Pokemon...</p>
      </div>
    )
  }


  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center ">
        <div className="text-center max-w-2xl mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Pokémon Memory Game</h1>
        <p className="text-gray-700 text-base">
          Test your memory by clicking on each Pokémon only once. Every time you click, the cards shuffle.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          If you click the same Pokémon twice, your score resets. Try to reach a perfect score of 12!
        </p>
      </div>
        <ScoreBoard score={score} bestScore={bestScore} />
        <ImageGrid characters={characters} onCardClick={handleCardClick}/>
      </div>
    </>
  )
}
export default App;