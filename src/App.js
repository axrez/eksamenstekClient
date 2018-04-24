import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Map from 'material-ui/svg-icons/maps/map';
import Account from 'material-ui/svg-icons/action/account-circle';
import NavigationArrow from 'material-ui/svg-icons/maps/navigation';
import Clock from 'material-ui/svg-icons/device/access-time';

import './rescources/pages/App.css';

import FindJourney from './rescources/pages/FindJourney.js';
import Timetable from './rescources/pages/Timetable.js';
import Livemap from './rescources/pages/LiveMap.js';
import MyJourneys from './rescources/pages/MyJourneys';

const iconStyle = {
  marginBottom: '-0.34rem',
  marginRight: '0.35rem',
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, };

    this.handleOpen.bind(this);
    this.handleClose.bind(this);
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => {
    this.setState({ open: false, })
  };

  render() {
    return (
      <div className="App">
        <AppBar
          title="Rejseplanen"
          onLeftIconButtonClick={() => this.handleOpen()}
          titleStyle={{ color: '#e2b216' }}
        />
        <Drawer
          docked={false}
          width='50%'
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose} id="close" >
            <NavigationArrowBack style={iconStyle} />
            <p className="menuItemText" >Close</p>
          </MenuItem>
          <NavLink to="/findjourney" >
            <MenuItem onClick={this.handleClose}  >
              <NavigationArrow style={iconStyle} />
              <p className="menuItemText" >Find Rejse</p>
            </MenuItem>
          </NavLink>
          <NavLink to="/timetable" >
            <MenuItem onClick={this.handleClose} >
              <Clock style={iconStyle} />
              <p className="menuItemText" > Køreplan</p>
            </MenuItem>
          </NavLink>
          <NavLink to="/livemap" >
            <MenuItem onClick={this.handleClose}>
              <Map style={iconStyle} />
              <p className="menuItemText" > Kort</p>
            </MenuItem>
          </NavLink>
          <NavLink to="/myJourneys" >
            <MenuItem onClick={this.handleClose}>
              <Account style={iconStyle} />
              <p className="menuItemText" > Mine Rejser</p>
            </MenuItem>
          </NavLink>
        </Drawer>
        <Switch>
          <Route exact path="/findjourney" component={FindJourney} />
          <Route exact path="/timetable" component={Timetable} />
          <Route exact path="/livemap" component={Livemap} />
          <Route exact path="/myJourneys" component={MyJourneys} />
          <Redirect to="/findjourney" />
        </Switch>
      </div>
    );
  }
}

export default Container;
