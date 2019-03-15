import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login/Login.js';
import './App.css';
import 'antd/dist/antd.css';
import Welcome from "./Welcome/Welcome";

class App extends Component {

  render() {
    return (
        <Router>
            <div>
                <div>Header goes here</div>

                <Route exact path="/" component={Welcome} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
  }
}

export default App;
