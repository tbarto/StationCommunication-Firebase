import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

import DutyItem from './DutyItem';

import _ from 'lodash';

class DutyList extends Component {

  componentWillMount() {
    this.props.fetchDuties(this.props.rid);
  }

  renderDuties() {
    return _.map(this.props.duties, (duty, key) => {
      return (
            <DutyItem key={key} duty={duty} id={key} rid={this.props.rid}/>
        );
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
          {this.renderDuties()}
        </TableBody>
      </Table>
    );
  }

  render(){
    console.log('duties is empty?: ' + _.isEmpty(this.props.duties));
    return(
      <div>
        {_.isEmpty(this.props.duties)? <CircularProgress /> : this.renderTable()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { duties: state.company.duties };
}

export default connect(mapStateToProps, actions)(DutyList);
