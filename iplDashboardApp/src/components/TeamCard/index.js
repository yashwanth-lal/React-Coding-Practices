// Write your code here
// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachCardElement} = this.props
    return (
      <Link to={`/team-matches/${eachCardElement.id}`}>
        <li className="outerTeamCardDiv">
          <img
            className="teamLogo"
            src={eachCardElement.teamImageUrl}
            alt={eachCardElement.name}
          />
          <p className="teamPara">{eachCardElement.name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
