import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login/Login.js';
import './App.css';
import 'antd/dist/antd.css';
import Welcome from "./Welcome/Welcome";
import {Button, Icon, Layout, Menu} from "antd";

class App extends Component {
    state = {
        collapsed: true,
    };

    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Layout.Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        collapsedWidth="0"
                        trigger={null}
                    >
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1">
                                <Icon type="sliders"/>
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="line-chart"/>
                                <span>Option 2</span>
                            </Menu.Item>
                        </Menu>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Header style={{background: '#fff', padding: 0}}>
                            <Button icon="menu-unfold" htmlType="button" onClick={this.onCollapse}/>
                        </Layout.Header>
                        <Layout.Content style={{margin: '0 16px'}}>
                            <Route exact path="/" component={Welcome}/>
                            <Route path="/login" component={Login}/>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
