import {Component} from 'react'
import './index.css'
// import simpleTodo from '../SimpleTodos/index'

// Write your code here
class TodoItem extends Component {
  deleteFunc = () => {
    const {remainingTodo, para} = this.props
    const {id} = para
    remainingTodo(id)
  }

  render() {
    const {para} = this.props
    const {title} = para

    return (
      <li className="todoContainer">
        <p className="todoPara">{title}</p>
        <button type="button" className="btn" onClick={this.deleteFunc}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
