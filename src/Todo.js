import React, { Component } from 'react';

import './List.css';

export default class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }
  }

  render() {
    const { todo, completeTodo } = this.props
    console.log(todo)

    let element = (
      <div className="view">
        <input 
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onClick={() => completeTodo(todo.id)}
        />
        <label>{todo.todo}</label>
        <button className="destroy" />
      </div>
    )

    return (
      <li className={todo.completed ? 'completed': 'inprogress'}> {element} </li>
    )
  }
}