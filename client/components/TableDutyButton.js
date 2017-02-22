import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';

class TableDutyButton extends Component {

  componentWillMount(){
      this.props.listenCalls(this.props.tid);
  }

  hasValue(value){
    for (var key in this.props.dutyCalls) {
      if (this.props.dutyCalls.hasOwnProperty(key)) {
        if (value == this.props.dutyCalls[key].name)
          return true;
      }
    }
    return false;
  }

  handleClick(){
    const args = [
      this.props.duty.name, //name of function
      this.props.rid, //company id
      this.props.tid, //table id
      this.props.tname //table name
    ];
    this.props.createCall(...args);
  }

  render() {
      return (
        <li>
          <RaisedButton label="Primary" primary={true} />
          <button
            onClick= {this.handleClick.bind(this)}
            disabled= {this.hasValue(this.props.duty.name)}>
            {this.props.duty.name}
          </button>
        </li>
      );
  }
}

function mapStateToProps(state) {
  return { dutyCalls: state.company.dutyCalls };

}export default connect(mapStateToProps, actions)(TableDutyButton);

//this.props.createCall.bind(this,this.props.duty.name,this.props.rid,this.props.tid, this.props.tname)
