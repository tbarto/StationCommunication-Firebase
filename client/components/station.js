import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/station';

class Station extends Component {

  componentWillMount(){
    //start listening to restaurant-calls
    //this.props.fetchCompany(this.props.params.rid);
  }

  render() {

    return (
      <div>
        Welcome to a station view
      </div>
    );
  }
}


function mapStateToProps(state) {
  //return { company: state.company.company };
}

export default connect(null, actions)(Station);
