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
        <h1 className="center-align">Setup</h1>
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header">Station View</div>
            <div className="collapsible-body"><Link to={`/station?rid=${rid}`}>View a Station</Link></div>
          </li>
          <li>
            <div className="collapsible-header">Add/Remove Functions</div>
            <div className="collapsible-body"><CompanyFunctionForm rid={rid}/></div>
          </li>
          <li>
            <div className="collapsible-header">Add/Remove Tables</div>
            <div className="collapsible-body"><CompanyTableForm rid={rid}/></div>
          </li>
        </ul>
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
