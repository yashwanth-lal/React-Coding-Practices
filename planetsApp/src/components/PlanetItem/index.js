// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class PlanetItem extends Component {
  render() {
    const {data} = this.props
    const {name, imageUrl, description} = data
    return (
      <div className="planetInfoContainer">
        <img className="imgEl" src={imageUrl} alt={`planet ${name}`} />
        <h1 className="planetName">{name}</h1>
        <p className="desc">{description}</p>
      </div>
    )
  }
}
export default PlanetItem
