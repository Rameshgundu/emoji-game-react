/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    score: 0,
    newList: [],
    shuffledList: null,
    endResult: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  changeEmoji = id => {
    const {topScore, score, newList} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    this.setState({shuffledList: shuffledEmojisList})
    if (newList.includes(id)) {
      this.setState({
        newList: [],
        endResult: true,
      })
    } else {
      this.setState({
        newList: [...newList, id],
        score: newList.length + 1,
      })
      if (score === 11) {
        this.setState({endResult: true, newList: []})
      }
    }
  }

  startAgain = setTopScore => {
    this.setState({topScore: setTopScore, score: 0, endResult: false})
  }

  render() {
    const {emojisList} = this.props
    const {newList, topScore, score, endResult} = this.state
    const displayScore = endResult ? 'win-or-lose-card2' : 'win-or-lose-card1'
    const displayGame = endResult ? 'win-or-lose-card1' : 'win-or-lose-card2'
    return (
      <div className="main-container">
        <div className="bg-container">
          <NavBar topScore={topScore} score={score} displayGame={displayGame} />
          <div className="emoji-container">
            <ul className={displayGame}>
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  changeEmoji={this.changeEmoji}
                />
              ))}
            </ul>
            <div className={displayScore}>
              <WinOrLoseCard
                score={score}
                topScore={topScore}
                startAgain={this.startAgain}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
