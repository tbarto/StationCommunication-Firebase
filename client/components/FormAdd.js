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
      {field.touched && field.error && <div className="error">{field.error}</div>}
      <p>touched?{field.input.touched}</p>
      <p>error?{field.input.error}</p>
    </div>
  );
};

function validate(values){
  const errors = {};
  if(!values.title){
    console.log('errors');
    errors.title = 'Enter a value!';
  } else console.log('no errors!');
  return errors;
}

export default connect(null, null)(reduxForm({
  fields:['title'],
  validate
})(FormAdd));
