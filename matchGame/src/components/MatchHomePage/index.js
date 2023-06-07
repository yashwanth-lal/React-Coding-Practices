import {Component} from 'react'
import TabsList from '../TabsList/index'
import EachThumb from '../EachThumb/index'
import ScoreCard from '../ScoreCard/index'

import './index.css'

class MatchHomePage extends Component {
  state = {timer: 60, activeTab: '', score: 0, gameComplete: false}

  interval = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timer !== 0) {
          return {timer: prevState.timer - 1}
        }
        console.log('yes')
        clearInterval(this.timerId)
        return {gameComplete: true}
      })
    }, 1000)
  }

  componentDidMount = () => {
    const {tabsList} = this.props
    this.interval()
    this.setState({activeTab: tabsList[0].tabId})
    this.randomPicGeneration()
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  randomPicGeneration = () => {
    const {imagesList} = this.props

    console.log('helo')
    const randomObj = imagesList[Math.round(Math.random() * imagesList.length)]
    console.log(randomObj)
    const {imageUrl, id} = randomObj
    this.randomImage = imageUrl
    this.randomImageId = id
  }

  tabsChanging = tabId => {
    this.setState({activeTab: tabId})
  }

  compareAndScore = id => {
    console.log('compared')
    console.log(id)
    console.log(this.randomImageId)

    console.log(this.randomImage)

    if (
      id === this.randomImageId ||
      id === 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186'
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.randomPicGeneration()
    } else {
      clearInterval(this.timerId)
      this.setState({gameComplete: true})
    }
  }

  playAgainFunc = () => {
    const {tabsList} = this.props
    clearInterval(this.timerId)

    this.setState({
      activeTab: tabsList[0].tabId,
      gameComplete: false,
      score: 0,
      timer: 60,
    })
    console.log('dooo')
    this.randomPicGeneration()
    this.interval()
  }

  render() {
    const {timer, activeTab, score, gameComplete} = this.state
    const {imagesList, tabsList} = this.props
    console.log(timer)
    const filteredThumbs = imagesList.filter(
      each => each.category === activeTab,
    )

    const altValue = gameComplete ? 'trophy' : 'match'

    return (
      <div className="outer">
        <div className="header">
          <img
            className="logoImg"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul className="rightDiv">
            <li className="scoreDiv">
              <p className="scorePara">Score:</p>
              <p className="scoreNumber">{score}</p>
            </li>
            <li className="scoreDiv">
              <img
                className="timerImg"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="time">{timer} sec</p>
            </li>
          </ul>
        </div>
        {!gameComplete ? (
          <div className="downDiv">
            {score === 0 ? (
              <img
                className="imageEl"
                src="https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png"
                alt={altValue}
              />
            ) : (
              <img className="imageEl" src={this.randomImage} alt={altValue} />
            )}

            <ul className="ulEl">
              {tabsList.map(each => (
                <TabsList
                  tabsChanging={this.tabsChanging}
                  isActive={activeTab}
                  tabsList={each}
                  key={each.tabId}
                />
              ))}
            </ul>
            <ul className="thumbnailsDiv">
              {filteredThumbs.map(eachThumb => (
                <EachThumb
                  compareAndScore={this.compareAndScore}
                  key={eachThumb.id}
                  thumbnail={eachThumb}
                />
              ))}
            </ul>
          </div>
        ) : (
          <ScoreCard
            altValue={altValue}
            score={score}
            playAgainFunc={this.playAgainFunc}
          />
        )}
      </div>
    )
  }
}
export default MatchHomePage
