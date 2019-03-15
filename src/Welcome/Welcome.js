import React from 'react';
import { Link } from "react-router-dom";

class Welcome extends React.Component{

    render() {
        return (
            <div>
                <h1>Welcome to the gym!</h1>
                <Link to={'login'}>Login page</Link>
            </div>
        )
    }
}

export default Welcome;