import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//CSS modules
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class FormAdd extends Component{

  render(){
    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.props.formSubmit.bind(this))}>
        <div>
          <Field name="title" type="text" label={this.props.formPlaceholder} component={renderField} />
          <FlatButton label="Add" primary={true} type="submit"/>
        </div>
      </form>
    );
  }
}

const renderField = field => (
    <TextField
      hintText={field.label}
      floatingLabelText={field.label}
      {...field.input}
      errorText={field.meta.touched && field.meta.error}
    />
);

const validate = values => {
  const errors = {};
  if(!values.title)
    errors.title = 'Enter a value!';
  return errors;
};

export default reduxForm({
  fields:['title'],
  validate
})(FormAdd);
