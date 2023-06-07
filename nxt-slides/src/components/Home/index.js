import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Header from '../Header/index'
import SlideItem from '../SlideItem/index'

import './index.css'

class Home extends Component {
  state = {
    headingToShow: 'Welcome',
    descriptionToShow: 'Rahul',
    activeSlide: '',
    newSlideList: [],
    activeSlideIndex: 0,
    headingHovered: false,
    descriptionHovered: false,
  }

  componentDidMount = () => {
    const {initialSlidesList} = this.props
    this.setState({
      newSlideList: initialSlidesList,
      activeSlide: initialSlidesList[0].id,
    })
  }

  SlideItemClicked = (eachSlideItem, number) => {
    console.log(eachSlideItem)
    const {id, heading, description} = eachSlideItem
    console.log(number)
    this.setState({
      headingToShow: heading,
      descriptionToShow: description,
      activeSlide: id,
      activeSlideIndex: number,
      headingHovered: false,
      descriptionHovered: false,
    })
  }

  headingUpdate = e => {
    this.setState({headingToShow: e.target.value})
  }

  headingChange = e => {
    const {
      activeSlideIndex,
      newSlideList,
      activeSlide,
      descriptionToShow,
      headingToShow,
    } = this.state

    const newSlide = {
      id: activeSlide,
      heading: e.target.value,
      description: descriptionToShow,
    }
    const prevSlides = newSlideList.slice(0, activeSlideIndex)
    const afterSlides = newSlideList.slice(activeSlideIndex + 1)
    this.setState({
      headingToShow: newSlide.heading,
      newSlideList: [...prevSlides, newSlide, ...afterSlides],
      headingHovered: true,
      descriptionHovered: false,
    })
  }

  descriptionUpdate = e => {
    this.setState({descriptionToShow: e.target.value})
  }

  descriptionChange = e => {
    const {
      activeSlideIndex,
      newSlideList,
      activeSlide,
      headingToShow,
      descriptionToShow,
    } = this.state

    const newSlide = {
      id: activeSlide,
      heading: headingToShow,
      description: e.target.value,
    }
    const prevSlides = newSlideList.slice(0, activeSlideIndex)
    const afterSlides = newSlideList.slice(activeSlideIndex + 1)
    this.setState({
      descriptionToShow: newSlide.description,
      newSlideList: [...prevSlides, newSlide, ...afterSlides],
      descriptionHovered: true,
      headingHovered: false,
    })
  }

  newClick = () => {
    const {activeSlideIndex, newSlideList} = this.state

    const newSlide = {
      id: uuidV4(),
      heading: 'Heading',
      description: 'Description',
    }
    console.log(activeSlideIndex)
    const prevSlides = newSlideList.slice(0, activeSlideIndex + 1)
    const afterSlides = newSlideList.slice(activeSlideIndex + 1)
    this.setState(
      {
        newSlideList: [...prevSlides, newSlide, ...afterSlides],
        activeSlide: newSlide.id,
        activeSlideIndex: activeSlideIndex + 1,
      },
      this.SlideItemClicked(newSlide, activeSlideIndex + 1),
    )
  }

  headingClicked = () => {
    this.setState({headingHovered: true, descriptionHovered: false})
  }

  descriptionClicked = () => {
    this.setState({descriptionHovered: true, headingHovered: false})
  }

  randomClick = () => {
    console.log('what too')
    this.setState({headingHovered: false, descriptionHovered: false})
  }

  headBlurred = () => {
    const {headingToShow} = this.state
    console.log(headingToShow)
    const validHeadingToShow = headingToShow === '' ? 'Heading' : headingToShow
    this.setState({
      headingHovered: true,
      descriptionHovered: false,
      headingToShow: validHeadingToShow,
    })
  }

  descriptionBlurred = () => {
    const {descriptionToShow} = this.state
    console.log(descriptionToShow)
    const validDescToShow =
      descriptionToShow === '' ? 'Description' : descriptionToShow
    this.setState({
      descriptionHovered: true,
      headingHovered: false,
      descriptionToShow: validDescToShow,
    })
  }

  render() {
    const {initialSlidesList} = this.props
    const {
      headingToShow,
      descriptionToShow,
      activeSlide,
      newSlideList,
      headingHovered,
      descriptionHovered,
    } = this.state
    const theSlidesList =
      newSlideList.length === 0 ? initialSlidesList : newSlideList
    return (
      <div className="homeOuterDiv">
        <Header />
        <div className="addNewDiv">
          <button type="button" className="newButton" onClick={this.newClick}>
            <img
              className="plusImage"
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
            />
            New
          </button>
          <div onBlur={this.randomClick} className="slidesPartContainer">
            <div className="slidesLeftContainer">
              <ol className="olEl">
                {theSlidesList.map((each, index) => (
                  <SlideItem
                    SlideItemClicked={this.SlideItemClicked}
                    activeSlide={activeSlide}
                    number={index}
                    eachSlideItem={each}
                    key={each.id}
                  />
                ))}
              </ol>
            </div>
            <div className="slidesRightContainer">
              <div className="slideDisplayPart">
                {headingHovered ? (
                  <input
                    value={headingToShow}
                    type="text"
                    className="headingInput"
                    onChange={this.headingChange}
                    onBlur={this.headBlurred}
                  />
                ) : (
                  <h1 onClick={this.headingClicked} className="headingPara">
                    {headingToShow}
                  </h1>
                )}
                {descriptionHovered ? (
                  <input
                    value={descriptionToShow}
                    type="text"
                    className="descriptionInput"
                    onChange={this.descriptionChange}
                    onBlur={this.descriptionBlurred}
                  />
                ) : (
                  <p
                    onClick={this.descriptionClicked}
                    className="descriptionPara"
                  >
                    {descriptionToShow}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
