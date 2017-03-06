import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/company';
import TableItem from '../components/TableItem';

//CSS modules
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TableList extends Component {

  componentWillMount() {
    this.props.fetchTables();
  }

  renderTables() {
    return _.map(this.props.tables, (table, key) => {
      return (
          <TableItem
            key={key}
            table={table}
            id={key}
            handleClick={this.props.deleteTable.bind(this,key)}
          />
      )
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
        {this.renderTable()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { tables: state.company.tables };
}

export default connect(mapStateToProps, actions)(TableList);
