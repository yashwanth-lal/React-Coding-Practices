// Write your code here
import {Component} from 'react'
import DestinatonItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    const sampleUrl = destinationsList[0].imgUrl

    return (
      <div>
        <h1 className="heading">Destination search</h1>
        <input type="search" className="searcEl" />
        <DestinatonItem url={sampleUrl} />
      </div>
    )
  }
}
export default DestinationSearch
