import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    floatingLabelFocusStyle: {
        color: "white"
    }
}

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

  renderField(field) {
    return(
      <div>
        <TextField
          type={field.type}
          hintText={field.label}
          floatingLabelText={field.label}
          {...field.input}
          errorText={field.meta.touched && field.meta.error}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          inputStyle ={{color: "white"}}
        />
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
      <div className="bg">
        <div className="hero">
          <div className="section group">
            <div className="col span_3_of_12"></div>
            <div className="form col span_6_of_12">
              <h2>Login</h2>
              { this.renderAuthenticationError() }
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                  <Field name="email" component={this.renderField} className="form-control" type="text" label="Email"/>
                  <Field name="password" component={this.renderField} className="form-control" type="password" label="Password"/>
                  <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col span_3_of_12"></div>
          </div>
        </div>
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
