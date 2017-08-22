import React, { Component } from 'react';

import './List.css';

export default class List extends Component {

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
    
    let element;
    if (editing) {
      element = (
      <div className="view">
        <input
          type="text"
          autoFocus="true"
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
        <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={() => removeTodo(todo.id)} />
      </div>
      )
    }

    return (
      <li> {element} </li>
    )
  }
}