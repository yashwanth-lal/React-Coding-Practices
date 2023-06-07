// Write your code here
// Write your code here
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'

import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {toggleTheme, isDarkTheme} = value
          if (isDarkTheme) {
            return (
              <>
                <Navbar />

                <div className="aboutDivD">
                  <img
                    className="aboutImgD"
                    alt="about"
                    src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  />
                  <h1 className="aboutLightParaD">About</h1>
                </div>
              </>
            )
          }
          return (
            <>
              <Navbar />

              <div className="aboutDiv">
                <img
                  className="aboutImg"
                  alt="about"
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                />
                <h1 className="aboutLightPara">About</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default About
