import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  remainingTodo = id => {
    const {todoList} = this.state
    console.log(id)

    const trimmedList = todoList.filter(each => id !== each.id)
    console.log(trimmedList)
    this.setState({todoList: trimmedList})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="overallContainer">
        <div className="innerContainer">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todoListContainer">
            {todoList.map(each => (
              <TodoItem
                key={each.id}
                para={each}
                remainingTodo={this.remainingTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
