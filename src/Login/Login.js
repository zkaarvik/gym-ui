import React from 'react';
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
            <div className="gym-login-form">
                <div>
                    <input placeholder="Username"/>
                </div>

                <div>
                    <input type="password" placeholder="Password"/>
                </div>

                <div>
                    <button type="submit" className="gym-login-form-button">
                        Log in
                    </button>
                </div>
            </div>
        )
    }
}

export default Login;