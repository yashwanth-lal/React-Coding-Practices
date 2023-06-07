// Write your code here.
// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="outerNav">
        <div className="innerNav">
          <img
            className="logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <p className="logoName">Emoji Game</p>
          <div className="scoreDiv">
            <p className="score">Score: 0</p>
            <p className="topScore">Top Score: 0</p>
          </div>
        </div>
      </div>
    )
  }
}
export default NavBar
