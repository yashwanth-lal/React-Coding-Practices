// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
// import {Link} from 'react-router-dom'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogInnerDetails: {}, blogLoading: true}

  componentDidMount = () => {
    this.fetchTheDetailsOfParticularBlog()
  }

  fetchTheDetailsOfParticularBlog = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const fetchedDetails = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const dataInObjectFormat = await fetchedDetails.json()
    console.log(dataInObjectFormat)

    const blogDetails = {
      author: dataInObjectFormat.author,
      avatarUrl: dataInObjectFormat.avatar_url,
      content: dataInObjectFormat.content,
      id: dataInObjectFormat.id,
      imageUrl: dataInObjectFormat.image_url,
      title: dataInObjectFormat.title,
      topic: dataInObjectFormat.topic,
    }
    console.log(blogDetails)

    this.setState({blogInnerDetails: blogDetails, blogLoading: false})
  }

  render() {
    const {blogInnerDetails, blogLoading} = this.state
    const {author, avatarUrl, content, title, imageUrl} = blogInnerDetails
    return blogLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="singleBlogDiv">
        <h1>{title}</h1>
        <div className="authorDetails">
          <img className="proPic" src={avatarUrl} alt={title} />
          <p>{author}</p>
        </div>
        <img className="imageEl" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
