import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
// import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentList = []
// const pastDate = new Date()
// const a = {...initialCommentList, comment: 'lol'}
// console.log(a)
// console.log(initialCommentList)

class Comments extends Component {
  state = {commentsList: initialCommentList, name: '', comment: ''}

  nameInputChange = e => {
    this.setState({name: e.target.value})
  }

  commentInputChange = e => {
    this.setState({comment: e.target.value})
  }

  onSubmit = () => {
    // this.setState({commentsList})
    const {name, comment} = this.state
    const time = new Date()

    const randomNumber = Math.floor(
      Math.random(7) * initialContainerBackgroundClassNames.length,
    )
    const randomClass = initialContainerBackgroundClassNames[randomNumber]
    const newContact = {
      id: uuidV4(),
      name,
      comment,
      colorClass: randomClass,
      commentedTime: time,
      isLike: false,
    }

    // console.log(`${formatDistanceToNow(pastDate, new Date())} ago`)

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newContact],
      name: '',
      comment: '',
    }))
  }

  clickALike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => {
        if (id !== each.id) {
          return each
        }
        return null
      }),
    }))
  }

  render() {
    const {commentsList} = this.state
    const {name, comment} = this.state

    // console.log(commentsList)

    return (
      <div className="outer">
        <div className="inner">
          <h1 className="commentHeading">Comments</h1>
          <div className="direction">
            <div className="inputPart">
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                value={name}
                onChange={this.nameInputChange}
                type="text"
                className="nameInput"
                placeholder="Your Name"
              />
              <textarea
                value={comment}
                onChange={this.commentInputChange}
                className="commentInput"
                cols="50"
                rows="10"
                placeholder="Your Comment"
              />
              <button onClick={this.onSubmit} className="btn" type="button">
                Add Comment
              </button>
            </div>
            <div className="imageDiv">
              <img
                className="image"
                alt="comments"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              />
            </div>
          </div>

          <hr className="horizontalLine" />
          <div className="countContainer">
            <p className="commentCount">{commentsList.length}</p>
            <p className="commentsDownHeading">Comments</p>
          </div>
          <ul className="ulEl">
            {commentsList.map(each => (
              <CommentItem
                key={each.id}
                commentsList={each}
                clickALike={this.clickALike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// Write your code here
export default Comments
