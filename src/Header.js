import React, { Component, PropTypes } from 'react';
import './Header.css';


export default class Header extends Component {
  constructor(props) {

    super(props);
  }

  render() {
    return (
      <div>
        <h1>ATA</h1>
        <input className="add_todo_input" placeholder="add a todo.." />
      </div>
    )
  }
}
