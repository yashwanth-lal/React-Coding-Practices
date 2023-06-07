// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  onSuccesAuthentication = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginClick = async () => {
    const values = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const creds = JSON.stringify(values)
    const options = {
      method: 'POST',
      body: creds,
    }
    const fetchingProcess = await fetch(url, options)
    const responseObject = await fetchingProcess.json()
    console.log(fetchingProcess)
    if (fetchingProcess.ok === true) {
      console.log(responseObject)
      this.onSuccesAuthentication(responseObject.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="loginOuter">
        <h1>Please Login</h1>
        <button onClick={this.loginClick} type="button" className="btn">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
