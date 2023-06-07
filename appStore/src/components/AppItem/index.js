// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails

    return (
      <li className="eachApp">
        <img className="appIcon" alt={appName} src={imageUrl} />
        <p className="appName">{appName}</p>
      </li>
    )
  }
}
export default AppItem
