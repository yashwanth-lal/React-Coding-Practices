// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {title, description, publishedDate} = blog

    return (
      <li className="blogItemDiv">
        <div className="flexItems">
          <h1 className="title">{title}</h1>
          <p>{publishedDate}</p>
        </div>
        <p>{description}</p>
        <hr />
      </li>
    )
  }
}
export default BlogItem
