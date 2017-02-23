import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import _ from 'lodash';
import TableDutyButton from './TableDutyButton';

class TableView extends Component {

  componentWillMount(){
    this.props.fetchDuties(this.props.location.query['rid']);
  }

  renderDuties(){
    const rid = this.props.location.query['rid'];
    const tid = this.props.location.query['tid'];
    const tname = this.props.location.query['tname'];

    return _.map(this.props.duties, (duty, key) => {
      return (<TableDutyButton
                duty={duty}
                id={key}
                key={key}
                rid={rid}
                tid={tid}
                tname={tname}/>
              )
    });
  }

  render() {

    const tableName = this.props.location.query['tname'];

    return (
      <div className="content">
        <h1 className="title">{tableName}</h1>
        {this.renderDuties()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { duties: state.company.duties };
}

export default connect(mapStateToProps, actions)(TableView);
