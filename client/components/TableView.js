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
    return (
      <div>
        <h1>Table</h1>
        <ul>
          {this.renderDuties()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { duties: state.company.duties };
}

export default connect(mapStateToProps, actions)(TableView);
