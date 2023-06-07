import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import './index.css'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class ProfileCard extends Component {
  state = {profileCardStatus: status.loading, data: []}

  componentDidMount = () => {
    this.fetchProfileCardDetails()
  }

  fetchProfileCardDetails = async () => {
    const jwtToken = Cookie.get('jwt_token')
    // console.log(jwtToken)
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const fetchingProcess = await fetch(url, options)
    // console.log(fetchingProcess)
    if (fetchingProcess.ok === true) {
      const responseData = await fetchingProcess.json()
      //   console.log(responseData)
      const profileDetails = responseData.profile_details
      const profileData = {
        name: profileDetails.name,
        profileImageUrl: profileDetails.profile_image_url,
        shortBio: profileDetails.short_bio,
      }
      //   console.log(profileData)
      this.setState({profileCardStatus: status.success, data: profileData})
    } else {
      this.setState({profileCardStatus: status.failure})
    }
  }

  onLoading = () => (
    <div className="loader-container loadJobs2" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onSuccess = () => {
    const {data} = this.state
    const {name, profileImageUrl, shortBio} = data
    return (
      <ul className="profileCardOuter">
        <li>
          <img src={profileImageUrl} alt="profile" className="profileImage" />
        </li>
        <li>
          <h1 className="profileName">{name}</h1>
        </li>

        <li>
          <p className="profileBio">{shortBio}</p>
        </li>
      </ul>
    )
  }

  retryProfilePage = () => {
    this.setState(
      {profileCardStatus: status.loading},
      this.fetchProfileCardDetails,
    )
  }

  onFailure = () => (
    <div className="profileRetryBtnOuter">
      <button
        onClick={this.retryProfilePage}
        type="button"
        className="profileRetryBtn"
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {profileCardStatus} = this.state
    switch (profileCardStatus) {
      case status.loading:
        return this.onLoading()
      case status.success:
        return this.onSuccess()
      case status.failure:
        return this.onFailure()
      default:
        return null
    }
  }
}
export default ProfileCard
