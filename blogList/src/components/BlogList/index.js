// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import './index.css'
import BlogItem from '../BlogItem/index'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul className="blogListEl">
        {blogsList.map(each => (
          <BlogItem key={each.id} blog={each} />
        ))}
      </ul>
    )
  }
}
export default BlogList
