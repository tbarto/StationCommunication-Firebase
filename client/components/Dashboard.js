import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TableLinks from '../containers/TableLinks';

export default class Dashboard extends Component {

  render(){

    return(
      <div className="content">
        <h1 className="title">Welcome to jeogiyo</h1>
        <section className="section group">
          <Subheader>Station</Subheader>
          <List>
            <ListItem primaryText="This is the place where calls will show up" disabled={true}/>
          </List>
        </section>
        <section>
          <Subheader>Duties</Subheader>
          <List>
            <ListItem primaryText="These are the functions that a user can do"disabled={true} />
          </List>
        </section>
        <section>
          <Subheader>Tables</Subheader>
          <List>
            <ListItem primaryText="These are where users are sitting" disabled={true}/>
          </List>
        </section>
        <section>
          <Subheader>Quick Access Table View: for DEMO purpose only</Subheader>
          <TableLinks />
        </section>
      </div>
    );
  }
}
