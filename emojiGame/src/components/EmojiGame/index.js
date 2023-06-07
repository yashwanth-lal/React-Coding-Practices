/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {win: true}

  render() {
    const {emojisList} = this.props
    const {win} = this.state
    return (
      <div className="overAllPage">
        <NavBar />
        <div className="outerGameContainer">
          {win ? (
            <div className="emojiBorderDiv">
              {emojisList.map(each => (
                <EmojiCard key={each.id} emojiDetails={each} />
              ))}
            </div>
          ) : (
            <WinOrLossCard />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
