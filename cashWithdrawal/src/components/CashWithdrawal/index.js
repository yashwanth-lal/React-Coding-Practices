// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  remainingBalFunc = value => {
    // console.log(typeof value)
    const {balance} = this.state
    if (balance >= value) {
      this.setState(prevState => ({balance: prevState.balance - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <div className="nameAndIcon">
            <div className="icon">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="balPara">Your Balance</p>
            <p className="balNumber">{balance}</p>
          </div>
          <p className="inRupeesPara">In Rupees</p>
          <p className="withdrawPara">Withdraw</p>
          <p className="choosePara">CHOOSE SUM (IN RUPEES)</p>
          <ul className="componentContainer">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationsList={each}
                remainingBalFunc={this.remainingBalFunc}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
