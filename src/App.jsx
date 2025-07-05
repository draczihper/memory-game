import { useEffect, useState } from "react"
import { shuffleArray } from "./utils/shuffle";
import ImageGrid from "./components/ImageGrid";


function App() {
  const [characters, setCharacters] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const names = ['pikachu', 'charizard', 'mew', 'eevee', 'bulbasaur', 'gengar', 'blastoise', 'charmander', 'butterfree', 'tyranitar', 'arcanine', 'greninja'];
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
      }
    }
    fetchData();

  }, [])


  return (
    <>
      <div>
        <ImageGrid characters={characters} />
      </div>
    </>
  )
}
export default App;