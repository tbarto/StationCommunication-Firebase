import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/company';
import Duties from './Duties';
import Tables from './Tables';

class CompanyDashboard extends Component {

  componentWillMount(){
    //this.props.fetchCompany(this.props.params.rid);
    this.props.fetchCompany(this.props.location.query['rid']);
  }

  render() {
    const rid = this.props.location.query['rid'];

    return (
      <div>
        <h1>Setup</h1>
        <Link to={`/station?rid=${rid}`}>View a Station</Link>
        <Duties rid={rid}/>
        <Tables rid={rid}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { company: state.company.company };
}

export default connect(mapStateToProps, actions)(CompanyDashboard);

//        <CompanyFunctionForm rid={this.props.params.rid}/>
//        <CompanyTableForm rid={this.props.params.rid}/>
