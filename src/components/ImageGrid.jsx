import ImageCard from "./ImageCard"

function ImageGrid({characters, onCardClick}) {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 w-full max-w-4xl">
              {characters.map(character => (
                <ImageCard key={character.id} character={character} onClick={() => onCardClick(character.name)}/>
            ))} 
        </div>
    )
}

export default ImageGrid;