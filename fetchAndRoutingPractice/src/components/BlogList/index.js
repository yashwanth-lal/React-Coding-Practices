// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'

import BlogItem from '../BlogItem/index'
import './index.css'

class BlogList extends Component {
  state = {theBlogsList: [], loading: true}

  componentDidMount = () => {
    this.fetchTheDetails()
  }

  fetchTheDetails = async () => {
    const fetchedData = await fetch('https://apis.ccbp.in/blogs')
    const blogsList = await fetchedData.json()
    console.log(blogsList)
    const changedBlogList = blogsList.map(eachBlog => ({
      author: eachBlog.author,
      avatarUrl: eachBlog.avatar_url,
      id: eachBlog.id,
      imageUrl: eachBlog.image_url,
      title: eachBlog.title,
      topic: eachBlog.topic,
    }))
    console.log(changedBlogList)
    this.setState({theBlogsList: changedBlogList, loading: false})
  }

  render() {
    const {theBlogsList, loading} = this.state
    return loading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="BlogListOuterDiv">
        {theBlogsList.map(each => (
          <BlogItem key={each.id} blog={each} />
        ))}
      </ul>
    )
  }
}
export default BlogList
