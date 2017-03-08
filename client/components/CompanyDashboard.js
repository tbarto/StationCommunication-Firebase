import React, { Component } from 'react';
import {Link} from 'react-router';
import * as actions from '../actions/company';
import {toggleNav} from '../actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

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

  constructor() {
    super();
    if (this.location){
      this.state={selectedIndex: this.location.pathname};
    }else {
      this.state={selectedIndex: null}
    }
  }

  handleRequestChange (event, index) {
    this.props.toggleNav();
    this.setState({
        selectedIndex: index,
      });
  }

  renderAside() {
    return (
      <Drawer open={this.props.navOpen}>
        <AppBar
          showMenuIconButton={false}
          onTitleTouchTap={this.props.toggleNav.bind(this)}
          title="jeogiyo"
        />
        <SelectableList value={this.state.selectedIndex} onChange={this.handleRequestChange.bind(this)}>
            <ListItem value="/home" primaryText="Home" containerElement= {<Link to={'/dashboard'}>Dashboard</Link>}></ListItem>
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


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    navOpen: state.company.navOpen
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleNav: bindActionCreators(toggleNav, dispatch),
    companyActions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyDashboard);
