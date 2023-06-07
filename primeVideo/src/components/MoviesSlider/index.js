// Write your code here
// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import MovieItem from '../MovieItem/index'

class MoviesSlider extends Component {
  render() {
    const {moviesList} = this.props
    const {videoUrl} = moviesList
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 4,
    }

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(each => (
            <MovieItem key={each.id} moviesList={each} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default MoviesSlider
