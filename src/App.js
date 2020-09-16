import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class App extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  componentDidMount() {
    addResponseMessage("Please specify the city name to know about its weather now");
  }

  async handleNewMessage(newMessage) {
    await fetch(`${process.env.REACT_APP_API_URL}chats?q=${newMessage}`).then(
      res => res.text()
    ).then(
      res => addResponseMessage(res)
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Widget handleNewUserMessage={this.handleNewMessage} profileAvatar={logo}
          title="Weather ChatBot" subtitle="Get to know about weather of any city."
        />
      </div>
    );
  }
}

export default App;