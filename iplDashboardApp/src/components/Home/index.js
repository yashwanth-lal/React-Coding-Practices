// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamCards: '', loading: true}

  componentDidMount = async () => {
    const fetchingProcess = await fetch('https://apis.ccbp.in/ipl')
    const objFormat = await fetchingProcess.json()
    console.log(objFormat)
    const allTeamCards = objFormat.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    // console.log(allTeamCards)
    this.setState({teamCards: allTeamCards, loading: false})
  }

  render() {
    const {teamCards, loading} = this.state
    console.log(teamCards)
    return (
      <div className="outerDiv">
        <div className="headingPart">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="logoPara">IPL Dashboard</h1>
        </div>
        {loading ? (
          <div className="loader" data-testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul className="ulEl1">
            {teamCards.map(eachCard => (
              <TeamCard key={eachCard.id} eachCardElement={eachCard} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
