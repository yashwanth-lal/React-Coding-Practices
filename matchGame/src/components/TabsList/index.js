import {Component} from 'react'
import './index.css'

class TabsList extends Component {
  tabClickFunc = () => {
    const {tabsList, tabsChanging} = this.props

    const {tabId} = tabsList
    tabsChanging(tabId)
  }

  render() {
    const {tabsList, isActive} = this.props
    console.log(isActive)
    const {tabId, displayText} = tabsList
    const activeCss = isActive === tabId ? 'yellowHighlight' : ''
    return (
      <li>
        <button
          className={`btnEl ${activeCss}`}
          onClick={this.tabClickFunc}
          type="button"
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabsList
