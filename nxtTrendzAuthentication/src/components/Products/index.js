import {Component} from 'react'
import Header from '../Header/index'

import './index.css'

class Products extends Component {
  render() {
    return (
      <div>
        <Header />
        <img
          className="productsImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
      </div>
    )
  }
}
export default Products
