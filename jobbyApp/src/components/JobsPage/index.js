import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import Header from '../Header/index'
import ProfileCard from '../ProfileCard/index'
import FiltersPart from '../FiltersPart/index'
import JobCard from '../JobCard/index'

import './index.css'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class JobsPage extends Component {
  state = {
    activeStatus: status.loading,
    jobsList: [],
    employmentTypeState: '',
    minimumPackageState: '',
    searchInputValue: '',
    noJobs: false,
  }

  componentDidMount = () => {
    this.fetchJobs()
  }

  fetchJobs = async () => {
    const {
      employmentTypeState,
      minimumPackageState,
      searchInputValue,
    } = this.state
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentTypeState}&minimum_package=${minimumPackageState}&search=${searchInputValue}`
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const fetchingProcess = await fetch(url, options)
    console.log(fetchingProcess)
    if (fetchingProcess.ok === true) {
      const response = await fetchingProcess.json()
      console.log('response')
      console.log(response)

      this.setState({
        activeStatus: status.success,
        jobsList: response.jobs,
        noJobs: false,
      })
    } else {
      this.setState({activeStatus: status.failure})
    }
  }

  onLoading = () => (
    <div className="loader-container loadJobs" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onSuccess = () => {
    const {jobsList} = this.state
    const newJobsList = jobsList.map(each => ({
      id: each.id,
      companyLogoUrl: each.company_logo_url,
      employmentType: each.employment_type,
      jobDescription: each.job_description,
      location: each.location,
      packagePerAnnum: each.package_per_annum,
      rating: each.rating,
      title: each.title,
    }))
    console.log('jobsList')
    if (jobsList.length === 0) {
      this.setState({noJobs: true})
    }
    return (
      <div className="jobsPageFullDiv">
        {newJobsList.map(each => (
          <JobCard key={each.id} eachJob={each} />
        ))}
      </div>
    )
  }

  emptyJobs = () => (
    <div className="noJobsDiv">
      <img
        className="noJobsImage"
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
      />
      <h1 className="noJobsHeading">no Jobs Found</h1>
      <p className="noJobsPara">
        We could not find any jobs. Try other filters
      </p>
    </div>
  )

  retryJobsPage = () => {
    this.setState({activeStatus: status.loading}, this.fetchJobs)
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
        onClick={this.retryJobsPage}
        type="button"
        className="profileRetryBtn2"
      >
        Retry
      </button>
    </div>
  )

  inputChange = e => {
    this.setState({searchInputValue: e.target.value})
  }

  searchClick = () => {
    // const {jobsList, searchInputValue} = this.state
    this.setState({activeStatus: status.loading}, this.fetchJobs)

    // this.fetchJobs()
  }

  setFilter = filterFinalValue => {
    console.log('setFilter done')
    this.setState(
      {employmentTypeState: filterFinalValue, activeStatus: status.loading},
      this.fetchJobs,
    )
  }

  setPackage = thePackage => {
    // console.log('setFilter done')
    this.setState(
      {minimumPackageState: thePackage, activeStatus: status.loading},
      this.fetchJobs,
    )
  }

  render() {
    console.log('this.props')
    const {activeStatus, searchInputValue, noJobs} = this.state
    // console.log(this.props)
    const {employmentTypesList, salaryRangesList} = this.props
    // console.log(employmentTypesLists)
    return (
      <div>
        <Header />
        <div className="twoSections">
          <div className="leftPartJobsPage">
            <ProfileCard />
            <FiltersPart
              setPackage={this.setPackage}
              setFilter={this.setFilter}
              employmentTypesList={employmentTypesList}
              salaryRangesList={salaryRangesList}
            />
          </div>

          <div className="rightPartJobsPage">
            <div className="searchDiv">
              <input
                onChange={this.inputChange}
                value={searchInputValue}
                type="search"
                placeholder="Search"
                className="searchInputEl"
              />
              <button
                onClick={this.searchClick}
                className="searchBtn"
                type="button"
                data-testid="searchButton"
              >
                <BsSearch className="search-icon" />
              </button>
            </div>

            {(() => {
              switch (activeStatus) {
                case status.loading:
                  return this.onLoading()
                case status.success:
                  if (!noJobs) {
                    return this.onSuccess()
                  }
                  return this.emptyJobs()
                case status.failure:
                  return this.onFailure()
                default:
                  return null
              }
            })()}
          </div>
        </div>
      </div>
    )
  }
}
export default JobsPage
