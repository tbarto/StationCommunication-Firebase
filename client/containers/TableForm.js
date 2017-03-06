import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import FormAdd from '../components/FormAdd';

class TableForm extends Component{

  onSubmit(formProps){
    this.props.createTable(formProps.title);
  }

  render(){

    return(
      <FormAdd
        form = "TableForm"
        formPlaceholder = "Add A Table"
        formSubmit = {this.onSubmit.bind(this)} />
    );
  }
}

export default connect(null, actions)(TableForm);
