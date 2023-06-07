import {Component} from 'react'
import './index.css'

class Login extends Component {
  loginClickFunc = () => {
    const {changeLoginStatus} = this.props
    console.log('clicked')
    changeLoginStatus()
  }

  render() {
    return (
      <button onClick={this.loginClickFunc} type="button" className="btnEL">
        Login
      </button>
    )
  }
}
export default Login
