import {Component} from 'react'
import EachPassword from '../EachPassword/index'
import './index.css'

class YourPasswords extends Component {
  state = {showPassword: false, searchText: ''}

  checkBoxClick = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
    // console.log('clicked checkbox')
  }

  passId = id => {
    const {deletePassword} = this.props
    // console.log('object')
    deletePassword(id)
  }

  searchInput = e => {
    this.setState({searchText: e.target.value.toLowerCase()})
    // sendInput(searchText)
  }

  render() {
    const {initialList} = this.props

    const {showPassword, searchText} = this.state
    const filteredList = initialList.filter(each1 => {
      if (each1.website.includes(searchText)) {
        return each1
      }
      return null
    })

    // console.log(searchText)

    return (
      <div className="outer1">
        <div className="headerDiv">
          <h1 className="yourPassHeading">
            Your Passwords <p className="spanEl">{filteredList.length}</p>
          </h1>
          <div className="imgSearchDiv">
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input
              onChange={this.searchInput}
              className="inputSearchEl"
              type="search"
              placeholder="Search"
            />
          </div>
        </div>
        <hr className="lineBreak" />
        <div className="showPassDiv">
          <input id="check" className="checkboxEL" type="checkBox" />
          <label
            onClick={this.checkBoxClick}
            htmlFor="check"
            className="showPassPara"
          >
            Show Passwords
          </label>
        </div>
        {filteredList.length > 0 ? (
          <ul className="ulList">
            {filteredList.map(each => (
              <EachPassword
                passId={this.passId}
                key={each.id}
                showPassword={showPassword}
                eachList={each}
              />
            ))}
          </ul>
        ) : (
          <>
            <img
              className="emptyPassImage"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p className="noPassPara">No Passwords</p>
          </>
        )}
      </div>
    )
  }
}
export default YourPasswords
