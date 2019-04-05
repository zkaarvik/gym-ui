import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Login from './Login/Login.js';
import './App.css';
import Welcome from "./Welcome/Welcome";
import GymHeader from "./GymHeader/GymHeader";

class App extends Component {
    state = {
        visible: false
    };

    handleShowClick = () => this.setState({ visible: true });
    handleSidebarHide = () => this.setState({ visible: false });

    render() {
        return (
            <Router>
                <Sidebar.Pushable as={Segment} basic>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={this.state.visible}
                        width='thin'
                        color="blue"
                    >
                        <Menu.Item as='a'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='male' />
                            Workout
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='history' />
                            History
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='line graph' />
                            Graphs
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={this.state.visible}>
                        <Segment basic className="AppContent">
                            <GymHeader/>
                            <Button disabled={this.state.visible} onClick={this.handleShowClick}>
                                Show sidebar
                            </Button>
                            <Route exact path="/" component={Welcome}/>
                            <Route path="/login" component={Login}/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Router>
        );
    }
}

export default App;
