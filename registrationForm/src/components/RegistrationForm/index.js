// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    isUserName: false,
    isPassword: false,
    registerSuccess: false,
  }

  submitFunc = e => {
    e.preventDefault()
    // console.log(history)

    const {username, password} = this.state
    if (username !== '' && password !== '') {
      this.setState({registerSuccess: true})
    } else if (username !== '' && password === '') {
      this.setState({isPassword: true})
    } else if (password !== '' && username === '') {
      this.setState({isUserName: true})
    } else {
      this.setState({isUserName: true, isPassword: true})
    }
    return null
  }

  usernameBlur = e => {
    if (e.target.value === '') {
      this.setState({isUserName: true})
    } else {
      return this.setState({isUserName: false})
    }
    return null
  }

  passwordBlur = e => {
    if (e.target.value === '') {
      this.setState({isPassword: true})
    } else {
      return this.setState({isPassword: false})
    }
    return null
  }

  usernameChange = e => {
    this.setState({username: e.target.value})
  }

  passwordChange = e => {
    this.setState({password: e.target.value})
  }

  goBackFunc = () => {
    this.setState({registerSuccess: false, username: '', password: ''})
  }

  render() {
    const {isPassword, isUserName, registerSuccess} = this.state
    const bgUser = isUserName ? 'errNameInput' : null
    const bgPass = isPassword ? 'errPasswordInput' : null

    return (
      <div className="outer">
        <h1 className="heading">Registration</h1>
        {!registerSuccess ? (
          <div className="box">
            <form onSubmit={this.submitFunc} className="inner">
              <label htmlFor="userNameId" className="labelEl">
                FIRST NAME
              </label>
              <input
                // autoComplete="true"
                placeholder="First Name"
                onBlur={this.usernameBlur}
                onChange={this.usernameChange}
                id="userNameId"
                className={`inputEl ${bgUser}`}
                type="text"
              />
              {isUserName ? <p className="requiredErr">Required</p> : null}

              <label htmlFor="passwordId" className="labelEl">
                LAST NAME
              </label>
              <input
                // autoComplete="true"
                placeholder="Last Name"
                onBlur={this.passwordBlur}
                onChange={this.passwordChange}
                id="passwordId"
                className={`inputEl ${bgPass}`}
                type="text"
              />
              {isPassword ? <p className="requiredErr">Required</p> : null}

              <button className="btnEl" type="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="successPage">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button onClick={this.goBackFunc} type="button" className="btnEl2">
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
