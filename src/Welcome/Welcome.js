import React from 'react';
import { Link } from "react-router-dom";

class Welcome extends React.Component{

    render() {
        return (
            <div>
                <h2>Welcome to the gym!</h2>
                <Link to={'/login'}>Login page</Link>
            </div>
        )
    }
}

export default Welcome;