// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem/index'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div data-testid="planets" className="slider-container">
        <h1 className="heading">Planets</h1>

        <Slider dots="true" {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} data={each} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default PlanetsSlider
