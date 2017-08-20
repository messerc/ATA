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
                completeTodo={actions.completeTodo}
                removeTodo={actions.removeTodo} 
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