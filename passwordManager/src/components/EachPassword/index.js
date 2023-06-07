import {Component} from 'react'
import './index.css'
// import {each} from 'immer/dist/internal'

class EachPassword extends Component {
  deleteClick = () => {
    const {eachList, passId} = this.props
    const {id} = eachList
    passId(id)
  }

  render() {
    const {eachList, showPassword} = this.props
    console.log(eachList)

    const {website, username, password, bgColor} = eachList
    const showPass = showPassword ? (
      <p className="passwordPara">{password}</p>
    ) : (
      <img
        className="starsImage"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    )

    return (
      <li className="liElement">
        <div className={`proPic ${bgColor}`}>{username[0].toUpperCase()}</div>
        <div className="passDataDiv">
          <p className="websitePara">{website}</p>
          <p className="userName">{username}</p>
          {showPass}
        </div>
        <button
          data-testid="delete"
          onClick={this.deleteClick}
          type="button"
          className="deleteBtn"
        >
          <img
            className="deleteIcon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default EachPassword
