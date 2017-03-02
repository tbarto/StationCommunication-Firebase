import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function validate(values){
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class Login extends Component {

  handleFormSubmit(values){
    console.log(values);
    this.props.signInUser(values);
  };

  renderField({ input, label, type, meta: { touched, error } }){
    return(
        <div>
          <input {...input} placeholder={label} className="form-control" type={type} />
          {touched && error && <div className="help-block">{error}</div>}
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
    const {handleSubmit} = this.props;

    return(
      <div>
        <h2>Login</h2>
        { this.renderAuthenticationError() }
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field name="email" component={this.renderField} className="form-control" type="text" label="Email"/>
            <Field name="password" component={this.renderField} className="form-control" type="password" label="Password"/>
            <button type="submit">Submit</button>
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

export default connect(mapStateToProps,Actions)(reduxForm({
  form: 'login'
})(Login));
