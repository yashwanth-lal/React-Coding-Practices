import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookie from 'js-cookie'
import './index.css'

class LoginPage extends Component {
  state = {username: '', password: '', failure: false, errorMsg: ''}

  usernameChange = e => {
    this.setState({username: e.target.value})
  }

  passwordChange = e => {
    this.setState({password: e.target.value})
  }

  onSuccess = response => {
    console.log(response)
    const {history} = this.props
    Cookie.set('jwt_token', response.jwt_token, {expires: 30})
    history.replace('/')
  }

  onFailure = errMessage => {
    this.setState({failure: true, errMessage})
  }

  loginProcess = async e => {
    e.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }
    const fetchingProcess = await fetch(url, options)
    console.log(fetchingProcess)
    const response = await fetchingProcess.json()
    console.log(response)
    if (fetchingProcess.ok === true) {
      this.onSuccess(response)
    } else {
      console.log('error occured')
      this.onFailure(response.error_msg)
    }
  }

  render() {
    const {username, password, failure, errMessage} = this.state
    if (Cookie.get('jwt_token') !== undefined) {
      return Redirect('/')
    }
    return (
      <div className="loginPageOuter">
        <div className="loginPageInner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="loginLogo"
          />
          <form onSubmit={this.loginProcess} className="formDiv">
            <label htmlFor="userId">USERNAME</label>
            <input
              value={username}
              onChange={this.usernameChange}
              placeholder="Username"
              id="userId"
              type="text"
              className="userNameInput"
            />
            <label htmlFor="passwordId">PASSWORD</label>
            <input
              value={password}
              onChange={this.passwordChange}
              placeholder="Password"
              id="passwordId"
              type="password"
              className="passwordInput"
            />
            <button type="submit" className="loginBtnEl">
              Login
            </button>
            {failure && <p className="errPara">{errMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginPage
