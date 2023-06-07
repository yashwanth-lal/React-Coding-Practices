// Write your JS code here
import {Component} from 'react'
import LogoutButton from '../LogoutButton/index'
import Header from '../Header'

import './index.css'

class About extends Component {
  render() {
    return (
      <div className="aboutOuter">
        <Header />
        <h1>About Route</h1>
        <LogoutButton />
      </div>
    )
  }
}
export default About
