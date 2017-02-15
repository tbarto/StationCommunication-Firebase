import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions/company';

class TableItem extends Component {
  handleClick() {
    this.props.deleteTable(this.props.id, this.props.rid);
  }

  render() {
    return (
      <li className="list-group-item">
        <Link to={`/${this.props.rid}/${this.props.id}`}>{this.props.t.name}</Link>
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(TableItem);
