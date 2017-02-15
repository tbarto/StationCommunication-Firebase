import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import TableItem from './company_table_item';

class CompanyTableForm extends Component {
  constructor(props){
    super(props);
    this.state = {t: ''};
  }

  componentWillMount() {
    this.props.fetchTables(this.props.rid);
  }

  handleInputChange(event) {
    this.setState({ t: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.createTable(this.state.t, this.props.rid);
    this.setState({t: ''});
  }

  renderTables() {
    return _.map(this.props.tables, (t, key) => {
      return <TableItem key={key} t={t} id={key} rid={this.props.rid}/>
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Table</h4>
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a table"
              value={this.state.t}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Create Table</button>
          </div>
        </form>
        <ul className="list-group">
          {this.renderTables()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tables: state.company.tables };
}

export default connect(mapStateToProps, actions)(CompanyTableForm);