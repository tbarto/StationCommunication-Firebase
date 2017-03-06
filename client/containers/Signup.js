import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';

//CSS modules
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    floatingLabelFocusStyle: {
        color: "white"
    },
    floatingLabelStyle: {
      color: "white"
    }
}

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
          floatingLabelStyle={styles.floatingLabelStyle}
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
    return (
    <div className="bg">
      <div className="hero">
        <div className="section group">
          <div className="col span_3_of_12"></div>
          <div className="form col span_6_of_12">
            <h2>Sign Up</h2>
            { this.renderAuthenticationError() }
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field name="email" type="text" component={this.renderField} label="Email" />
              <Field name="password" type="password" component={this.renderField} label="Password" />
              <Field name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />
              <RaisedButton action="submit" primary={true} label="Submit" />
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

export default connect(mapStateToProps, Actions)(reduxForm({
  form: 'signup',
  validate
})(Signup));
