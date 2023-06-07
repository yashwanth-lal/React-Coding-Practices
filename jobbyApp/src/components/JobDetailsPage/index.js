import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import SimilarJobs from '../SimilarJobs/index'

import Header from '../Header/index'

import './index.css'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class JobDetailsPage extends Component {
  state = {
    jobDetailsPageStatus: status.loading,
    jobDetailedData: [],
    similarJobData: [],
  }

  componentDidMount = () => {
    this.fetchJobDetailsUsingId()
  }

  fetchJobDetailsUsingId = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookie.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const fetchingProcess = await fetch(url, options)
    // console.log(fetchingProcess)
    if (fetchingProcess.ok === true) {
      const response = await fetchingProcess.json()
      //   console.log(response)
      //   console.log(url)
      const theJobDetailedList = response.job_details
      const theSimilarJobsList = response.similar_jobs

      this.setState({
        jobDetailsPageStatus: status.success,
        jobDetailedData: theJobDetailedList,
        similarJobData: theSimilarJobsList,
      })
    } else {
      this.setState({jobDetailsPageStatus: status.failure})
    }
  }

  onLoading = () => (
    <div className="loader-container loadJobDetails" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onSuccess = () => {
    const {jobDetailedData, similarJobData} = this.state
    // console.log('similarJobData')
    // console.log(similarJobData)

    const changedjobDetailedDataCase = {
      companyLogoUrl: jobDetailedData.company_logo_url,
      companyWebsiteUrl: jobDetailedData.company_website_url,
      employmentType: jobDetailedData.employment_type,
      id: jobDetailedData.id,
      jobDescription: jobDetailedData.job_description,
      skills: jobDetailedData.skills,
      lifeAtCompany: jobDetailedData.life_at_company,
      location: jobDetailedData.location,
      packagePerAnnum: jobDetailedData.package_per_annum,
      rating: jobDetailedData.rating,
      title: jobDetailedData.title,
    }
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      id,
      jobDescription,
      skills,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      title,
    } = changedjobDetailedDataCase
    return (
      <>
        <div className="jobsDetailsInner">
          <div className="logoTitleRatingDiv2">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="companyLogoJobCard2"
            />
            <div>
              <h1 className="jobCardTitle2">{title}</h1>
              <div className="ratingDiv2">
                <AiFillStar className="starIcon2" />
                <p className="ratingEl2">{rating}</p>
              </div>
            </div>
          </div>
          <div className="locationPackageDiv2">
            <div className="locationJobTypeDiv2">
              <IoLocationSharp className="locationIcon2" />
              <p className="locationPara2">{location}</p>
              <BsFillBriefcaseFill className="briefCaseIcon2" />
              <p className="employmentTypePara2">{employmentType}</p>
            </div>
            <p className="packagePara2">{packagePerAnnum}</p>
          </div>
          <div className="descVisitDiv">
            <h1 className="descriptionHeading2">Description</h1>
            <div className="externalLinkDiv">
              <a
                className="visitPara"
                href={companyWebsiteUrl}
                rel="noreferrer"
                target="_blank"
              >
                Visit
                <BiLinkExternal className="linkIcon" />
              </a>
            </div>
          </div>
          <p className="jobDescriptionPara2">{jobDescription}</p>
          <div className="skillsDiv">
            <h1 className="skillsPara">Skills</h1>
            <ul className="skillsUl">
              {skills.map(eachSkill => (
                <li key={eachSkill.name} className="skillList">
                  <img
                    className="skillImg"
                    src={eachSkill.image_url}
                    alt={eachSkill.name}
                  />
                  <p className="skillName">{eachSkill.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lifeAtWorkDiv">
            <h1 className="lifeAtWorkPara">Life at Company</h1>
            <div className="locDescImageDiv">
              <p className="lifeAtWorkDescription">
                {lifeAtCompany.description}
              </p>
              <img
                className="locImage"
                src={lifeAtCompany.image_url}
                alt="life at company"
              />
            </div>
          </div>
        </div>
        <div className="similarJobsOuterDiv">
          <h1 className="similarJobsPara">Similar Jobs</h1>
          <ul className="similarJobsUl">
            {similarJobData.map(eachSimilarJob => (
              <SimilarJobs
                key={eachSimilarJob.id}
                similarEachJobData={eachSimilarJob}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  onFailure = () => (
    <div className="jobsPageFailDiv">
      <img
        className="jobFailImg"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button
        onClick={this.retryJobDetailsPage}
        type="button"
        className="profileRetryBtn2"
      >
        Retry
      </button>
    </div>
  )

  retryJobDetailsPage = () => {
    this.setState(
      {jobDetailsPageStatus: status.loading},
      this.fetchJobDetailsUsingId,
    )
  }

  render() {
    const {jobDetailsPageStatus} = this.state
    return (
      <div>
        <Header />
        <div className="jobsDetailsOuter">
          {(() => {
            switch (jobDetailsPageStatus) {
              case status.loading:
                return this.onLoading()
              case status.success:
                return this.onSuccess()
              case status.failure:
                return this.onFailure()
              default:
                return null
            }
          })()}
        </div>
      </div>
    )
  }
}
export default JobDetailsPage
