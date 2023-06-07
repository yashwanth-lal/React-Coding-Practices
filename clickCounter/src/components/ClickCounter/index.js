// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  changeCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="wholeContainer">
        <h1 className="heading1">
          The Button has been clicked <br />{' '}
          <span className="number">{count}</span> times
        </h1>

        <p className="para">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.changeCount}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
