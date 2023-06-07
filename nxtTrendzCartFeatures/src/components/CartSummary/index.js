import {Component} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          let totalValue = 0
          cartList.forEach(each => {
            totalValue += each.quantity * each.price
          })

          return (
            <div className="cartSumOuter">
              <div className="cartSummaryDiv">
                <div className="containerDiv">
                  <h1 className="cartSummaryPara">
                    Order Total:
                    <span className="cartSummarySpanEl">
                      {' '}
                      Rs {totalValue}/-
                    </span>
                  </h1>
                  <p className="cartSummaryItemsInCart">
                    {cartList.length} items in cart
                  </p>
                </div>
              </div>
              <button type="button" className="checkoutBtn">
                Checkout
              </button>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
