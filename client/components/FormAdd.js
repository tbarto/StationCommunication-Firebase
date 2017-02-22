import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';

class FormAdd extends Component{

  render(){

    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.props.formSubmit.bind(this))}>
        <h3>{this.props.formTitle}</h3>
        <div>
          <label>Name</label>
          <Field name="title" type="text" component={renderField} />
          <div className="text-help">
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const renderField = (field) => {
  return (
    <div>
      <input {...field.input}/>
      {field.meta.touched && field.meta.error && <div className="error">{field.meta.error}</div>}
    </div>
  );
};

const validate = values => {
  const errors = {};
  if(!values.title){
    errors.title = 'Enter a value!';
  }
  return errors;
};

export default reduxForm({
  fields:['title'],
  validate
})(FormAdd);
