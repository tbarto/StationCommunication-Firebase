import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import _ from 'lodash';

class ButtonFunction extends Component {

  componentWillMount(){
      //this.props.fetchFunctions(this.props.params.rid);
      this.props.listenCalls(this.props.tid);
  }

  hasValue(value){
    for (var key in this.props.buttonCalls) {
      // check also if property is not inherited from prototype
      if (this.props.buttonCalls.hasOwnProperty(key)) {
        //var value = myObject.options[key];
        if (value == this.props.buttonCalls[key].name)
          return true;
      }
    }
    return false;
  }

  render() {
      return (
        <li>
          <button
            onClick= {this.props.createCall.bind(this,this.props.fn.name,this.props.rid,this.props.tid, this.props.tname)}
            className= "btn btn-primary btn-lg btn-block"
            disabled= {this.hasValue(this.props.fn.name)}>
            {this.props.fn.name}
          </button>
        </li>
      );
  }
}

function mapStateToProps(state) {
  return { buttonCalls: state.company.buttonCalls };

}export default connect(mapStateToProps, actions)(ButtonFunction);
