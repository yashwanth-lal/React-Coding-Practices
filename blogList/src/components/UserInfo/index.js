// Write your JS code here
import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="userInfoEl">
        <img
          className="imgel"
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
        <h1 className="name">Wade Warren</h1>
        <p>Software developer at UK</p>
      </div>
    )
  }
}
export default UserInfo
