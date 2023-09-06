// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {EmojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = EmojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
