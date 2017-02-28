import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import TableItem from './TableItem';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

import _ from 'lodash';

class TableList extends Component {

  componentWillMount() {
    this.props.fetchTables(this.props.rid);
  }

  renderTables() {
    return _.map(this.props.tables, (table, key) => {
      return <TableItem key={key} table={table} id={key} rid={this.props.rid}/>
    });
  }

  renderTable(){
    return(
      <Table
        displayRowCheckbox={false}>
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderTables()}
        </TableBody>
      </Table>
    );
  }

  render(){
    return(
      <div>
        {_.isEmpty(this.props.tables)? <CircularProgress /> : this.renderTable()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { tables: state.company.tables };
}

export default connect(mapStateToProps, actions)(TableList);
