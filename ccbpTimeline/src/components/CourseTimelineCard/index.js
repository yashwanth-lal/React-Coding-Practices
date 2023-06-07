// Write your code here
// Write your code here
// Write your code here
import {Component} from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import {Chrono} from 'react-chrono'
import './index.css'

class CourseTimelineCard extends Component {
  render() {
    const {timeLineData} = this.props
    console.log(timeLineData)
    const {
      categoryId,
      title,
      courseTitle,
      description,

      duration,
      tagsList,
    } = timeLineData

    return (
      <div className="fullOuterProject">
        <div className="titleIconDiv">
          <h1>{courseTitle}</h1>
          <div className="clockDiv">
            <AiFillClockCircle />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <div className="spanDiv">
          {tagsList.map(each => (
            <p className="spanEL" key={each.id}>
              {each.name}
            </p>
          ))}
        </div>
      </div>
    )
  }
}
export default CourseTimelineCard
