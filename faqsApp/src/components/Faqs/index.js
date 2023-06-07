// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  state = {initialList: []}

  componentDidMount = () => {
    console.log('mounted')
    const {faqsList} = this.props
    this.setState({
      initialList: faqsList.map(each => ({...each, maximise: false})),
    })
  }

  showOrClose = id => {
    console.log(id)
    this.setState(prevSate => ({
      initialList: prevSate.initialList.map(each1 => {
        if (id === each1.id) {
          return {...each1, maximise: !each1.maximise}
        }
        return each1
      }),
    }))
  }

  render() {
    const {initialList} = this.state
    console.log(initialList)
    return (
      <div className="outer1">
        <div className="inner1">
          <h1 className="heading1">FAQs</h1>
          <ul className="ulEl">
            {initialList.map(each => (
              <FaqItem
                showOrClose={this.showOrClose}
                key={each.id}
                faqsList={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
