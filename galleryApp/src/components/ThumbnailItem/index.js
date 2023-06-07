// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  clickFunc = () => {
    const {displayImage, thumbnailDetails} = this.props
    const {imageUrl, imageAltText} = thumbnailDetails
    displayImage(imageUrl, imageAltText)
  }

  render() {
    const {thumbnailDetails} = this.props
    const {thumbnailAltText, thumbnailUrl} = thumbnailDetails
    const {isSelect} = this.props
    return (
      <li>
        <button type="button" className="btn">
          <img
            className={`imgMargin ${!isSelect ? 'thumbImg' : ''}`}
            alt={thumbnailAltText}
            src={thumbnailUrl}
            onClick={this.clickFunc}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
