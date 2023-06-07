// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const status = {
  success: 'SUCCESS',
  pending: 'PENDING',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    repositoryList: [],
    currentTab: languageFiltersData[0].id,
    activeStatus: status.pending,
  }

  componentDidMount = () => {
    this.fetchingTheApi()
  }

  onFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
    </div>
  )

  fetchRepos = async () => {
    const {currentTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${currentTab}`
    console.log(url)
    // const options = {
    //   method: 'GET',
    // }
    const fetchProcess2 = await fetch(url)

    if (fetchProcess2.ok) {
      const response2 = await fetchProcess2.json()
      const updatedData2 = response2.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      console.log('updatedData2')

      console.log(updatedData2)
      this.setState({
        repositoryList: updatedData2,
        activeStatus: status.success,
      })
    }
  }

  fetchingTheApi = async () => {
    const url = `https://apis.ccbp.in/popular-repos?language=${languageFiltersData[0].id}`
    console.log(url)

    // const options = {
    //   method: 'GET',
    // }
    const fetchProcess = await fetch(url)

    console.log(fetchProcess)

    if (fetchProcess.ok) {
      const response = await fetchProcess.json()

      const updatedData = response.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      console.log(updatedData)
      this.setState({repositoryList: updatedData, activeStatus: status.success})
    } else {
      this.onFailure()
    }
  }

  changeTabs = id => {
    console.log(id)
    this.setState(
      {currentTab: id, activeStatus: status.pending},
      this.fetchRepos,
    )
  }

  loaderEl = () => (
    <div className="load" data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  mainContent = (repositoryList, currentTab) => (
    // <div className="outer">
    //   <h1 className="popularHeading">Popular</h1>
    //   <ul className="ulEl">
    //     {languageFiltersData.map(each => (
    //       <LanguageFilterItem
    //         changeTabs={this.changeTabs}
    //         key={each.id}
    //         eachItem={each}
    //         currentTab={currentTab}
    //       />
    //     ))}
    //   </ul>
    <ul className="ulEl2">
      {repositoryList.map(eachItem => (
        <RepositoryItem key={eachItem.id} eachData={eachItem} />
      ))}
    </ul>
    // </div>
  )

  checkStatus = (repositoryList, currentTab) => {
    const {activeStatus} = this.state
    console.log(activeStatus)

    switch (activeStatus) {
      case status.pending:
        return this.loaderEl()
      case status.success:
        return this.mainContent(repositoryList, currentTab)
      case status.failure:
        return this.onFailure()
      default:
        return null
    }
  }

  render() {
    const {repositoryList, currentTab} = this.state
    // return loader
    //   ? this.loaderEl()
    //   : this.mainContent(repositoryList, currentTab)
    return (
      <div className="outer">
        <h1 className="popularHeading">Popular</h1>
        <ul className="ulEl">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              changeTabs={this.changeTabs}
              key={each.id}
              eachItem={each}
              currentTab={currentTab}
            />
          ))}
        </ul>
        {this.checkStatus(repositoryList, currentTab)}
      </div>
    )
  }
}
export default GithubPopularRepos
