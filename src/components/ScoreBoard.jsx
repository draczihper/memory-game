function ScoreBoard({score, bestScore}) {

    return(
        <div className="flex gap-8 text-xl font-semibold text-gray-800">
            <span>Score: {score}</span>
            <span>Best Score: {bestScore}</span>            
        </div>
    )
}
export default ScoreBoard;