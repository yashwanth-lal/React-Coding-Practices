// Write your code here
import {Component} from 'react'
import './index.css'

class RepositoryItem extends Component {
  render() {
    const {eachData} = this.props
    const {avatarUrl, forksCount, issuesCount, name, starsCount} = eachData
    // console.log(eachItem)
    return (
      <li className="liRepItem">
        <img className="iamgeEle" src={avatarUrl} alt={name} />
        <div className="downn">
          <h1 className="nameRI">{name}</h1>
          <div className="starsRi">
            <img
              className="starsImage"
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
            />
            <p className="starsPara">{starsCount}</p>
          </div>
          <div className="starsRi">
            <img
              className="starsImage"
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
            />
            <p className="starsPara">{forksCount}</p>
          </div>
          <div className="starsRi">
            <img
              className="starsImage"
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
            />
            <p className="starsPara">{issuesCount}</p>
          </div>
        </div>
      </li>
    )
  }
}
export default RepositoryItem
