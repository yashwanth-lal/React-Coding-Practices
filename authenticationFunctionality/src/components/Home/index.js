// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import LogoutButton from '../LogoutButton/index'
import './index.css'
import Header from '../Header/index'

class About extends Component {
  render() {
    return (
      <div className="homeOuter">
        <Header />
        <h1>Home Route</h1>
        <LogoutButton />
      </div>
    )
  }
}
export default About
