import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import CompanyFunctionForm from './company_function_form';
import CompanyTableForm from './company_table_form';

class CompanyAdmin extends Component {

  componentWillMount(){
    this.props.fetchCompany(this.props.params.rid);
  }

  render() {

    return (
      <div>
        <h1>Welcome to Company Admin!</h1>
        <CompanyFunctionForm rid={this.props.params.rid}/>
        <CompanyTableForm rid={this.props.params.rid}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { company: state.company.company };
}

export default connect(mapStateToProps, actions)(CompanyAdmin);
