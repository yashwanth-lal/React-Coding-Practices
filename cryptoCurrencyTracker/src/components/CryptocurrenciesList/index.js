// Write your JS code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], loading: true}

  componentDidMount = () => {
    this.fetchingTheCryptoData()
  }

  fetchingTheCryptoData = async () => {
    const fetchedData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const backendData = await fetchedData.json()
    console.log(backendData)
    const cryptoFullData = backendData.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoData: cryptoFullData, loading: false})
  }

  render() {
    const {cryptoData, loading} = this.state
    return loading ? (
      <div className="loadDiv" data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="CryptocurrenciesListOuterDiv">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="imageEl"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul className="ulEl">
          <div className="headDiv1">
            <p>Coin Type</p>
            <div className="headDiv2">
              <p>USD</p>

              <p>EURO</p>
            </div>
          </div>
          {cryptoData.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              eachCryptoData={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
