// Write your code here
import {Component} from 'react'
import './index.css'
import {format} from 'date-fns'

class AppointmentItem extends Component {
  clickStar = () => {
    const {clickedStar, appointmentsList} = this.props
    const {id} = appointmentsList
    // console.log(id)
    clickedStar(id)
  }

  render() {
    const {appointmentsList} = this.props
    console.log(appointmentsList)
    const {title, date, isActive} = appointmentsList
    const timeEl = format(new Date(date), 'dd MMMM yyyy, EEEE') // 19 July 2021, Monday

    // console.log(isActive)

    const starIcon = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    return (
      <li className="outer1">
        <div className="inner1">
          <p className="titlePara">{title}</p>
          <button
            data-testid="star"
            className="btnn"
            type="button"
            onClick={this.clickStar}
          >
            <img
              className="starImg"
              src={starIcon}
              alt="star"
              //   onClick={this.clickStar}
            />
          </button>
        </div>
        <p className="dateEl">{timeEl}</p>
      </li>
    )
  }
}
export default AppointmentItem
