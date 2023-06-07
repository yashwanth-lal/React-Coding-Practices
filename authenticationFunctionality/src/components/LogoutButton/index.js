// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  logoutClick = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <>
        <button onClick={this.logoutClick} type="button" className="btn">
          Logout
        </button>
      </>
    )
  }
}
export default withRouter(LogoutButton)
