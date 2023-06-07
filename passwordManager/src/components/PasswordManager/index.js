import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import YourPasswords from '../YourPasswords/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    initialList: [],
    website: '',
    username: '',
    password: '',
    isEmpty: true,
  }

  websiteChange = e => {
    this.setState({website: e.target.value})
  }

  usernameChange = e => {
    this.setState({username: e.target.value})
  }

  passwordChange = e => {
    this.setState({password: e.target.value})
  }

  addClickFunc = e => {
    e.preventDefault()
    const {website, username, password} = this.state
    const array = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
    const res = array[Math.floor(Math.random() * array.length)]
    const firstArray = {
      id: uuidV4(),
      website,
      username,
      password,
      bgColor: res,
    }
    this.setState(prevState => ({
      initialList: [...prevState.initialList, firstArray],
      website: '',
      username: '',
      password: '',
      isEmpty: false,
    }))

    // const {initialList} = this.props
  }

  deletePassword = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.filter(each => {
        if (each.id !== id) {
          return each
        }
        return null
      }),
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      isEmpty,
      initialList,
      recordCount,
    } = this.state

    // console.log(initialList)

    return (
      <div className="outer">
        <div className="inner">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="addingNewPassDiv">
            <form className="formDiv">
              <h1 className="addNewPassPara">Add New Password</h1>

              <div className="imgInputDiv">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  value={website}
                  onChange={this.websiteChange}
                  placeholder="Enter Website"
                  className="inputEl"
                  type="text"
                />
              </div>

              <div className="imgInputDiv">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  value={username}
                  onChange={this.usernameChange}
                  placeholder="Enter Username"
                  className="inputEl"
                  type="text"
                />
              </div>

              <div className="imgInputDiv">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  value={password}
                  type="password"
                  onChange={this.passwordChange}
                  placeholder="Enter Password"
                  className="inputEl"
                />
              </div>

              <div className="btnDiv">
                <button
                  onClick={this.addClickFunc}
                  className="addBtn"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
            <img
              className="firstPersonImage"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <YourPasswords
            sendInput={this.sendInput}
            deletePassword={this.deletePassword}
            isEmpty={isEmpty}
            recordCount={recordCount}
            initialList={initialList}
          />
        </div>
      </div>
    )
  }
}
export default PasswordManager
