// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import Header from '../Header/index'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="HomeOuter">
          <div className="homeLeftPart">
            <h1 className="homeHeading">
              Clothes That Get YOU <br /> Noticed
            </h1>
            <p className="homePara">
              Fashion is part of the daily air automatic dependency
              installation, I would recommend checking the documentation or
              asking your instructor or platform support team for more
              information. Alternatively, you can always run npm install
              manually after running the ccbp start command to ensure that all
              dependencies are properly installed.
            </p>
            <button className="homeBtn" type="button">
              Shop Now
            </button>
          </div>
          <div className="homeRightPart">
            <img
              className="homeImage"
              alt="clothes that get you noticed"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            />
          </div>
        </div>
      </>
    )
  }
}
export default Home
