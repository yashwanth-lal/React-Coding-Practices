// Write your code here
// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import Header from '../Header/index'
import Footer from '../Footer/index'
import Body from '../Body/index'
import './index.css'

class Layout extends Component {
  render() {
    return (
      <div className="layoutDiv">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default Layout
