import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isGameProgress: true,
    topScore: 0,
    emojiList: [],
  }

  resetGame = () => {
    this.setState({emojiList: [], isGameProgress: true})
  }

  scoreCard = () => {
    const {emojisList} = this.props
    const {emojiList} = this.state
    const isWon = emojisList.length === emojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onPlayAgain={this.resetGame}
        score={emojiList.length}
      />
    )
  }

  finishGameAndTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGameProgress: false})
  }

  clickEmoji = id => {
    const {emojiList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = emojiList.includes(id)
    const emojiLength = emojiList.length

    if (isEmojiPresent) {
      this.finishGameAndTopScore(emojiLength)
    } else {
      if (emojisList.length - 1 === emojiLength) {
        this.finishGameAndTopScore(emojisList.length)
      }
      this.setState(prev => ({emojiList: [...prev.emojiList, id]}))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  changeEmoji = () => {
    const isSuffleEmoji = this.shuffledEmojisList()

    return (
      <ul>
        {isSuffleEmoji.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameProgress, emojiList} = this.state
    return (
      <div>
        <NavBar
          currentScore={emojiList.length}
          isGameProgress={isGameProgress}
          topScore={topScore}
        />
        <div>{isGameProgress ? this.changeEmoji() : this.scoreCard()}</div>
      </div>
    )
  }
}

export default EmojiGame
