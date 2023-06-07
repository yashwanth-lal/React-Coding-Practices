// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojiDetails} = this.props
    const {emojiUrl, emojiName} = emojiDetails
    return (
      <button type="button" className="emojiBtn">
        <img className="emojiImg" src={emojiUrl} alt={emojiName} />
      </button>
    )
  }
}
export default EmojiCard
