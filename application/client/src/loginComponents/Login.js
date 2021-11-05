import React from 'react';
import { connect } from 'react-redux';
import { signInLocal } from '../actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = { "enteredUsername": null, "enteredPassword": null }

    signIn = () => {
        this.props.signInLocal(this.state.enteredUsername, this.state.enteredPassword);
        document.loginForm.reset();
    }

   


    render() {
        return(
            <div>
                <h1>Log-in</h1>
                    <form name = "loginForm">
                        Username: <input type = "text" name = "username" placeholder = "username" onChange = {(event) => this.setState({ enteredUsername: event.target.value })} required/>
                        Password: <input type = "password" name = "password" placeholder = "password" onChange = {(event) => this.setState({ enteredPassword: event.target.value })} required/>
                        <Link to = "/"><button className = "btn" type = "submit" onClick = {() => this.signIn()}>Log-in</button></Link>
                    </form>
                    <br />
                    Don't have an account yet? Then sign-in with google or spotify or create an account <a href = "/register">here. </a>
                    <b>Note:</b> Please write down your username as this is the only way a password can be retrieved if a password needs to be changed <a href = "/changePassword">here. </a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, {signInLocal})(Login);