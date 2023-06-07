// Write your code here
import {Component} from 'react'
import './index.css'

//we are near default props

class LightDarkMode extends Component {
  state = {className: 'buttonContainer'}

  changeBg = () => {
    this.setState({className: 'darkContainer'})
  }

  render() {
    const {className} = this.state
    console.log(className)
    return (
      <div className={className}>
        <h1 className="heading">Click To Change Mode</h1>
        <div className="buttonContainer">
          <button className="btn" type="button" onClick={this.changeBg}>
            Dark Mode
          </button>
        </div>
      </div>
    )
  }
}
LightDarkMode.defaultProps('whiteContainer')
export default LightDarkMode
