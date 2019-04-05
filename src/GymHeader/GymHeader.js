import React from 'react';
import {Header, Icon} from "semantic-ui-react";

class GymHeader extends React.Component{

    render() {
        return (
            <Header as="h1" textAlign="center" icon>
                <Icon name="chart line" color="grey" />
                Gym
            </Header>
        )
    }
}

export default GymHeader;