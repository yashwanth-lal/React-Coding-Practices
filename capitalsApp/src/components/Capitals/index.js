import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].country}

  clickFunc = e => {
    console.log(e.target.value)
    // console.log(countryAndCapitalsList)
    const resCapital = countryAndCapitalsList.filter(
      each => each.id === e.target.value,
    )
    console.log(resCapital)
    this.setState({capital: resCapital[0].country})
  }

  render() {
    const {capital} = this.state
    return (
      <div className="outer">
        <div className="inner">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="cont">
            <select className="sel" onChange={this.clickFunc}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="capital">{capital}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
