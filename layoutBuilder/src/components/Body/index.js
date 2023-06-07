// Write your code here
// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          console.log(showContent)
          return (
            <div className="bodyOuter">
              {showLeftNavbar ? (
                <div className="leftNavDiv">
                  <h1>Left Navbar Menu</h1>
                  <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                  </ul>
                </div>
              ) : null}
              {showContent ? (
                <div className="contentDiv">
                  <h1>Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur eget libero mauris. Donec condimentum quam ipsum,
                    nec condimentum dolor auctor et. Sed mollis enim tincidunt
                    ligula bibendum placerat.
                  </p>
                </div>
              ) : null}
              {showRightNavbar ? (
                <div className="rightNavDiv">
                  <h1>Right Navbar</h1>
                  <div className="ads">
                    <p className="ad1">Ad 1</p>
                    <p className="ad2">Ad 2</p>
                  </div>
                </div>
              ) : null}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
