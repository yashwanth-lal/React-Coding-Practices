import {Component} from 'react'
import Cookie from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

class Header extends Component {
  logoutClick = () => {
    const {history} = this.props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <>
        <div className="outerHeaderDiv">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="appLogo"
            />
          </Link>

          <div className="headerElsDiv">
            <Link to="/">
              <p className="homePara">Home</p>
            </Link>
            <Link to="/jobs">
              <p className="jobsPara">Jobs</p>
            </Link>
          </div>
          <button
            onClick={this.logoutClick}
            type="button"
            className="headerBtnEl"
          >
            Logout
          </button>
        </div>
        <div className="headerMobileOuterDiv">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="appLogo"
            />
          </Link>

          <div className="headerElsDiv">
            <Link to="/">
              <AiFillHome className="mobHome" />
            </Link>
            <Link to="/jobs">
              <BsFillBriefcaseFill className="mobJobs" />
            </Link>

            <FiLogOut className="mobLogout" onClick={this.logoutClick} />
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(Header)
