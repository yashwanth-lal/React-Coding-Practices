// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {author, avatarUrl, id, imageUrl, title, topic} = blog
    return (
      <Link to={`/blogs/${id}`}>
        <li className="listDiv">
          <img className="image" src={imageUrl} alt={title} />
          <div className="innerDetails">
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="proPicPart">
              <img className="avatar" src={avatarUrl} alt={title} />
              <p>{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default BlogItem
