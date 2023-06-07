import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Cookie from 'js-cookie'

import Header from '../Header'

import './index.css'
// import { cookie } from 'msw/lib/types/context'

class Home extends Component {
  render() {
    if (Cookie.get('jwt_token') === undefined) {
      return Redirect('/login')
    }

    return (
      <>
        <Header />
        <div className="homeBottomOuterDiv">
          <ul className="homeTextPart">
            <li>
              <h1 className="homeHeading">
                Find The Job That <br />
                Fits Your Life
              </h1>
            </li>
            <li>
              <p className="homePara">
                Millions of people are searching for jobs, salary
                <br />
                information, company reviews. Find the job that fits your
                <br />
                abilities and potential.
              </p>
            </li>
            <li>
              <Link to="/jobs">
                <button type="button" className="findJobsBtnEl">
                  Find Jobs
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </>
    )
  }
}
export default Home
