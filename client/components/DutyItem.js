import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';

class DutyItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteDuty(this.props.id, this.props.rid);
  }

  render() {
    return (
      <li>
        {this.props.duty.name}
        <button
          onClick={this.handleClick}>
          delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(DutyItem);
