// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, startAgain, topScore} = props
  const scoreTitle = score === 12 ? 'You Won' : 'You Lose'
  const setTopScore = score >= topScore ? score : topScore
  const onPlay = () => {
    startAgain(setTopScore)
  }
  const resultImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="result-container">
      <div className="result-description">
        <h1 className="result">{scoreTitle}</h1>
        <p className="score-description">Best Score</p>
        <p className="score">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={onPlay}>
          Play Again
        </button>
      </div>
      <div className="result-img">
        <img src={resultImg} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
