// Write your code here

import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {url} = this.props
    return (
      <div>
        <img src={url} alt="ima" className="imageEl" />
        <p className="placeName">sample</p>
      </div>
    )
  }
}
export default DestinationItem
