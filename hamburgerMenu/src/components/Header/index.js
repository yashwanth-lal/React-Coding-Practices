// Write your code here
// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const overlay = {
  backgroundColor: 'white',
}

class Header extends Component {
  render() {
    return (
      <div className="headerEl">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="websiteLogo"
          />
        </Link>
        <div>
          <Popup
            modal
            overlayStyle={overlay}
            trigger={
              <button
                data-testid="hamburgerIconButton"
                type="button"
                className="trigger-button"
              >
                <GiHamburgerMenu className="hamburderIcon" />
              </button>
            }
          >
            {close => (
              <div className="modalContainer">
                <button
                  type="button"
                  onClick={() => close()}
                  data-testid="closeButton"
                  className="closeICon"
                >
                  <IoMdClose />
                </button>
                <ul>
                  <Link className="textDec" to="/" onClick={() => close()}>
                    <li className="homeModal">
                      <AiFillHome className="homeICon" />

                      <p>Home</p>
                    </li>
                  </Link>
                  <Link className="textDec" to="/about" onClick={() => close()}>
                    <li className="aboutModal">
                      <BsInfoCircleFill />
                      <p>About</p>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default Header
