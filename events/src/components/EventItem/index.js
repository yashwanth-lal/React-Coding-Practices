// Write your code here
import {Component} from 'react'
import './index.css'

// Write your code here
class EventItem extends Component {
  clickFunc = () => {
    const {eachEvent, passStatus} = this.props
    const {imageUrl, name, location, registrationStatus} = eachEvent
    passStatus(registrationStatus)
  }

  render() {
    const {eachEvent} = this.props
    const {imageUrl, name, location, registrationStatus} = eachEvent
    return (
      <li onClick={this.clickFunc} className="eventItem">
        <button type="button" className="imgBtn">
          <img src={imageUrl} alt="event" className="imageEl" />
        </button>
        <p className="namePara">{name}</p>
        <p className="locationPara">{location}</p>
      </li>
    )
  }
}
export default EventItem
