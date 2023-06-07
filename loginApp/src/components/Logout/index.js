import {Component} from 'react'
import './index.css'

class Logout extends Component {
  logoutClickFunc = () => {
    const {changeLoginStatus} = this.props
    changeLoginStatus()
  }

  render() {
    return (
      <button onClick={this.logoutClickFunc} type="button" className="btnEL">
        Logout
      </button>
    )
  }
}
export default Logout
