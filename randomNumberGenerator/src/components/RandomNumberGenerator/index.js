// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  clickEvent = () => {
    const randomNo = Math.ceil(Math.random() * 100)
    // console.log(randomNo)
    this.setState({number: randomNo})
  }

  render() {
    const {number} = this.state
    return (
      <div className="overallContainer">
        <div className="smallContainer">
          <h1 className="heading"> Random Number </h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.clickEvent}>
            Generate
          </button>
          <p className="randomNumber"> {number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
