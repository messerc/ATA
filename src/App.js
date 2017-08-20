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

    this.onChange = this.onChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  // addTodo
  addTodo (e) {
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

  onChange (e) {
    this.setState({
      todo: e.target.value
    })
  }

  removeTodo (e) {
    this.setState({

    })
  }

  completeTodo (todoId) {
    const todos = this.state.todos.map(todo => {
      return todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    }) 
    this.setState({todos})
  }
  // removeTodo
  // filterTodo
  // editTodo
  // completeTodo
  // clearCompleted
  // actions object

  // Header with input
  // List with item 
  // Footer Component 

  render() {
    const { todos, todo } = this.state
    return (
      <div className="App">
        <Header addTodo={this.addTodo} onChange={this.onChange} value={todo} />
        <List todos={todos} completeTodo={this.completeTodo} />
        <Footer />
      </div>
    );
  }
}

export default App;
