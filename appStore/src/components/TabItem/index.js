// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  clickFunc = e => {
    console.log(e.target.textContent)
  }

  render() {
    const {tabsList} = this.props
    const {displayText} = tabsList
    return (
      <li>
        <button className="btn" type="button" onClick={this.clickFunc}>
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
