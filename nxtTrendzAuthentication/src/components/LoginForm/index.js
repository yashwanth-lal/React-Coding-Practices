// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isMatch: true,
    isValidUser: true,
    isValidPassword: true,
  }

  userNameChange = e => {
    this.setState({username: e.target.value})
  }

  passwordChange = e => {
    this.setState({password: e.target.value})
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password, isValidUser, isValidPassword} = this.state
    if (username === '') {
      this.setState({isValidUser: false})
    } else if (password === '') {
      this.setState({isValidPassword: false, isValidUser: true})
    } else {
      const url = 'https://apis.ccbp.in/login'
      const credentials = {username, password}

      const jsonString = JSON.stringify(credentials)
      const options = {
        method: 'POST',
        body: jsonString,
      }
      const fetchingProcess = await fetch(url, options)
      const response = await fetchingProcess.json()
      console.log(response)      

      if (fetchingProcess.ok === true) {
        const {history} = this.props

        const successRes = {jwt_token: response.jwt_token}
        console.log(successRes)

        history.replace('/')
      } else {
        const failureRes = {
          status_Code: 400,
          error_msg: 'Username is not found',
        }
        this.setState({
          isMatch: false,
          isValidPassword: true,
          isValidUser: true,
        })
        console.log(failureRes)
      }
    }
  }

  render() {
    // console.log(this.props)
    const {isMatch, isValidUser, isValidPassword} = this.state
    return (
      <div className="loginOuter">
        <img
          className="loginImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="formContainer" onSubmit={this.submitForm}>
          <img
            className="headerLogo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <label className="userNameLabel" htmlFor="usernameId">
            USERNAME
          </label>
          <input
            placeholder="Username"
            className="userNameInput"
            type="text"
            id="usernameId"
            onChange={this.userNameChange}
          />
          {isValidUser ? null : <p className="warningMsg">*Required</p>}

          <label className="passwordLabel" htmlFor="passwordId">
            PASSWORD
          </label>
          <input
            placeholder="Password"
            className="passwordInput"
            type="password"
            id="passwordId"
            onChange={this.passwordChange}
          />
          {isValidPassword ? null : <p className="warningMsg">*Required</p>}
          <button type="submit" className="loginBtn">
            Login
          </button>
          {isMatch ? null : (
            <p className="warningMsg">*Username and Password didn't match</p>
          )}
        </form>
      </div>
    )
  }
}
export default LoginForm
