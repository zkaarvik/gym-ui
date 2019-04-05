import React from 'react';
import './Login.css';
import {Button, Form} from "semantic-ui-react";

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form>
                <Form.Input label="Email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                <Form.Input label="Password" placeholder="Password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default Login;