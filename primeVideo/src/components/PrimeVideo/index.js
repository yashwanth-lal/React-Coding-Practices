// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = []
    const comedyMovies = []

    moviesList.map(each => {
      if (each.categoryId === 'ACTION') {
        actionMovies.push(each)
      } else {
        comedyMovies.push(each)
      }
      return null
    })

    console.log(actionMovies)
    console.log(comedyMovies)

    return (
      <>
        <div className="primeHomeDiv">
          <img
            className="headerPoster"
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
          />
          <div className="sliderDiv">
            <h1>Action Movies</h1>
            <MoviesSlider moviesList={actionMovies} />

            <h1>Comedy Movies</h1>
            <MoviesSlider moviesList={comedyMovies} />
          </div>
        </div>
      </>
    )
  }
}
export default PrimeVideo
