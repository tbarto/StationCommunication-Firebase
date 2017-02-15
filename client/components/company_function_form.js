import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import FunctionItem from './company_function_item';

class CompanyFunctionForm extends Component {
  constructor(props){
    super(props);
    this.state = {fn: ''};
  }

  componentWillMount() {
    this.props.fetchFunctions(this.props.rid);
  }

  handleInputChange(event) {
    this.setState({ fn: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.createFunction(this.state.fn, this.props.rid);
    this.setState({fn: ''});
  }

  renderFunctions() {
    return _.map(this.props.fns, (fn, key) => {
      return <FunctionItem key={key} fn={fn} id={key} rid={this.props.rid}/>
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Function</h4>
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a function"
              value={this.state.fn}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Create Function</button>
          </div>
        </form>
        <ul className="list-group">
          {this.renderFunctions()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fns: state.company.fns };
}

export default connect(mapStateToProps, actions)(CompanyFunctionForm);
