import React, { Component } from "react";
import AuthContainer from "./containers/AuthContainer";
import ChatContainer from "./containers/ChatContainer";

export default class App extends Component {
  state = {
    token: null,
    darkMode: true,
  }

  setToken = (token) => {
    this.setState({
      token: token,
    })
  }

  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  render() {
    return this.state.token ? <ChatContainer token={this.state.token} setToken={this.setToken} darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode}/> : <AuthContainer setToken={this.setToken} darkMode={this.state.darkMode} />
  }
}