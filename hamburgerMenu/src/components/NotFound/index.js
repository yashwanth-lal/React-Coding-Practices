// Write your code here
import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="notfoundDiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="notfoundImg"
        />
        <h1>Lost Your Way?</h1>
        <p>
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    )
  }
}
export default NotFound
