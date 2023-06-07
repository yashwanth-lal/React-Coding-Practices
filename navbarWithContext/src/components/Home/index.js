// Write your code here
// Write your code here
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'

import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {toggleTheme, isDarkTheme} = value
          if (isDarkTheme) {
            return (
              <>
                <Navbar />

                <div className="homeDivD">
                  <img
                    className="homeImgD"
                    alt="home"
                    src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  />
                  <h1 className="homeParaD">Home</h1>
                </div>
              </>
            )
          }
          return (
            <>
              <Navbar />

              <div className="homeDiv">
                <img
                  className="homeImg"
                  alt="home"
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                />
                <h1 className="homePara">Home</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
