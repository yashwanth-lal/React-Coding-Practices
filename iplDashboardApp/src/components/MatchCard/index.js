// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {eachRecentMatches} = this.props
    console.log(eachRecentMatches)
    const theMatchCardDetails = {
      competingTeam: eachRecentMatches.competing_team,

      competingTeamLogo: eachRecentMatches.competing_team_logo,

      date: eachRecentMatches.date,

      firstInnings: eachRecentMatches.first_innings,

      id: eachRecentMatches.id,

      manOfTheMatch: eachRecentMatches.man_of_the_match,

      matchStatus: eachRecentMatches.match_status,

      result: eachRecentMatches.result,

      secondInnings: eachRecentMatches.second_innings,

      umpires: eachRecentMatches.umpires,

      venue: eachRecentMatches.venue,
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
    } = theMatchCardDetails

    const cardStatColor = matchStatus === 'Won' ? 'cardStatWin' : 'cardStatLoss'
    return (
      <li className="listC">
        <img
          className="cardImage"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="cardHead">{competingTeam}</p>
        <p className="cardResult">{result}</p>
        <p className={cardStatColor}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
