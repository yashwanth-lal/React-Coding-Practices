// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const ContentClick = () => {
            onToggleShowContent()
          }

          const leftNavClick = () => {
            onToggleShowLeftNavbar()
          }
          const rightNavClick = () => {
            onToggleShowRightNavbar()
          }

          return (
            <div className="controllerOuterDiv">
              <h1 className="layoutHeading">Layout</h1>
              <div className="contextLabel">
                <input
                  checked={showContent}
                  onChange={ContentClick}
                  id="contextId"
                  type="checkbox"
                />
                <label htmlFor="contextId" className="">
                  Content
                </label>
              </div>
              <div className="contextLabel">
                <input
                  id="leftId"
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={leftNavClick}
                />
                <label htmlFor="leftId" className="">
                  Left Navbar
                </label>
              </div>
              <div className="contextLabel">
                <input
                  id="rightId"
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={rightNavClick}
                />
                <label htmlFor="rightId" className="">
                  Right Navbar
                </label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default ConfigurationController
