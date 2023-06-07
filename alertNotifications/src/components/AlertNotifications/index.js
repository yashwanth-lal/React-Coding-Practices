// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const notificationInfo = [
  {
    icon: <AiFillCheckCircle className="success" />,
    color: 'success',
    status: 'SUCCESS',
    message: 'You can access all the files in the folder',
  },
  {
    icon: <RiErrorWarningFill className="error" />,
    color: 'error',
    status: 'Error',
    message: 'Sorry, you are not authorized to have access to delete the file',
  },
  {
    icon: <MdWarning className="warning" />,
    color: 'warning',
    status: 'WARNING',
    message: 'Viewers of this file can see comments and suggestions',
  },
  {
    icon: <MdInfo className="info" />,
    color: 'info',
    status: 'INFO',
    message: 'Anyone on the internet can view these files',
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="page">
        <h1>Alert Notifications</h1>

        <ul className="ulEl">
          {notificationInfo.map(each => (
            <Notification>
              <div className="overall">
                {each.icon}
                <div className="textPart">
                  <h1 className={each.color}>{each.status}</h1>
                  <p className="msgPara">{each.message}</p>
                </div>
              </div>
            </Notification>
          ))}
        </ul>
      </div>
    )
  }
}
export default AlertNotifications
