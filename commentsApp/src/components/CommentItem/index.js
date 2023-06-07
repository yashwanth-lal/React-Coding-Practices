// Write your code here
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import './index.css'
// import {clearLine} from 'readline'

class CommentItem extends Component {
  likeFunc = () => {
    const {commentsList, clickALike} = this.props
    const {id} = commentsList
    clickALike(id)
  }

  deleteFunc = () => {
    const {commentsList, deleteComment} = this.props
    const {id} = commentsList
    deleteComment(id)
  }

  render() {
    const {commentsList} = this.props
    const {name, comment, colorClass, isLike, commentedTime} = commentsList
    console.log(this.props)
    // console.log(`${formatDistanceToNow(pastDate, new Date())} ago`)
    const CommentTime = `${formatDistanceToNow(commentedTime, new Date())} ago`
    const likeColor = isLike ? 'blueColor' : ''

    const likeEl = isLike
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    return (
      <li>
        <div className="innerDiv">
          <div className={`${colorClass} circle`}>{name[0].toUpperCase()}</div>
          <div className="textDiv">
            <div className="textDiv1">
              <p className="nameEL">{name}</p>
              <p className="time">{CommentTime}</p>
            </div>
            <p className="commentEl">{comment}</p>
          </div>
        </div>
        <div className="interactionDiv">
          <img className="likeButton" src={likeEl} alt="like" />
          <button
            type="button"
            onClick={this.likeFunc}
            className={`${likeColor} likePara `}
          >
            Like
          </button>
          <div data-testid="delete" onClick={this.deleteFunc}>
            <img
              className="deleteIcon"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </div>
        </div>
      </li>
    )
    // const time = '2023-03-25'
  }
}

// Write your code here
export default CommentItem
