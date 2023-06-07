// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {joe: false, jonas: false}

  displayJoe = () => {
    const {joe} = this.state
    console.log(joe)
    if (joe === false) {
      this.setState({joe: true})
    } else {
      this.setState({joe: false})
    }
  }

  displayJonas = () => {
    console.log('inside jonas')

    const {jonas} = this.state
    if (jonas === false) {
      this.setState({jonas: true})
      return
    }
    this.setState({jonas: false})
  }

  render() {
    const {joe, jonas} = this.state
    return (
      <div className="outer">
        <h1 className="heading">Show/Hide</h1>
        <div className="outer1">
          <div className="inner">
            <button className="btn" type="button" onClick={this.displayJoe}>
              Show/Hide Firstname
            </button>
            {joe === true ? <p className="nameBox">Joe</p> : null}
          </div>
          <div className="inner">
            <button type="button" onClick={this.displayJonas} className="btn">
              Show/Hide Lastname
            </button>
            {jonas === true ? <p className="nameBox">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
