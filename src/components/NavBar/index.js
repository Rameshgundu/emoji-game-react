// Write your code here.

import './index.css'

const NavBar = props => {
  const {topScore, score, displayGame} = props
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      <div className={`score-container ${displayGame}`}>
        <p className={`display-score ${displayGame}`}>Score: {score}</p>
        <p className={`display-score ${displayGame}`}>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
