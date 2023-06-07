// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  //   state = {changedAmount: 0}

  //   componentDidMount = () => {
  //     // const {changedAmount} = this.state
  //     const {transactionHistory} = this.props
  //     if (transactionHistory.length !== 0) {
  //       console.log('transactionHistory MD')
  //       console.log(transactionHistory[0].amountEl)
  //       const changed = transactionHistory[0].amountEl - 1
  //       console.log(changed)
  //       this.setState({changedAmount: changed})
  //     }
  //   }

  render() {
    const {balance, income, expense} = this.props
    console.log(balance, income, expense)
    return (
      <>
        <div className="balanceContainer">
          <img
            alt="balance"
            className="balIcon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
          <div className="balanceContainer2">
            <p className="balancePara">Your Balance</p>
            <p data-testid="balanceAmount" className="balanceNumber">
              Rs {balance}
            </p>
          </div>
        </div>

        <div className="incomeContainer">
          <img
            alt="income"
            className="balIcon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <div className="balanceContainer2">
            <p className="balancePara">Your Income</p>
            <p data-testid="incomeAmount" className="balanceNumber">
              Rs {income}
            </p>
          </div>
        </div>

        <div className="expensesContainer">
          <img
            alt="expenses"
            className="balIcon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
          <div className="balanceContainer2">
            <p className="balancePara">Your Expenses</p>
            <p data-testid="expensesAmount" className="balanceNumber">
              Rs {expense}
            </p>
          </div>
        </div>
      </>
    )
  }
}
export default MoneyDetails
