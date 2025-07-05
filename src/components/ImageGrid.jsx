import ImageCard from "./ImageCard"

function ImageGrid({characters}) {

    return (
        <div className="grid grid-cols-2, sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-4xl">
              {characters.map(character => (
                <ImageCard key={character.id} character={character}/>
            ))} 
        </div>
    )
}

export default ImageGrid;