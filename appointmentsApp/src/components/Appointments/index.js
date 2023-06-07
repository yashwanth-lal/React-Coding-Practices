// Write your code here
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentsList: [],
    changed: false,
  }

  buttonColor = true

  titleChange = e => {
    // console.log(e.target.value)
    this.setState({title: e.target.value})
  }

  dateChange = e => {
    // console.log(e.target.value)
    this.setState({date: e.target.value})
  }

  clickFunc = () => {
    const {title, date} = this.state
    // console.log(typeof appointmentsList)

    const initialList = {
      id: uuidV4(),
      title,
      date,
      isActive: false,
    }
    // console.log(initialList)
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, initialList],
      title: '',
      date: '',
    }))
  }

  clickedStar = id => {
    // const {id} = this.props
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
  }

  starredClick = () => {
    const {changed} = this.state
    const {appointmentsList} = this.state
    this.setState({appointmentsList})
    // if (changed) {
    //   console.log('if')
    //   console.log(changed)
    //   const filtered = appointmentsList.filter(each => each.isActive === true)
    //   // Make a copy of the filtered list
    //   const updatedList = [...filtered]
    //   this.setState({appointmentsList: updatedList})
    this.setState({changed: !changed}) // Update the state with the copy
    //   return updatedList
    // }
    // this.setState({changed: !changed}) // Update the state with the copy

    // console.log('else')
    // console.log(appointmentsList)
    // return appointmentsList // Return the original list
  }

  render() {
    const {appointmentsList, title, date, changed} = this.state
    // console.log(appointmentsList)

    const starredColor = !changed ? '' : 'starredBtn2'
    return (
      <div className="outer">
        <div className="inner">
          <h1 className="heading">Add Appointment</h1>
          <div className="addingAppointmentTopPart">
            <form className="formContainer">
              <label htmlFor="titleId" className="para1">
                TITLE
              </label>
              <input
                id="titleId"
                value={title}
                placeholder="Title"
                className="titleInput"
                onChange={this.titleChange}
              />
              <label htmlFor="dateId" className="para1">
                DATE
              </label>
              <input
                id="dateId"
                value={date}
                type="date"
                className="dateInput"
                onChange={this.dateChange}
              />
              <button className="btn" type="button" onClick={this.clickFunc}>
                Add
              </button>
            </form>

            <img
              className="imageEl"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr className="line" />
          <div className="bottom">
            <div className="downPart">
              <h1 className="AppointmentsHeading">Appointments</h1>
              <button
                type="button"
                className={`starredBtn1 ${starredColor}`}
                onClick={this.starredClick}
              >
                Starred
              </button>
            </div>

            <ul className="theAppointmentsBox">
              {changed
                ? appointmentsList
                    .filter(each => each.isActive === true)
                    .map(each1 => (
                      <AppointmentItem
                        key={each1.id}
                        appointmentsList={each1}
                        clickedStar={this.clickedStar}
                      />
                    ))
                : appointmentsList.map(each2 => (
                    <AppointmentItem
                      key={each2.id}
                      appointmentsList={each2}
                      clickedStar={this.clickedStar}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
