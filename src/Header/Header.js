import React from 'react';
import { PageHeader } from "antd";

class Header extends React.Component{

    render() {
        return (
            <PageHeader
                onBack={() => null}
                title="The Gym"
                subTitle="This is a subtitle"
            />
        )
    }
}

export default Header;