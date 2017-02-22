import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, initialize} from 'redux-form';
import * as actions from '../actions/company';
import FormAdd from './FormAdd';


class DutyForm extends Component{

  onSubmit(formProps){
    this.props.createDuty(formProps.title, this.props.rid);
  }

  render(){

    return(
      <FormAdd
        form = "DutyForm"
        formTitle = "Duty Form"
        formSubmit = {this.onSubmit.bind(this)} />
    );
  }
}

export default connect(null, actions)(DutyForm);
