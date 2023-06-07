// Write your code here
import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  clickFunc = () => {
    const {eachItem, changeTabs} = this.props
    const {id} = eachItem

    changeTabs(id)
  }

  render() {
    const {eachItem, currentTab} = this.props
    console.log(currentTab)
    console.log(eachItem.id)

    const selectedCss = currentTab === eachItem.id ? 'selectedBtn' : null
    return (
      <button
        onClick={this.clickFunc}
        type="button"
        className={`btnEl ${selectedCss}`}
      >
        <li className="liEL">{eachItem.language}</li>
      </button>
    )
  }
}
export default LanguageFilterItem
