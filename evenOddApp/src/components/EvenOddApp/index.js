// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  createRandomNumber = () => {
    // const {count} = this.state
    // console.log(count)
    const randNumber = Math.floor(Math.random() * 100)
    // console.log(randNumber)
    this.setState({count: randNumber})
  }

  checkEvenOdd = () => {
    const {count} = this.state
    // console.log(count)
    // console.log(count % 2)
    if (count % 2 === 0) {
      return <p className="para1">Count is Even</p>
    }
    return <p className="para1">Count is Odd</p>
  }

  render() {
    const {count} = this.state
    return (
      <div className="overallContainer">
        <div className="innerBox">
          <h1 className="heading">Count {count}</h1>
          {this.checkEvenOdd()}
          {/* <p className="para1">Count is Even</p> */}
          <button
            type="button"
            className="btn"
            onClick={this.createRandomNumber}
          >
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
