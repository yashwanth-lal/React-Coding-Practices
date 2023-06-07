// Write your code here.
// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLossCard extends Component {
  render() {
    return (
      <div className="yellowContainer">
        <div className="innerWinLoss">
          <h1 className="winLossHeading">You Won</h1>
          <p className="winLossBestScore">Best Score</p>
          <p className="winLossPoints">12/12</p>
          <button type="button" className="playAgainButton">
            Play Again
          </button>
        </div>
        <img
          className="winLossImage"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="wonImage"
        />
      </div>
    )
  }
}
export default WinOrLossCard
