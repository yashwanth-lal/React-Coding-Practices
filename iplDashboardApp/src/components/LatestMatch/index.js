// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class TeamMatches extends Component {
  render() {
    const {MatchDetails} = this.props
    // console.log('MatchDetails')
    // console.log(MatchDetails)

    const theMatchDetails = {
      competingTeam: MatchDetails.competing_team,

      competingTeamLogo: MatchDetails.competing_team_logo,

      date: MatchDetails.date,

      firstInnings: MatchDetails.first_innings,

      id: MatchDetails.id,

      manOfTheMatch: MatchDetails.man_of_the_match,

      matchStatus: MatchDetails.match_status,

      result: MatchDetails.result,

      secondInnings: MatchDetails.second_innings,

      umpires: MatchDetails.umpires,

      venue: MatchDetails.venue,
    }
    const {
      competingTeam,

      competingTeamLogo,

      date,

      firstInnings,

      id,

      manOfTheMatch,

      matchStatus,

      result,

      secondInnings,

      umpires,

      venue,
    } = theMatchDetails

    return (
      <div className="latestMatchPartOuter">
        <div className="leftPart">
          <p className="competingTeam">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue} </p>
          <p>{result}</p>
        </div>
        <img
          className="latestMatchLogo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />

        <div className="rightPart">
          <p className="q">First Innings</p>
          <p className="a">{firstInnings} </p>
          <p className="q">Second Innings</p>
          <p className="a">{secondInnings}</p>
          <p className="q">Man Of The Match </p>
          <p className="a">{manOfTheMatch}</p>
          <p className="q">Umpires</p>
          <p className="a">{umpires}</p>
        </div>
      </div>
    )
  }
}
export default TeamMatches
