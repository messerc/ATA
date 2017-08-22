import React, { Component } from 'react';

import './List.css';

export default class List extends Component {

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.removeTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, removeTodo, editTodo } = this.props

    let element = (
      <div className="view">
        <input 
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onClick={() => completeTodo(todo.id)}
        />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={() => removeTodo(todo.id)} />
      </div>
    )

    return (
      <li className={todo.completed ? 'completed': 'inprogress'}> {element} </li>
    )
  }
}