// Write your JS code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {eachCryptoData} = this.props
    const {currencyName, usdValue, euroValue, id, currencyLogo} = eachCryptoData
    return (
      <li className="liDiv">
        <div className="coinTypeDiv">
          <img className="itemImg" src={currencyLogo} alt={currencyName} />
          <p className="currencyName">{currencyName}</p>
        </div>
        <div className="valuesDiv">
          <p className="usdValue">{usdValue}</p>
          <p className="euroValue">{euroValue}</p>
        </div>
      </li>
    )
  }
}
export default CryptocurrencyItem
