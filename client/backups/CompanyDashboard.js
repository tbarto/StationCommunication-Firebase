import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../actions/company';
import Duties from './Duties';
import Tables from './Tables';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const APP_TITLE = "Station Communication"

class CompanyDashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  componentWillMount(){
    this.props.fetchCompany(this.props.location.query['rid']);
  }

toggleDrawer(){
  this.setState({ open: !this.state.open });
}


  render() {
    const rid = this.props.location.query['rid'];

    return (
      <div>
        <Tabs>
          <Tab label="Station" >
            <div className="content">
            <FlatButton
              label="View Station"
              labelPosition="before"
              href={`/station?rid=${rid}`}/>
            </div>
            <Link to={`/station?rid=${rid}`}>Station</Link>
          </Tab>
          <Tab label="Duties" >
            <div className="content">
              <Duties rid={rid}/>
            </div>
          </Tab>
          <Tab label="Tables">
            <div className="content">
              <Tables rid={rid}/><
            /div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { company: state.company.company };
}

export default connect(mapStateToProps, actions)(CompanyDashboard);

//        <CompanyFunctionForm rid={this.props.params.rid}/>
//        <CompanyTableForm rid={this.props.params.rid}/>
