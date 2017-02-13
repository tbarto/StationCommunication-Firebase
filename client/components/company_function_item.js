import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';

class FunctionItem extends Component {
  handleClick() {
    this.props.deleteCompany(this.props.id, this.props.rid);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.fn.name}
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(FunctionItem);
