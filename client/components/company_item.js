import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions';

class CompanyItem extends Component {
  handleClick() {
    this.props.deleteCompany(this.props.id);
  }

  render() {
    return (
      <li className="list-group-item">
        <Link to={`/${this.props.id}`}>{this.props.company.name}</Link>
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(CompanyItem);

//<Link to="/table/100">to Demo Table #100</Link>
