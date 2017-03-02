import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation ) {
    errors.password = 'Passwords do not match';
  }

  return errors;
};

class Signup extends Component {

  handleFormSubmit(values){
    console.log(values);
    this.props.signUpUser(values);
  };

  renderField({ input, label, type, meta: { touched, error } }){
    return(
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        { this.renderAuthenticationError() }
        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="email" type="text" component={this.renderField} label="Email" />
          <Field name="password" type="password" component={this.renderField} label="Password" />
          <Field name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />
          <button action="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  }
}

export default connect(mapStateToProps, Actions)(reduxForm({
  form: 'signup',
  validate
})(Signup));
