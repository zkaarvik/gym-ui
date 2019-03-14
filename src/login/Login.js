import React from 'react';

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
            <div className="Login">
                <p>Email:</p>
                <input type="text" name="email" onChange={this.handleInputChange} />
                <p>Password:</p>
                <input type="password" name="password" onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default Login;