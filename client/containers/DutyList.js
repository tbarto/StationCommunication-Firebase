import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import DutyItem from '../components/DutyItem';
import _ from 'lodash';

//CSS modules
import {List} from 'material-ui/List';

class DutyList extends Component {

  componentWillMount() {
    this.props.fetchDuties();
  }

  renderDuties() {
    return _.map(this.props.duties, (duty, key) => {
      return (
            <DutyItem
              key={key}
              duty={duty}
              id={key}
              handleClick={this.props.deleteDuty.bind(this,key)}
            />
        );
    });
  }

  render(){
    return(
      <List>
        {this.renderDuties()}
      </List>
    )
  }
}

function mapStateToProps(state){
  return { duties: state.company.duties };
}

export default connect(mapStateToProps, actions)(DutyList);
