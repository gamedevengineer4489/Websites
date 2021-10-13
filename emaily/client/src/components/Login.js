import React from "react";
import { connect } from 'react-redux';
import SignIn from "./loginForms/SignIn";

class Login extends React.Component {
    state = { usernameInput: null, passwordInput: null }

    changeUsernameInput = (event) => {
        this.setState({
            usernameInput: event.target.value
        })
    }

    changePasswordeInput = (event) => {
        this.setState({
            passwordInput: event.target.value
        })
    }

    renderButtons = () => {
        console.log(this.props.auth);
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href = '/auth/google' className = "btn">Log-in</a>
                )
            default:
                return [
                    <a href = '/api/logout' className = "btn">Log-out</a>
                ]
        }
    }

    render() {
        return(
            <div>
                {this.renderButtons()}
                <br />
                <SignIn />
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { auth: state.auth };
}


export default connect(mapStateToProps)(Login);