// Write your code here

import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {toggleTheme, isDarkTheme} = value
          if (isDarkTheme) {
            return (
              <>
                <Navbar />

                <div className="notFoundDivD">
                  <img
                    alt="not found"
                    className="notFoundImg"
                    src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  />
                  <h1 className="lostYourWayHeadingD">Lost Your Way?</h1>
                  <p className="lostYourWayParaD">
                    We cannot seem to find the page you are looking for.
                  </p>
                </div>
              </>
            )
          }
          return (
            <>
              <Navbar />

              <div className="notFoundDiv">
                <img
                  alt="not found"
                  className="notFoundImg"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                />
                <h1 className="lostYourWayHeading">Lost Your Way?</h1>
                <p className="lostYourWayPara">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default NotFound
