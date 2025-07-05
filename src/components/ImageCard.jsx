function ImageCard({character, onClick}){
    

    return (
        <div>
            <img src={character.image} alt={character.name} />
            <div>{character.name}</div>
        </div>
    )
}

export default ImageCard;