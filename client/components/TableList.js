import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import TableItem from './TableItem';

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

  render(){
    return(
      <div>
        <h3>TableList</h3>
        <ul>
          {this.renderTables()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { tables: state.company.tables };
}

export default connect(mapStateToProps, actions)(TableList);
