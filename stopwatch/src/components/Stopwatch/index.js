// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {second: 0}

  startFunction = () => {
    const {second} = this.state
    this.minutes = Math.floor(second / 60)
    this.seconds = Math.floor(second % 60)
    let res =
      this.seconds < 10 && this.minutes < 1
        ? `00:0${this.seconds}`
        : `00:${this.seconds}`

    res =
      this.minutes >= 1 && this.minutes < 10 && this.seconds < 10
        ? `0${this.minutes}:0${this.seconds}`
        : res
    res =
      this.minutes >= 1 && this.minutes < 10 && this.seconds >= 10
        ? `0${this.minutes}:${this.seconds}`
        : res
    res =
      this.minutes >= 10 && this.seconds >= 10
        ? `${this.minutes}:${this.seconds}`
        : res
    res =
      this.minutes >= 10 && this.seconds < 10
        ? `${this.minutes}:0${this.seconds}`
        : res

    return res
    // return minutesPart
  }

  startClick = () => {
    this.startId = setInterval(() => {
      this.setState(prevState => ({second: prevState.second + 1}))
    }, 1000)
  }

  stopClick = () => {
    clearInterval(this.startId)
  }

  resetClick = () => {
    clearInterval(this.startId)
    this.setState({second: 0})
  }

  //   componentDidMount = () => {
  //     this.setState({second: '00', minute: '00'})
  //   }

  render() {
    return (
      <div className="outer">
        <div className="inner">
          <h1 className="heading">Stopwatch</h1>
          <div className="timerDiv">
            <div className="iconTimerDiv">
              <img
                className="clockIcon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="TimerPara">Timer</p>
            </div>

            <h1 className="timerMinsSecs">{this.startFunction()}</h1>
            <div className="btnControls">
              <button onClick={this.startClick} type="button" className="btn1">
                Start
              </button>
              <button onClick={this.stopClick} type="button" className="btn2">
                Stop
              </button>
              <button onClick={this.resetClick} type="button" className="btn3">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
