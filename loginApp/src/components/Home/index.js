import {Component} from 'react'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'

import './index.css'

class Home extends Component {
  state = {login: true}

  changeLoginStatus = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state
    return (
      <div className="containerOuter">
        {login ? (
          <>
            <Message message="Please Login" />
            <Login changeLoginStatus={this.changeLoginStatus} />
          </>
        ) : (
          <>
            <Message message="Welcome User" />
            <Logout changeLoginStatus={this.changeLoginStatus} />
          </>
        )}
      </div>
    )
  }
}
export default Home
