// Write your code here
import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  clickFunc = () => {
    const {deleteHistory, transactionHistory} = this.props
    const {id} = transactionHistory
    // console.log(id)
    deleteHistory(id)
  }

  render() {
    const {transactionHistory} = this.props
    const {titleEl, amountEl, typeEl} = transactionHistory

    return (
      <li className="eachList">
        <p>{titleEl}</p>
        <p>{amountEl}</p>
        <p>{typeEl}</p>
        <button
          data-testid="delete"
          onClick={this.clickFunc}
          className="deleteBtn"
          type="button"
        >
          <img
            className="deleteIcon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default TransactionItem
