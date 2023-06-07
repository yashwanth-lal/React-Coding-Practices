// Write your code here
import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'

import SimilarProductItem from '../SimilarProductItem'

import './index.css'

const status = {success: 'SUCCESS', failure: 'FAILURE', loading: 'LOADING'}
class ProductItemDetails extends Component {
  state = {prodDetails: [], isLoading: status.loading, count: 1}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const fetchingProcess = await fetch(url, options)

    if (fetchingProcess.ok === true) {
      const each = await fetchingProcess.json()
      console.log(each)

      const newData = {
        availability: each.availability,
        brand: each.brand,

        description: each.description,

        dataId: each.id,

        imageUrl: each.image_url,
        price: each.price,

        rating: each.rating,

        similarProducts: each.similar_products,

        title: each.title,

        totalReviews: each.total_reviews,
      }

      this.setState({prodDetails: newData, isLoading: status.success})
    } else {
      this.setState({isLoading: status.failure})
    }
  }

  minusClick = () => {
    const {count} = this.state
    if (count !== 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  plusClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onFailure = () => (
    <div className="failDiv">
      <img
        className="failImg"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
      />
      <h1 className="notFoundTxt">Product Not Found</h1>

      <button
        onClick={this.continueBtnClick}
        type="button"
        className="continueBtn"
      >
        Continue Shopping
      </button>
    </div>
  )

  continueBtnClick = () => {
    const {history} = this.props
    history.replace('/products')
  }

  render() {
    const {prodDetails, isLoading, count} = this.state
    const {
      availability,

      brand,
      description,
      imageUrl,
      price,
      rating,
      similarProducts,
      title,
      totalReviews,
    } = prodDetails

    return (
      <>
        <Header />

        {(() => {
          switch (isLoading) {
            case status.loading:
              return (
                <div data-testid="loader" className="products-loader-container">
                  <Loader
                    type="ThreeDots"
                    color="#0b69ff"
                    height="50"
                    width="50"
                  />
                </div>
              )
            case status.success:
              return (
                <>
                  <div className="outer">
                    <img className="detailImg" src={imageUrl} alt="product" />
                    <div className="rightPart">
                      <h1 className="detailTitle">{title}</h1>
                      <p className="detailPrice">Rs {price}/-</p>
                      <div className="ratingPart">
                        <div className="ratingDiv">
                          <p className="detailRating">{rating}</p>
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                            alt="star"
                            className="detailStar"
                          />
                        </div>
                        <p className="detailReviews">{totalReviews} Reviews</p>
                      </div>
                      <p className="detailDesc">{description}</p>
                      <div className="divv">
                        <p className="detailAvailable">Available: </p>
                        <p className="spanEl">{availability}</p>
                      </div>

                      <div className="divv">
                        <p className="detailBrand">brand: </p>
                        <p className="spanEl">{brand}</p>
                      </div>
                      <hr className="horzLine" />
                      <div className="addRemoveDiv">
                        <button type="button" data-testid="minus">
                          <BsDashSquare
                            onClick={this.minusClick}
                            className="minusButton"
                          />
                        </button>

                        <p>{count}</p>
                        <button type="button" data-testid="plus">
                          <BsPlusSquare
                            onClick={this.plusClick}
                            className="plusButton"
                          />
                        </button>
                      </div>
                      <button type="button" className="addtocardBtn">
                        ADD TO CART
                      </button>
                    </div>
                  </div>

                  <h1 className="simiProds">Similar Products</h1>
                  <ul className="ul2">
                    {similarProducts.map(each => (
                      <SimilarProductItem
                        singleProductData={each}
                        key={each.id}
                      />
                    ))}
                  </ul>
                </>
              )

            case status.failure:
              return this.onFailure()

            default:
              return null
          }
        })()}
      </>
    )
  }
}
export default ProductItemDetails
