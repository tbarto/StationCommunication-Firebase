import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/company';
import CompanyFunctionForm from './company_function_form';
import CompanyTableForm from './company_table_form';

class CompanyAdmin extends Component {

  componentWillMount(){
    //this.props.fetchCompany(this.props.params.rid);
    this.props.fetchCompany(this.props.location.query['rid']);
  }

  render() {
    const rid = this.props.location.query['rid'];

    return (
      <div>
        <h1>Welcome to Company Setup!</h1>
        <Link to={`/station?rid=${rid}`}>Go To Station</Link>
        <CompanyFunctionForm rid={rid}/>
        <CompanyTableForm rid={rid}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { company: state.company.company };
}

export default connect(mapStateToProps, actions)(CompanyAdmin);

//        <CompanyFunctionForm rid={this.props.params.rid}/>
//        <CompanyTableForm rid={this.props.params.rid}/>
