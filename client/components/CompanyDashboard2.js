import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/company';
import Duties from './Duties';
import Tables from './Tables';

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const APP_TITLE = "Station Communication"

let SelectableList = makeSelectable(List);

class CompanyDashboard2 extends Component {
  constructor(props) {
      super(props);
      this.state = {selectedIndex: 1};
  }

  componentWillMount(){
    this.props.fetchCompany(this.props.location.query['rid']);
  }

  handleRequestChange (event, index) {
    this.setState({
        selectedIndex: this.props.location.pathname
    });
  }

  render() {

    return (<div>
      {this.renderAside()}
      {this.props.children}
      </div>);
  }

  renderAside() {
    return (
      <Drawer open={true} >
        <AppBar
          showMenuIconButton={false}
          title="Ding"
        />
        <SelectableList value={this.props.location.pathname} onChange={this.handleRequestChange.bind(this)}>
            <ListItem value="/station" primaryText="Station" containerElement= {<Link to={`/station?rid=${this.props.location.query['rid']}`}>Station</Link>}></ListItem>
            <ListItem value="/duties" primaryText="Duties" containerElement= {<Link to={`/duties?rid=${this.props.location.query['rid']}`}>Duties</Link>}></ListItem>
            <ListItem value="/tables" primaryText="Tables" containerElement= {<Link to={`/tables?rid=${this.props.location.query['rid']}`}>Duties</Link>}></ListItem>
            <ListItem value={4} primaryText="Menu3" />
        </SelectableList>
      </Drawer>
    );
  }
}


function mapStateToProps(state) {
  return { company: state.company.company };
}

export default connect(mapStateToProps, actions)(CompanyDashboard2);
