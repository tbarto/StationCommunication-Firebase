import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import FormAdd from './FormAdd';

class DutyForm extends Component{

  onSubmit(formProps){
    this.props.createDuty(formProps.title);
  }

  render(){

    return(
      <FormAdd
        form = "DutyForm"
        formPlaceholder = "Add A Duty"
        formSubmit = {this.onSubmit.bind(this)} />
    );
  }
}

export default connect(null, actions)(DutyForm);
