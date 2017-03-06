import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actions from '../actions/company';

//CSS modules
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

//Material-ui requirement to make a selectable list
let SelectableList = makeSelectable(List);

class CompanyDashboard extends Component {

  handleRequestChange (event, index) {
    this.setState({});
  }

  renderAside() {
    return (
      <Drawer open={true} >
        <AppBar
          showMenuIconButton={false}
          title="jeogiyo"
        />
        <SelectableList value={this.props.location.pathname} onChange={this.handleRequestChange.bind(this)}>
            <ListItem value="/dashboard" primaryText="Home" containerElement= {<Link to={'/dashboard'}>Dashboard</Link>}></ListItem>
            <ListItem value="/station" primaryText="Station" containerElement= {<Link to={'station'}>Station</Link>}></ListItem>
            <ListItem value="/duties" primaryText="Duties" containerElement= {<Link to={'/duties'}>Duties</Link>}></ListItem>
            <ListItem value="/tables" primaryText="Tables" containerElement= {<Link to={'/tables'}>Tables</Link>}></ListItem>
        </SelectableList>
      </Drawer>
    );
  }

  render() {
    return (
      <div>
        {this.renderAside()}
        {this.props.children}
      </div>);
  }
}


export default CompanyDashboard;
