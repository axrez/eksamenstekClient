import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class Timetable extends Component {
  render() {
    return (
      <Card style={{ margin: '3%' }} >
        <h3 style={{ width: '100%', font: 'Roberto', fontWeight: 300, margin: '3% 3% -2% 3%', paddingTop: '1rem' }}>Køreplan</h3>
        <TextField floatingLabelText="Stoppested, Station, Gadenavn osv..." 
          style={{ margin: '0 3%', width: '94%' }} 
          floatingLabelShrinkStyle={{ color: '#e2b216'}}  />
        <RaisedButton label="Søg" 
          style={{ width: '94%', margin: '3%'}} 
          primary={true} 
          labelStyle={{ color: '#e2b216' }}  />
      </Card>
    )
  }
}
