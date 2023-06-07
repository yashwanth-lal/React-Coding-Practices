// Write your code here
import {Component} from 'react'
// import CashWithdrawal from '../CashWithdrawal'
import './index.css'

class DenominationItem extends Component {
  sendDenomination = () => {
    const {denominationsList, remainingBalFunc} = this.props
    const {value} = denominationsList
    // console.log(value)
    remainingBalFunc(value)
  }

  render() {
    const {denominationsList} = this.props
    const {value} = denominationsList
    return (
      <li className="listContainer">
        <button className="btn" type="button" onClick={this.sendDenomination}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
