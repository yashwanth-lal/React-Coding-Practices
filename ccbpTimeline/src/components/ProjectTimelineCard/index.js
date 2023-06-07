// Write your code here
// Write your code here
import {Component} from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import {Chrono} from 'react-chrono'
import './index.css'

class ProjectTimelineCard extends Component {
  render() {
    const {projectLineData} = this.props
    const {
      title,
      projectTitle,
      description,
      imageUrl,
      duration,
      projectUrl,
    } = projectLineData

    return (
      <div className="fullOuterProject">
        <img className="imgEl" src={imageUrl} alt="project" />
        <div className="textDiv">
          <div className="upperDiv">
            <h1>{projectTitle}</h1>
            <div className="calenderDiv">
              <AiFillCalendar />
              <p>{duration}</p>
            </div>
          </div>
          <p>{description}</p>
          <a className="anchor" href={projectUrl}>
            Visit
          </a>
        </div>
      </div>
    )
  }
}
export default ProjectTimelineCard
