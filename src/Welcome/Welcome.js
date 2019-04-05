import React from 'react';
import { Link } from "react-router-dom";
import {Header, Segment, Button} from "semantic-ui-react";

class Welcome extends React.Component{

    render() {
        return (
            <Segment textAlign="center">
                <Header as="h3">Get Started</Header>

                <Button.Group>
                    <Button color="blue" as={Link} to={'/login'}>Log In</Button>
                    <Button.Or />
                    <Button color="green" as={Link} to={'/signup'}>Sign Up</Button>
                </Button.Group>
            </Segment>
        )
    }
}

export default Welcome;