// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesDetails: '', loading2: true}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const fetchingProcess2 = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    console.log(fetchingProcess2)
    const objFormat2 = await fetchingProcess2.json()
    console.log(objFormat2)
    const allTeamCards2 = {
      teamBannerUrl: objFormat2.team_banner_url,
      latestMatchDetails: objFormat2.latest_match_details,
      recentMatches: objFormat2.recent_matches,
    }

    console.log(allTeamCards2)
    this.setState({teamMatchesDetails: allTeamCards2, loading2: false})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamMatchesDetails, loading2} = this.state
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails
    // const {id} = recentMatches
    console.log(latestMatchDetails)
    return loading2 ? (
      <div className="loader2" data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`detailsOuter${id}`}>
        <img className="bannerEl" src={teamBannerUrl} alt="team banner" />
        <p className="latestMatchesPara">Latest Matches</p>
        <LatestMatch MatchDetails={latestMatchDetails} />
        <ul className="ulDiv">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} eachRecentMatches={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
