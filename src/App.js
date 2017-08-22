import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import List from './List';

import './App.css';

const TODO_FILTERS = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: todo => !todo.completed,
  SHOW_COMPLETED: todo => todo.completed
}

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      todos: [],
      text: '',
      filter: 'SHOW_ALL'
    }
  }

  addTodo = (e) => {
    e.preventDefault(); 
    const idCalc = this.state.todos.length > 0 ? this.state.todos.reduce((todos, todo) => Math.max(todo.id, 0), 0) + 1 : 0
    const todoToAdd = {
      id: idCalc,
      text: this.state.text,
      completed: false
    }
    const newTodoList = this.state.todos.concat(todoToAdd)
    this.setState({
      todos: newTodoList,
      text: ''
    })
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSave = (e) => [

  ]

  removeTodo = (todoId) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== todoId 
    })
    this.setState({todos})
  }

  editTodo = (todoId, text) => {
    console.log(todoId)
    console.log(text)

    const todos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          text
        }
      } else {
        return todo
      }
    })
    this.setState({todos})
  }

  completeTodo = (todoId) => {
    const todos = this.state.todos.map(todo => {
      return todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    }) 
    this.setState({todos})
  }

  filterOption = (filter) => {
    this.setState({ filter })
  }

  actions = {
    addTodo: this.addTodo,
    editTodo: this.editTodo,
    removeTodo: this.removeTodo,
    onChange: this.onChange,
    completeTodo: this.completeTodo,
    filterOption: this.filterOption
  }

  render() {
    const { todos, text, filter } = this.state
    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    return (
      <div className="App">
        <Header 
          addTodo={this.actions.addTodo} 
          onChange={this.actions.onChange} 
          value={text} 
        />
        <List todos={filteredTodos} actions={this.actions} />
        <Footer filterOption={this.actions.filterOption} />
      </div>
    );
  }
}

export default App;
