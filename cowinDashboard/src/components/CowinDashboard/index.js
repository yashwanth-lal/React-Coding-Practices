// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByCoverage from '../VaccinationCoverage/index'

import VaccinationByAge from '../VaccinationByAge/index'
import VaccinationByGender from '../VaccinationByGender/index'

import './index.css'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class CowinDashboard extends Component {
  state = {allData: [], loader: status.pending}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const options = {method: 'GET'}
      const vaccinationDataApiUrl =
        'https://apis.ccbp.in/covid-vaccination-data'
      const fetchingProcess = await fetch(vaccinationDataApiUrl, options)

      console.log(fetchingProcess)
      if (fetchingProcess.ok === true) {
        const response = await fetchingProcess.json()
        console.log(response)
        const responseData = {
          last7DaysVaccination: response.last_7_days_vaccination,
          vaccinationByAge: response.vaccination_by_age,
          vaccinationByGender: response.vaccination_by_gender,
        }
        //   console.log(responseData)
        this.setState({loader: status.success, allData: responseData})
      }
    } catch (e) {
      console.log(e.message)
      this.setState({loader: status.failure})
    }
  }

  onFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failurePara">Something went wrong</h1>
    </>
  )

  onSuccess = (last7DaysVaccination, vaccinationByAge, vaccinationByGender) => (
    <>
      <VaccinationByCoverage last7DaysVaccination={last7DaysVaccination} />
      <VaccinationByGender vaccinationByGender={vaccinationByGender} />
      <VaccinationByAge vaccinationByAge={vaccinationByAge} />
    </>
  )

  render() {
    const {allData, loader} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = allData
    return (
      <div className="outerMain">
        <div className="logoDiv">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="logoHeading">Co-WIN</h1>
        </div>
        <h1 className="mainHeading">CoWIN Vaccination in India</h1>
        {(() => {
          switch (loader) {
            case status.pending:
              return (
                <div data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#ffffff"
                    height={80}
                    width={80}
                  />
                </div>
              )

            case status.success:
              return this.onSuccess(
                last7DaysVaccination,
                vaccinationByAge,
                vaccinationByGender,
              )

            case status.failure:
              return this.onFailure()

            default:
              break
          }
          return null
        })()}
      </div>
    )
  }
}

export default CowinDashboard
