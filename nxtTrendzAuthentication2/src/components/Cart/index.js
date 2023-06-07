// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header/index'

import './index.css'

class Cart extends Component {
  render() {
    const loginCheck = Cookies.get('jwt_token')
    if (loginCheck === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
          />
        </div>
      </>
    )
  }
}
export default Cart
