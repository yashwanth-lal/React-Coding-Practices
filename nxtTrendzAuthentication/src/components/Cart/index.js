import {Component} from 'react'
import Header from '../Header/index'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <div>
        <Header />

        <img
          className="cartImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </div>
    )
  }
}
export default Cart
