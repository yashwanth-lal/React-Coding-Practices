import {Component} from 'react'
import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'

class SimilarJobs extends Component {
  render() {
    const {similarEachJobData} = this.props
    console.log(similarEachJobData)
    const changedSimilarJobDataCase = {
      companyLogoUrl: similarEachJobData.company_logo_url,
      employmentType: similarEachJobData.employment_type,
      id: similarEachJobData.is,
      jobDescription: similarEachJobData.job_description,
      location: similarEachJobData.location,
      rating: similarEachJobData.rating,
      title: similarEachJobData.title,
    }
    const {
      companyLogoUrl,
      employmentType,

      jobDescription,
      location,
      rating,
      title,
    } = changedSimilarJobDataCase
    return (
      <li className="outerJobCardDiv3">
        <div className="logoTitleRatingDiv3">
          <img
            src={companyLogoUrl}
            alt="similar job company logo"
            className="companyLogoJobCard3"
          />
          <div>
            <h1 className="jobCardTitle3">{title}</h1>
            <div className="ratingDiv3">
              <AiFillStar className="starIcon3" />
              <p className="ratingEl3">{rating}</p>
            </div>
          </div>
        </div>
        <div className="locationPackageDiv3">
          <div className="locationJobTypeDiv3">
            <IoLocationSharp className="locationIcon3" />
            <p className="locationPara3">{location}</p>
            <BsFillBriefcaseFill className="briefCaseIcon3" />
            <p className="employmentTypePara3">{employmentType}</p>
          </div>
          <h1 className="descriptionHeading3">Description</h1>
          <p className="jobDescriptionPara3">{jobDescription}</p>
        </div>
      </li>
    )
  }
}
export default SimilarJobs
