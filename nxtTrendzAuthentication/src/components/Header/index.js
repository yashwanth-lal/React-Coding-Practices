// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="headerOuter">
        <img
          className="headerLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="headerRightPart">
          <Link to="/" className="custom-link">
            <li className="headerHome">Home</li>
          </Link>
          <Link to="/products" className="custom-link">
            <li className="headerProducts">Products</li>
          </Link>
          <Link to="/cart" className="custom-link">
            <li className="headerCart">Cart</li>
          </Link>
          <button className="headerBtn" type="button">
            Logout
          </button>
        </ul>
      </div>
    )
  }
}
export default Header
