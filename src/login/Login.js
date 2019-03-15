import React from 'react';
import {Form, Input, Icon, Button} from 'antd';
import './Login.css';

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form className="gym-login-form">
                <Form.Item>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                </Form.Item>

                <Form.Item>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="gym-login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Login;