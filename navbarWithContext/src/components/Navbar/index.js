// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {toggleTheme, isDarkTheme} = value
          console.log(isDarkTheme)
          if (isDarkTheme) {
            return (
              <nav className="navbarOuterD">
                <img
                  alt="website logo"
                  className="lightLogoD"
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                />
                <ul className="homeAboutDivD">
                  <Link style={{textDecoration: 'none'}} to="/">
                    <li className="homeNavParaD">Home</li>
                  </Link>
                  <Link style={{textDecoration: 'none'}} to="/about">
                    <li className="aboutNavParaD">About</li>
                  </Link>
                </ul>
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="modeBtnD"
                  data-testid="theme"
                >
                  <img
                    alt="theme"
                    className="lightModeIconD"
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  />
                </button>
              </nav>
            )
          }
          return (
            <nav className="navbarOuter">
              <img
                alt="website logo"
                className="lightLogo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              />
              <ul className="homeAboutDiv">
                <Link style={{textDecoration: 'none'}} to="/">
                  <li className="homeNavPara">Home</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/about">
                  <li className="aboutNavPara">About</li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                onClick={toggleTheme}
                type="button"
                className="modeBtn"
              >
                <img
                  alt="theme"
                  className="lightModeIcon"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                />
              </button>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Navbar
