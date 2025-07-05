import ImageCard from "./ImageCard"

function ImageGrid({characters}) {

    return (
        <div>
              {characters.map(character => (
                <ImageCard key={character.id} character={character}/>
            ))} 
        </div>
    )
}

export default ImageGrid;