// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {start: false, timerCount: 25, minutes: 25, seconds: '00'}

  tickMin = () => {
    const {minutes} = this.state

    console.log(minutes)

    this.setState(prevState => ({minutes: prevState.minutes - 1}))
    console.log('decreased min')
  }

  tickSec = () => {
    console.log('inside tickSec')
    const {minutes, seconds} = this.state
    console.log(minutes)
    if (minutes === 0 && seconds === '01') {
      clearInterval(this.secondsId)

      this.setState({start: false, minutes: '00', seconds: '00'})
    } else if (seconds === 60) {
      console.log('seconds === 60')
      this.setState({seconds: '00'})
    } else if (seconds === '00') {
      console.log("seconds === '00'")
      this.setState(prevState => ({minutes: prevState.minutes - 1}))
      this.setState({seconds: 59})
      //   this.setState({seconds: 5})
    } else if (seconds <= 10) {
      this.setState(prevState => ({seconds: `0${prevState.seconds - 1}`}))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
      console.log(seconds)
    }
  }

  componentWillUnmount = () => {
    console.log('hello')
  }

  componentDidMount = () => {
    console.log('componentDidMount')
  }

  actionClick = () => {
    this.setState(prevState => ({start: !prevState.start}))
    console.log('actionClick2')
    const {start} = this.state
    if (!start) {
      console.log('started')

      //   this.minutesId = setInterval(() => {
      //     this.tickMin()
      //   }, 5000)
      console.log('afterSetInteracl')
      this.secondsId = setInterval(() => {
        this.tickSec()
      }, 1000)
    } else {
      console.log('else')
      clearInterval(this.minutesId)
      console.log('afterClear')
      clearInterval(this.secondsId)
    }
  }

  resetClick = () => {
    clearInterval(this.secondsId)
    this.setState({
      start: false,
      timerCount: 25,
      minutes: 25,
      seconds: '00',
    })
  }

  decClick = () => {
    const {start} = this.state
    if (start === false) {
      this.setState(prevState => ({
        timerCount: prevState.timerCount - 1,
        minutes: prevState.minutes - 1,
      }))
    }
  }

  incClick = () => {
    const {start} = this.state
    if (start === false) {
      this.setState(prevState => ({
        timerCount: prevState.timerCount + 1,
        minutes: prevState.minutes + 1,
      }))
    }
  }

  render() {
    const {start, timerCount, minutes, seconds} = this.state
    const action = start ? 'Pause' : 'Start'
    const action2 = start ? 'Running' : 'Paused'
    const action3 = start
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const iconAlt = start ? 'pause icon' : 'play icon'

    return (
      <div className="outer">
        <div className="inner">
          <h1 className="heading">Digital Timer</h1>
          <div className="middlePart">
            <div className="bgImage">
              <div className="bgWhite">
                <h1 className="runningTime">
                  {minutes}:{seconds}
                </h1>
                <p className="TimePaused_Running">{action2}</p>
              </div>
            </div>
            <div className="controlsPart">
              <div className="controls">
                <button
                  type="button"
                  className="btn"
                  onClick={this.actionClick}
                >
                  <img
                    className="start_pauseIcon"
                    src={action3}
                    alt={iconAlt}
                  />
                  {action}
                </button>
                {/* <p className="pauseStartPara"></p> */}
                <button onClick={this.resetClick} type="button" className="btn">
                  <img
                    className="resetIcon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />
                  Reset
                </button>
                {/* <p className="resetPara">Reset</p> */}
              </div>
              <p className="setTimerLimitPara">Set Timer Limit</p>
              <div className="incDecControls">
                <button type="button" onClick={this.decClick} className="minus">
                  -
                </button>
                <p className="timerDisplay">{timerCount}</p>
                <button type="button" onClick={this.incClick} className="plus">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
