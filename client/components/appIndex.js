import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';
import CompanyItem from './company_item';
import AppBar from 'material-ui/AppBar';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { company: '' };
  }

  componentWillMount() {
    this.props.fetchCompanies();
  }

  handleInputChange(event) {
    this.setState({ company: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.createCompany(this.state.company);
    this.setState({company: ''});
  }

  renderCompanies() {
    return _.map(this.props.companies, (company, key) => {
      return <CompanyItem key={key} company={company} id={key} />
    });
  }

  render() {
    return (
      <div className="content">
        <h1>Create a Company</h1>
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a company"
              value={this.state.company}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Create Company</button>
          </div>
        </form>
        <ul className="list-group">
          {this.renderCompanies()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { companies: state.companies };
}

export default connect(mapStateToProps, actions)(AppIndex);
