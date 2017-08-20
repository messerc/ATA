import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import List from './List';

import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      todos: [],
      todo: ''
    }
  }

  // addTodo
  addTodo = (e) => {
    e.preventDefault(); 
    const idCalc = this.state.todos.length > 0 ? this.state.todos.reduce((todos, todo) => Math.max(todo.id, 0), 0) + 1 : 0
    const todoToAdd = {
      id: idCalc,
      todo: this.state.todo,
      completed: false
    }
    const newTodoList = this.state.todos.concat(todoToAdd)
    this.setState({
      todos: newTodoList,
      todo: ''
    })
  }

  onChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  removeTodo = (todoId) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== todoId 
    })
    this.setState({todos})
  }

  completeTodo = (todoId) => {
    const todos = this.state.todos.map(todo => {
      return todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    }) 
    this.setState({todos})
  }

  actions = {
    addTodo: this.addTodo,
    removeTodo: this.removeTodo,
    onChange: this.onChange,
    completeTodo: this.completeTodo
  }

  render() {
    const { todos, todo } = this.state
    return (
      <div className="App">
        <Header 
          addTodo={this.actions.addTodo} 
          onChange={this.actions.onChange} 
          value={todo} 
        />
        <List todos={todos} actions={this.actions} />
        <Footer />
      </div>
    );
  }
}

export default App;
