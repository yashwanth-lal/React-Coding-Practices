import {Component} from 'react'
import './index.css'

class ScoreCard extends Component {
  playAgainBtn = () => {
    const {playAgainFunc} = this.props
    playAgainFunc()
  }

  render() {
    const {score, altValue} = this.props
    return (
      <div className="bgScoreCard">
        <div className="insideScoreCard">
          <img
            className="trophyEl"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt={altValue}
          />
          <p className="yourScorePara">YOUR SCORE</p>
          <h1 className="scoreEl">{score}</h1>
          <button
            onClick={this.playAgainBtn}
            type="button"
            className="playAgainBtn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }
}
export default ScoreCard
