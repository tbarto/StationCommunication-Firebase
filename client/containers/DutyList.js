import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import DutyItem from '../components/DutyItem';

//CSS modules
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import _ from 'lodash';

class DutyList extends Component {

  componentWillMount() {
    this.props.fetchDuties();
  }

  renderDuties() {
    return _.map(this.props.duties, (duty, key) => {
      return (
            <DutyItem
              key={key}
              duty={duty}
              id={key}
              handleClick={this.props.deleteDuty.bind(this,key)}
            />
        );
    });
  }

  renderList(){
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
    return(
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { duties: state.company.duties };
}

export default connect(mapStateToProps, actions)(DutyList);
