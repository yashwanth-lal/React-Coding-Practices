import {Component} from 'react'
import './index.css'

class EachThumb extends Component {
  thumbnailClick = () => {
    const {thumbnail, compareAndScore} = this.props
    const {id} = thumbnail
    // console.log(thumbnailUrl)
    compareAndScore(id)
  }

  render() {
    const {thumbnail} = this.props
    // console.log(thumbnail)
    const {thumbnailUrl} = thumbnail
    return (
      <li>
        <button type="button" className="btn" onClick={this.thumbnailClick}>
          <img
            className="thumbnailImageEl"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    )
  }
}

export default EachThumb
