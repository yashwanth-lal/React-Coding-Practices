import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="headerDiv">
        <img
          className="headerLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
          alt="nxt slides logo"
        />
        <h1 className="headerHeading">Nxt Slides</h1>
      </div>
    )
  }
}
export default Header
