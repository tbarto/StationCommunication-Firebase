import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions/company';
import _ from 'lodash';

//CSS modules
import FlatButton from 'material-ui/FlatButton';

class TableLinks extends Component {

  componentWillMount() {
    this.props.fetchTables();
  }

  renderTables() {
    return _.map(this.props.tables, (table, key) => {
      return (
        <FlatButton
          label={table.name}
          key={key}
          containerElement={<Link to={`/table?tid=${key}&tname=${table.name}`} />}
        />
      )
    });
  }

  render(){
    return(
      <div>
        {this.renderTables()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { tables: state.company.tables };
}

export default connect(mapStateToProps, actions)(TableLinks);
