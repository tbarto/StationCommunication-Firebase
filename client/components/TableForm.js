import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import FormAdd from './FormAdd';

class TableForm extends Component{

  onSubmit(formProps){
    this.props.createTable(formProps.title, this.props.rid);
  }

  render(){

    return(
      <FormAdd
        form = "TableForm"
        formTitle = "Table Form"
        formSubmit = {this.onSubmit.bind(this)} />
    );
  }
}

export default connect(null, actions)(TableForm);
