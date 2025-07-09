function ImageCard({character, onClick}){
    return (
        <div 
        className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer max-w-36 my-1"
        onClick={onClick}
        >
            <img 
            src={character.image}
            alt={character.name}
            className="rounded-t-xl w-36 object-contain bg-white"
            />
        
            <div className="p-2 text-center font-medium capitalize">{character.name}</div>
        </div>
    )
}

export default ImageCard;