// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState =>
      prevState.count !== 200 ? {count: prevState.count + 10} : null,
    )
  }

  onBraking = () => {
    this.setState(prevState =>
      prevState.count !== 0 ? {count: prevState.count - 10} : null,
    )
  }

  render() {
    const {count} = this.state
    // console.log(count)

    return (
      <div className="fullContainer">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading2">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonContainer">
          <button type="button" className="btn1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.onBraking}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
