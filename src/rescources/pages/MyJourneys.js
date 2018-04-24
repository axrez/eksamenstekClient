import React, { Component } from 'react';

import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class MyJourneys extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    }
    this.handleLogin.bind(this);
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    return (
      <div style={{ overflowX: 'hidden' }} >
        {!this.state.isLoggedIn ? <div className="isNotLoggedIn">
          <Card style={{ margin: '3%' }} >
            <h3 style={{ width: '100%', font: 'Roberto', fontWeight: 300, margin: '3% 3% -2% 3%', padding: '1rem 0 0.5rem' }} >Log ind</h3>
            <p style={{ margin: '3%', fontSize: '0.9rem' }} >Du skal logge ind for at bruge følgende funktionalitet</p> 
            <RaisedButton label="Log Ind" primary={true} style={{ margin: '3%', width: '94%' }} labelStyle={{ color: '#e2b216' }} onClick={this.handleLogin} />
          </Card>
        </div> : <div className="main">
            <Card style={{ margin: '-3% 0 3% 0' }} >
              <h3 style={{ width: '100%', font: 'Roberto', fontWeight: 300, margin: '3% 3% 0 3%', paddingTop: '1rem' }} >Mine Rejser</h3>
              <RaisedButton label="Log Ud" primary={true} style={{ margin: '3%', width: '94%' }} labelStyle={{ color: '#e2b216' }} onClick={this.handleLogin} />
            </Card>
          </div>}
      </div>
    )
  }
}
