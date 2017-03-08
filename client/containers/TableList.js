import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/company';
import TableItem from '../components/TableItem';

//CSS modules
import {List} from 'material-ui/List';

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

  render(){
    return(
      <List>
        {this.renderTables()}
      </List>
    );
  }
}

function mapStateToProps(state){
  return { tables: state.company.tables };
}

export default connect(mapStateToProps, actions)(TableList);
