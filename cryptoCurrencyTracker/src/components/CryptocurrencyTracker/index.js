// Write your code here
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList/index'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bgContainer">
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
