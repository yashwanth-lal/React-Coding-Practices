import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].optionId,
    searchValueState: '',
    categoryState: 0,
    ratingState: 0,
    failureState: false,
  }

  componentDidMount() {
    this.filterCallback()
  }

  failureImage = () => (
    <div className="failureDiv">
      <img
        className="failureImage"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble processing your request.
        <br /> please try again.
      </p>
    </div>
  )

  categoryChange = catId => {
    // console.log(JSON.stringify(catId))
    this.setState({categoryState: catId}, this.filterCallback)
  }

  ratingChange = ratId => {
    console.log(JSON.stringify(ratId))
    this.setState({ratingState: ratId}, this.filterCallback)
  }

  resetFilters = () => {
    console.log('reste')
    this.setState(
      {
        activeOptionId: sortbyOptions[0].optionId,
        searchValueState: '',
        categoryState: 0,
        ratingState: 0,
      },
      this.filterCallback,
    )
  }

  filterCallback = async () => {
    this.setState({isLoading: true})
    const {
      activeOptionId,
      searchValueState,
      categoryState,
      ratingState,
    } = this.state
    const token = Cookies.get('jwt_token')
    console.log(token)
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    }
    const url = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${categoryState}&title_search=${searchValueState}&rating=${ratingState}`

    console.log(url)

    const fetchingProcess = await fetch(url, options)
    console.log(fetchingProcess)
    if (fetchingProcess.ok === true) {
      console.log('success')
      const response = await fetchingProcess.json()
      console.log(response)
      const responseData = response.products.map(each => ({
        title: each.title,
        brand: each.brand,
        price: each.price,
        id: each.id,
        imageUrl: each.image_url,
        rating: each.rating,
      }))
      this.setState({isLoading: false, productsList: responseData})
    } else {
      this.setState({isLoading: false, failureState: true})
    }
  }

  //   getProducts = async () => {
  //     this.setState({
  //       isLoading: true,
  //     })
  //     const jwtToken = Cookies.get('jwt_token')

  //     const {activeOptionId, failureState} = this.state
  //     const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
  //     const options = {
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //       method: 'GET',
  //     }
  //     const response = await fetch(apiUrl, options)
  //     console.log(response)
  //     if (response.ok) {
  //       const fetchedData = await response.json()
  //       const updatedData = fetchedData.products.map(product => ({
  //         title: product.title,
  //         brand: product.brand,
  //         price: product.price,
  //         id: product.id,
  //         imageUrl: product.image_url,
  //         rating: product.rating,
  //       }))
  //       this.setState({
  //         productsList: updatedData,
  //         isLoading: false,
  //       })
  //     } else {
  //       this.setState({isLoading: false, failureState: true})
  //     }
  //   }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.filterCallback)
  }

  notFailure = (productsList, activeOptionId) =>
    productsList.length !== 0 ? (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="noProductsDiv">
        <img
          className="noProductsImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          alt="no products"
        />
        <h1>No Products Found</h1>
        <p>We could not find any products. Try other filters.</p>
      </div>
    )

  renderProductsList = () => {
    const {productsList, activeOptionId, failureState} = this.state

    return failureState
      ? this.failureImage()
      : this.notFailure(productsList, activeOptionId)
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  // TODO: Add failure view
  searchFilter = searchValue => {
    // console.log(searchValue)
    this.setState({searchValueState: searchValue}, this.filterCallback)
  }

  render() {
    const {isLoading, categoryState} = this.state

    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <FiltersGroup
          categoryChange={this.categoryChange}
          categoryOptions={categoryOptions}
          categorySelected={categoryState}
          ratingsList={ratingsList}
          searchFilter={this.searchFilter}
          ratingChange={this.ratingChange}
          resetFilters={this.resetFilters}
        />

        {isLoading ? this.renderLoader() : this.renderProductsList()}
      </div>
    )
  }
}

export default AllProductsSection
