import React, { Component } from 'react';

import Todo from './Todo'

import './List.css';

export default class List extends Component {
  render() {
    const { todos, actions } = this.props;
    const todoList = todos.map((todo, i) => {
      return <Todo 
                key={i+todo} 
                todo={todo} 
                editTodo={actions.editTodo}
                completeTodo={actions.completeTodo}
                removeTodo={actions.removeTodo}
                onChange={actions.onChange}
              />
    })
    return (
      <div className="list_container">
        <p> This is the List </p>
        <ul className="todo_list" >
          {todoList}
        </ul>
      </div>
    )
  }
}