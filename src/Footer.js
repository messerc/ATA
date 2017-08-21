import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.filterOption("SHOW_ALL")}>Show All</button>
        <button onClick={() => this.props.filterOption("SHOW_ACTIVE")}>Show Active</button>
        <button onClick={() => this.props.filterOption("SHOW_COMPLETED")}>Show Completed</button>
      </div>
    )
  }
}