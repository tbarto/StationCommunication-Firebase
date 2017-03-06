import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import _ from 'lodash';
import TableDutyButton from '../components/TableDutyButton';

class TableView extends Component {

  componentWillMount(){
    this.props.fetchDuties();
    this.props.listenCalls(this.props.location.query['tid']);
  }

  //for determining if a button is disabled or not
  hasValue(value){
    for (var key in this.props.dutyCalls) {
      if (this.props.dutyCalls.hasOwnProperty(key)) {
        if (value == this.props.dutyCalls[key].name)
          return true;
      }
    }
    return false;
  }

  handleClick(duty, tid, tname){
    const args = [
      duty.name, //name of function
      tid, //table id
      tname //table name
    ];
    this.props.createCall(...args);
  }

  renderDuties(){
    const tid = this.props.location.query['tid'];
    const tname = this.props.location.query['tname'];

    return _.map(this.props.duties, (duty, key) => {
      return (<TableDutyButton
                name={duty.name}
                key={key}
                isDisabled={this.hasValue(duty.name)}
                handleClick={this.handleClick.bind(this,duty,tid,tname)}
              />
              )
    });
  }

  render() {

    const tableName = this.props.location.query['tname'];

    return (
      <div className="section group full-page">
        <div className="col span_3_of_12"></div>
        <div className="col span_6_of_12">
          <h1 className="title">{tableName}</h1>
          {this.renderDuties()}
        </div>
        <div className="col span_3_of_12"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      duties: state.company.duties,
      dutyCalls: state.company.dutyCalls
    };
}

export default connect(mapStateToProps, actions)(TableView);
