import React, { Component } from 'react';
import Header from './Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      todos: []
    }
  }

  // addTodo
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
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
