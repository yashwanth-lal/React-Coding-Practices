// Write your code here.
// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  clickFunc = () => {
    const {showOrClose, faqsList} = this.props
    const {id} = faqsList

    showOrClose(id)
  }

  render() {
    const {faqsList} = this.props
    const {maximise} = faqsList
    const {questionText, answerText} = faqsList
    const iconDecide = maximise
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altDecide = maximise ? 'minus' : 'plus'
    const answerDecide = maximise ? (
      <p className="answer">{answerText}</p>
    ) : null

    return (
      <li className="outer2">
        <div className="inner2">
          <h1 className="question">{questionText}</h1>
          <button onClick={this.clickFunc} type="button" className="btn">
            <img className="icon" src={iconDecide} alt={altDecide} />
          </button>
        </div>
        {answerDecide}
      </li>
    )
  }
}

export default FaqItem
