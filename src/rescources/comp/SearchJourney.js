import React, { Component } from 'react';

import { Card, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import './transition.css';

let DateTimeFormat;
DateTimeFormat = global.Intl.DateTimeFormat;

export default class SearchJourney extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
    this.handleOnExpandChange.bind(this);
    this.handleToggle.bind(this);
  }

  handleOnExpandChange = (expanded) => {
    this.setState({ expanded: expanded });
  }

  handleToggle = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div>
        <Card style={{ margin: '3%' }} expanded={this.state.expanded} onExpandChange={this.handleOnExpandChange} >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-3%' }} >
            <h3 style={{ width: '100%', font: 'Roberto', fontWeight: 300, marginLeft: '3%' }} >Find Rejse</h3>
            <div style={{ maxWidth: '50%' }}>
              <Toggle style={{ widht: '10%', margin: '10.5% 0 0 -3%' }} 
                label="Afgangstidspunkt" 
                onClick={this.handleToggle} 
                toggled={this.state.expanded}  
                thumbSwitchedStyle={{backgroundColor: '#e2b216'}} 
                trackSwitchedStyle={{ backgroundColor: '#ffe452' }} />
            </div>
          </div>
          <TextField floatingLabelText="Fra" 
            style={{ margin: '0 3%', width: '94%' }} 
            floatingLabelShrinkStyle={{ color: '#e2b216'}} 
            underlineStyle={{ color: '#e2b216' }} 
            underlineFocusStyle={{ color: '#e2b216' }}	 />
          <TextField floatingLabelText="Til" 
            style={{ margin: '0 3%', width: '94%' }} 
            floatingLabelShrinkStyle={{ color: '#e2b216'}} />
          <CardActions className="dato" expandable={true} style={{ opacity: 1, height: '100%' }} >
            <div className="cardExtend" style={{ display: 'flex' }}>
              <div>
                <TimePicker
                  format="24hr"
                  hintText="Tid"
                  textFieldStyle={{ margin: '0 3%', widht: '10%' }}
                  defaultTime={new Date()}
                />
                <DatePicker
                  style={{ margin: '0 3%' }}
                  hintText="Dato"
                  formatDate={new DateTimeFormat('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }).format}
                  defaultDate={new Date()}
                />
              </div>
              <div style={{ alignSelf: 'center', justifySelf: 'center', marginLeft: '7.5%', marginTop: '5%' }}>
                <RadioButtonGroup defaultSelected="Afgang" style={{ margin: '0 3%' }} name="departureSelectors" >
                  <RadioButton
                    value="Afgang"
                    label="Afgang"
                    style={{ maxWidth: '2%' }}
                    labelStyle={{ fontSize: '0.8rem', marginLeft: '-0.6rem' }}
                  />
                  <RadioButton
                    value="Ankomst"
                    label="Ankomst"
                    labelStyle={{ fontSize: '0.8rem', marginLeft: '-0.6rem' }}
                  />
                </RadioButtonGroup>
              </div>
            </div>
          </CardActions>
          <RaisedButton label="Søg" primary={true} style={{ margin: '3%', width: '94%' }} labelStyle={{ color: '#e2b216' }} />
        </Card>
      </div>
    )
  }
}
