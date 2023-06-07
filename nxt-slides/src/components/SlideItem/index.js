import {Component} from 'react'
import './index.css'

class SlideItem extends Component {
  SlideOnClick = () => {
    console.log('clicked')
    const {SlideItemClicked, eachSlideItem, number} = this.props

    SlideItemClicked(eachSlideItem, number)
  }

  render() {
    const {eachSlideItem, number, activeSlide} = this.props
    const {id} = eachSlideItem
    const activeSlideCss =
      activeSlide === id ? 'eachSlideDiv eachSlideDivBlueBg' : 'eachSlideDiv'

    const headingEL =
      eachSlideItem.heading === '' ? 'Heading' : eachSlideItem.heading

    const descriptionEL =
      eachSlideItem.description === ''
        ? 'Description'
        : eachSlideItem.description
    return (
      <li
        onClick={this.SlideOnClick}
        testid={`slideTab${number + 1}`}
        className={`${activeSlideCss}`}
      >
        <p className="numberEl">{number + 1}</p>
        <button type="button" className="eachSlideBtn">
          <h1 className="eachSlideHeading">{headingEL}</h1>
          <p className="eachSlideDescription">{descriptionEL}</p>
        </button>
      </li>
    )
  }
}
export default SlideItem
