import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import {Link} from 'react-router';

class TableItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteTable(this.props.id, this.props.rid);
  }

  render() {
    const rid = this.props.rid;
    const tid = this.props.id;

    return (
      <li>
        <Link to={`/table?rid=${rid}&tid=${tid}&tname=${this.props.table.name}`}>{this.props.table.name}</Link>
        <button
          onClick={this.handleClick}>
          delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(TableItem);
