import {Component} from 'react'
import './index.css'
import {v4 as uuidV4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const initialRecord = []
class MoneyManager extends Component {
  state = {
    transactionHistory: initialRecord,
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expense: 0,
  }

  changeTitle = e => {
    this.setState({title: e.target.value})
  }

  changeAmount = e => {
    this.setState({amount: e.target.value})
  }

  changeType = e => {
    this.setState({type: e.target.value})
  }

  clickFunc = () => {
    // console.log('clicked')
    const {title, amount, type} = this.state

    //  balance
    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
      }))
    }

    //  income
    this.setState(prevState => {
      if (prevState.income < amount) {
        return {income: amount}
      }

      return null // no state update needed
    })

    //  Expenses
    if (type === 'Expenses') {
      this.setState(prevState => ({
        expense: prevState.expense + parseInt(amount),
      }))
    }
    // } else {
    // //   this.setState(prevState => ({
    // //     expense: prevState.balance - parseInt(amount),
    // //   }))
    // }

    const newRecord = {
      id: uuidV4(),
      titleEl: title,
      amountEl: amount,
      typeEl: type,
    }
    // console.log(newRecord)
    this.setState(prevState => ({
      transactionHistory: [...prevState.transactionHistory, newRecord],
    }))
    this.setState({title: '', amount: '', type: 'Income'})
  }

  deleteHistory = id => {
    const {transactionHistory} = this.state
    const res = transactionHistory.filter(each => each.id === id)
    const deletedRecord = res[0]
    console.log(deletedRecord)
    if (deletedRecord.typeEl === 'Expenses') {
      this.setState(prevState => ({
        balance: parseInt(prevState.balance) + parseInt(deletedRecord.amountEl),
      }))
      this.setState(prevState => ({
        expense: parseInt(prevState.expense) - parseInt(deletedRecord.amountEl),
      }))
    } else {
      this.setState({income: 0, balance: 0})
    }
    this.setState({
      transactionHistory: transactionHistory.filter(
        each => each.id !== deletedRecord.id,
      ),
    })

    //  resume here
  }

  render() {
    const {
      transactionHistory,
      balance,
      income,
      expense,
      title,
      amount,
    } = this.state
    // console.log('transactionHistory')

    // console.log(transactionHistory)
    return (
      <div className="outer">
        <div className="inner">
          <div className="accountHolderPartDiv">
            <h1 className="name">Hi, Richard</h1>
            <p className="introPara">
              Welcome back to your<span className="appName">Money Manager</span>
            </p>
          </div>
          <div className="moneyDetailsDiv">
            <MoneyDetails
              balance={balance}
              income={income}
              expense={expense}
              transactionHistory={transactionHistory}
            />
          </div>
          <form className="formEl">
            <h1 className="formHeading">Add Transaction</h1>
            <label className="titleLabel" htmlFor="titleId">
              TITLE
            </label>
            <input
              value={title}
              onChange={this.changeTitle}
              className="titleInput"
              id="titleId"
              type="text"
              placeholder="TITLE"
            />
            <label className="amountLabel" htmlFor="amountId">
              AMOUNT
            </label>
            <input
              value={amount}
              onChange={this.changeAmount}
              className="amountInput"
              id="amountId"
              type="text"
              placeholder="AMOUNT"
            />
            <label className="typeLabel" htmlFor="typeId">
              TYPE
            </label>
            <select
              onChange={this.changeType}
              className="typeInput"
              id="typeId"
              selected="AMOUNT"
            >
              {transactionTypeOptions.map(each => (
                <option
                  key={each.optionId}
                  selected={each.displayText === 'Income'}
                >
                  {each.displayText}
                </option>
              ))}
            </select>
            <button onClick={this.clickFunc} type="button" className="btn">
              Add
            </button>
          </form>
          <div className="historyContainerPart">
            <h1 className="historyHeading">History</h1>

            <div className="historyHeadings">
              <p className="historyTitle">Title</p>
              <p className="historyAmount">Amount</p>
              <p className="historyType">Type</p>
            </div>
            <ul className="ulEL">
              {transactionHistory.map(each => (
                <TransactionItem
                  deleteHistory={this.deleteHistory}
                  key={each.id}
                  transactionHistory={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
