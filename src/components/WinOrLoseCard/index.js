// Write your code here.
import './index.css'

const lossUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onPlayAgain, score} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const imageUrl = isWon ? wonUrl : lossUrl
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div>
      <div>
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p>{score}/12</p>
        <button type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
