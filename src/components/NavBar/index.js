// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameProgress, topScore} = props

  return (
    <nav>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isGameProgress && (
          <div>
            <p>score: {currentScore}</p>
            <p>topscore: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
