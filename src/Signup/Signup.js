import React from 'react';
import {Button, Container, Form, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Signup extends React.Component{

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
            <Container text as={Segment}>
                <Form>
                    <Form.Input
                        label="Email"
                        placeholder="Email"
                        name="email"
                        icon="user"
                        iconPosition="left"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <Form.Input
                        label="Password"
                        placeholder="Password"
                        name="password"
                        type="password"
                        icon="lock"
                        iconPosition="left"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <Button fluid type='submit' size="large">Create an Account</Button>

                    <Container fluid textAlign="center">
                        Already have an account? <Link to={'/login'}>Log in</Link>
                    </Container>
                </Form>
            </Container>
        )
    }
}

export default Signup;