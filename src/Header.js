import React, { Component } from 'react';
import './Header.css';


export default class Header extends Component {
  constructor(props) {

    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.props.onChange(e)
  }

  render() {
    const { addTodo } = this.props;
    return (
      <div>
        <h1>ATA</h1>
        <form onSubmit={addTodo}>
          <input className="add_todo_input" placeholder="add a todo.." value={this.props.value} onChange={this.onChange} />
        </form> 
      </div>
    )
  }
}
