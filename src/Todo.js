import React, { Component } from 'react';

import './List.css';

export default class List extends Component {

  render() {
    return (
      <li> {this.props.todo.todo} </li>
    )
  }
}