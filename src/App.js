import React, { Component } from 'react';
import Login from './login/Login.js'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {

  state = {};

  componentDidMount() {
    this.hello();
  }

  hello = () => {
    fetch('/api/v1/hello')
        .then(response => response.text())
        .then(message => {
          this.setState({message: message});
        });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            What did the server say? <code>{this.state.message}</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Login/>
      </div>
    );
  }
}

export default App;
