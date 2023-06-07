import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    const {eachJob} = this.props
    const {
      id,
      companyLogoUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = eachJob
    return (
      <Link to={`/jobs/${id}`}>
        <div className="outerJobCardDiv">
          <div className="logoTitleRatingDiv">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="companyLogoJobCard"
            />
            <div>
              <h1 className="jobCardTitle">{title}</h1>
              <div className="ratingDiv">
                <AiFillStar className="starIcon" />
                <p className="ratingEl">{rating}</p>
              </div>
            </div>
          </div>
          <div className="locationPackageDiv">
            <div className="locationJobTypeDiv">
              <IoLocationSharp className="locationIcon" />
              <p className="locationPara">{location}</p>
              <BsFillBriefcaseFill className="briefCaseIcon" />
              <p className="employmentTypePara">{employmentType}</p>
            </div>
            <p className="packagePara">{packagePerAnnum}</p>
          </div>
          <h1 className="descriptionHeading">Description</h1>
          <p className="jobDescriptionPara">{jobDescription}</p>
        </div>
      </Link>
    )
  }
}
export default Header
