import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import _ from 'lodash';
import ButtonFunction from './button_function';

class TableView extends Component {

  componentWillMount(){
      this.props.fetchFunctions(this.props.params.rid);
  }

  renderFunctions(){
    return _.map(this.props.fns, (fn, key) => {
      return <ButtonFunction  fn={fn} id={key} key={key} rid={this.props.params.rid} tid={this.props.params.tid}/>
    });
  }

  render() {
    return (
      <div>
        <h2>Got to a table!</h2>
        <ul>
          {this.renderFunctions()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fns: state.company.fns };
}

export default connect(mapStateToProps, actions)(TableView);
