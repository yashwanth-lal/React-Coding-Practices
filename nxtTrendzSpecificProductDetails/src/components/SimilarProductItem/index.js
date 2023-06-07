// Write your code here
import {Component} from 'react'
import './index.css'

class SimilarProductItem extends Component {
  render() {
    console.log('entered')
    const {singleProductData} = this.props
    console.log(singleProductData)
    const changedCase = {
      availability: singleProductData.availability,
      brand: singleProductData.brand,

      description: singleProductData.description,

      dataId: singleProductData.id,

      imageUrl: singleProductData.image_url,
      price: singleProductData.price,

      rating: singleProductData.rating,

      similarProducts: singleProductData.similar_products,

      title: singleProductData.title,

      totalReviews: singleProductData.total_reviews,
    }

    const {
      availability,
      id,
      brand,
      description,
      imageUrl,
      price,
      rating,
      similarProducts,
      title,
      totalReviews,
    } = changedCase

    return (
      <li className="product-item2">
        <img src={imageUrl} alt="similar product" className="thumbnail2" />
        <h1 className="title2">{title}</h1>
        <p className="brand2">by {brand}</p>
        <div className="product-details2">
          <p className="price2">Rs {price}/-</p>
          <div className="rating-container2">
            <p className="rating2">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star2"
            />
          </div>
        </div>
      </li>
    )
  }
}

export default SimilarProductItem
