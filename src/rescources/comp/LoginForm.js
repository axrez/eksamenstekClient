import React, { Component } from "react";

import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";

import "./login-form.css";


export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
      fade: false,
    };

    this.handleChange.bind(this);
    this.componentDidMount.bind(this);
  }

  handleChange = value => {
    this.setState({
      slideIndex: value
    });
  };

  componentDidMount () {
    setTimeout(() => {
      this.setState({ slideIndex: this.state.slideIndex, fade: !this.state.fade });
    }, 100);
    
  }

  render() {
    return (
          <div
            className={this.state.fade ? "background fade" : "background" }
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              top: 0,
              left: 0,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              opacity: 0.01
            }}
          >
            <div
              className="container"
              style={{
                position: "absolute",
                top:
                  this.state.slideIndex === 0
                    ? "calc(50% - 8rem)"
                    : "calc(50% - 12.5rem)",
                left: "calc(50% - 153px)"
              }}
            >
              <Card
                style={{
                  width: "85%",
                  height: this.state.slideIndex === 0 ? "16rem" : "25rem",
                  overflow: "hidden"
                }}
              >
                <Tabs
                  onChange={this.handleChange}
                  value={this.state.slideIndex}
                >
                  <Tab
                    className={
                      this.state.slideIndex === 0 ? "activeTab tab" : "tab"
                    }
                    label="Login"
                    value={0}
                  />
                  <Tab
                    className={
                      this.state.slideIndex === 1 ? "activeTab tab" : "tab"
                    }
                    label="Sign up"
                    value={1}
                  />
                </Tabs>
                <SwipeableViews
                  index={this.state.slideIndex}
                  onChangeIndex={this.handleChange}
                >
                  <div
                    className="inputContainer"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "0 3% 0 3%",
                      paddingBottom: "3%"
                    }}
                  >
                    <TextField
                      id="username"
                      floatingLabelText="Email"
                      style={{ width: "100%" }}
                      floatingLabelShrinkStyle={{ color: "#e2b216" }}
                    />
                    <TextField
                      id="password"
                      floatingLabelText="Password"
                      style={{ width: "100%", paddingBottom: "3%" }}
                      floatingLabelShrinkStyle={{ color: "#e2b216" }}
                    />
                    <RaisedButton
                      label="Log Ind"
                      primary={true}
                      style={{
                        marginTop: "1rem",
                        width: "100%",
                        paddingTop: "3%"
                      }}
                      labelStyle={{ color: "#e2b216" }}
                    />
                  </div>
                  <div
                    className="signup"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "0 3% 0 3%",
                      paddingBottom: "3%"
                    }}
                  >
                    <TextField
                      id="name"
                      floatingLabelText="Navn"
                      style={{ width: "100%" }}
                      floatingLabelShrinkStyle={{ color: "#e2b216" }}
                    />
                    <TextField
                      id="usernameSignUp"
                      floatingLabelText="Email"
                      style={{ width: "100%" }}
                      floatingLabelShrinkStyle={{ color: "#e2b216" }}
                    />
                    <TextField
                      id="passwordSignUp"
                      floatingLabelText="Password"
                      style={{ width: "100%", paddingBottom: "3%" }}
                      floatingLabelShrinkStyle={{ color: "#e2b216" }}
                    />
                    <TextField
                      id="passwordConfirmSignUp"
                      floatingLabelText="Confirm Password"
                      style={{ width: "100%", paddingBottom: "3%" }}
                      floatingLabelShrinkStyle={{ color: "#e2b216" }}
                    />
                    <RaisedButton
                      label="Sign Up"
                      primary={true}
                      style={{
                        marginTop: "1rem",
                        width: "100%",
                        paddingTop: "3%"
                      }}
                      labelStyle={{ color: "#e2b216" }}
                    />
                  </div>
                </SwipeableViews>
              </Card>
            </div>
          </div>
    );
  }
}
