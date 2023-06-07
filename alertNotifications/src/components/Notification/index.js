// Write your code here
// Write your code here
import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props

    return (
      <div className="overallPage">
        <li>{children}</li>
        <div className="icon">
          <GrFormClose />
        </div>
      </div>
    )
  }
}
export default Notification
