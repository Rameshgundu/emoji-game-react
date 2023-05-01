// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, changeEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onChange = () => {
    changeEmoji(id)
  }
  return (
    <li>
      <button type="button" className="emoji-btn" onClick={onChange}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
