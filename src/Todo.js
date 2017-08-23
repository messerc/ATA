import React, { Component } from 'react';

import './List.css';
import './Todo.css';

export default class Todo extends Component {

  state = {
    editing: false,
    text: this.props.todo.text || ''
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.handleSave(this.props.todo.id, text)
    }
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.removeTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { todo, completeTodo, removeTodo, editTodo } = this.props
    const { editing, text } = this.state

    let textStyle;
    if (todo.completed) {
      textStyle = "todo_text completed"
    } else {
      textStyle="todo_text"
    }
    
    let element;
    if (editing) {
      element = (
      <div className="view">
        <input
          type="text"
          autoFocus={true}
          value={text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          />
      </div>
      )
    } else {
      element = (
      <div className="view">
        <input 
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onClick={() => completeTodo(todo.id)}
        />
        <label className={textStyle} onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
        <span className="destroy" onClick={() => removeTodo(todo.id)} > x </span>
      </div>
      )
    }

    return (
      <li> {element} </li>
    )
  }
}