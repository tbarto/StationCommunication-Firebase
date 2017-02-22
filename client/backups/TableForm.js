import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, initialize} from 'redux-form';
import * as actions from '../actions/company';

const renderField = field => (
  <div>
    <input {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

class TableForm extends Component{

  onSubmit(formProps){
    this.props.createTable(formProps.title, this.props.rid);
  }

  render(){

    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>TableForm</h3>
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

function validate(values){
  const errors = {};
  if(!values.title){
    console.log('errors');
    errors.title = 'Enter a title';
  } else console.log('no errors!');
  return errors;
}

//connect: 1st arg is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st arg is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// export default reduxForm({
//   form: 'DutiesNew',
//   fields:['name'],
//   validate
// }, null, actions )(DutyForm);

export default connect(null, actions)(reduxForm({
  form: 'TablesNew',
  fields:['title'],
  validate
})(TableForm));
