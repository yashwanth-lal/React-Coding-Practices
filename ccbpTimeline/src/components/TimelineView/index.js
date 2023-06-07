// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard/index'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="fullOuter">
        <div className="topSections">
          <h1>MY JOURNEY OF CCBP 4.0</h1>
        </div>
        <div className="chronoDiv">
          <Chrono
            cardWidth="500"
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
          >
            {timelineItemsList.map(each => {
              if (each.tagsList !== undefined) {
                return (
                  <div>
                    <CourseTimelineCard key={each.id} timeLineData={each} />
                  </div>
                )
              }
              return (
                <div>
                  <ProjectTimelineCard key={each.id} projectLineData={each} />
                </div>
              )
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimelineView
