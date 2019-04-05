import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login/Login.js';
import './App.css';
import Welcome from "./Welcome/Welcome";
import Header from "./Header/Header";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        );
    }
}

export default App;
