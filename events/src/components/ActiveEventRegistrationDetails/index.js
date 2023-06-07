// Write your code here
import {Component} from 'react'
import './index.css'
// import EventItem from '../EventItem'
// import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'

// Write your code here
const theStatus = {
  notRegisteredYet: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  initial: 'INITIAL',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  registrationDetails = () => {
    const {status} = this.props

    switch (status) {
      case theStatus.notRegisteredYet:
        return (
          <div className="yetToDiv">
            <img
              className="yetToRegImage"
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
            />
            <p>
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with the
              beautiful art form
            </p>
            <button type="button" className="buttonEl">
              Register Here
            </button>{' '}
          </div>
        )

      case theStatus.registered:
        return (
          <div className="registeredDiv">
            <img
              className="registeredImage"
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
            />
            <h1>You have already registered for the event</h1>
          </div>
        )

      case theStatus.registrationClosed:
        return (
          <div className="registerClosedDiv">
            <img
              className="registerClosedImage"
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
            />
            <h1>Registrations Are Closed Now! </h1>
            <p>
              Stay tuned. We will reopen <br />
              the registrations soon!{' '}
            </p>
          </div>
        )
      default:
        return (
          <p className="initialPara">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  render() {
    return <div className="activeEventOuter">{this.registrationDetails()}</div>
  }
}
export default ActiveEventRegistrationDetails
