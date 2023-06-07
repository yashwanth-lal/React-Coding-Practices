// Write your code here.
import './index.css'

const CardItem = props => {
  console.log(props)
  const {classname, title, desc, url} = props

  return (
    <li className={classname}>
      <h1 className="cardHeading">{title}</h1>
      <p className="cardPara">{desc}</p>
      <div className="cardImageContainer">
        <img className="cardImage" src={url} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
