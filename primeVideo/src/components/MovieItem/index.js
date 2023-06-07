// Write your code here
// Write your code here
// Write your code here
import {Component} from 'react'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

class MovieItem extends Component {
  render() {
    const {moviesList} = this.props
    console.log(moviesList)
    const {thumbnailUrl, categoryId, videoUrl} = moviesList

    return (
      <div className="popup-container">
        <Popup modal trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
          {close => (
            <div className="modals">
              <button className="icondiv" type="button">
                <IoMdClose
                  style={{fill: 'black'}}
                  data-testid="closeButton"
                  onClick={close}
                />
              </button>
              <ReactPlayer width="auto" height="50vh" url={videoUrl} controls />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default MovieItem
