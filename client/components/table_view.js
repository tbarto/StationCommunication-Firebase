import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import _ from 'lodash';
import ButtonFunction from './button_function';

class TableView extends Component {

  componentWillMount(){
    this.props.fetchFunctions(this.props.location.query['rid']);
  }

  renderFunctions(){
    const rid = this.props.location.query['rid'];
    const tid = this.props.location.query['tid'];
    const tname = this.props.location.query['tname'];

    return _.map(this.props.fns, (fn, key) => {
      return <ButtonFunction  fn={fn} id={key} key={key} rid={rid} tid={tid} tname={tname}/>
    });
  }

  render() {
    return (
      <div>
        <h1 className="center-align">Table</h1>
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
