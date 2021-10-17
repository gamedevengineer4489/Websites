import React from 'react';
import { connect } from 'react-redux';
import { signInLocal } from '../actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = { "enteredUsername": null, "enteredPassword": null }

   


    render() {
        return(
            <div>
                <h1>Log-in</h1>

                    Username: <input type = "text" name = "username" placeholder = "username" onChange = {(event) => this.setState({ enteredUsername: event.target.value })} required/>
                    Password: <input type = "password" name = "password" placeholder = "password" onChange = {(event) => this.setState({ enteredPassword: event.target.value })} required/>
                    <Link to = "/"><button className = "btn" onClick = {() => this.props.signInLocal(this.state.enteredUsername, this.state.enteredPassword)}>Log-in</button></Link>
                    <br />
                    {console.log(this.state.enteredUsername)}
                    Don't have an account yet? Then sign-in with google or spotify or create an account <a href = "/register">here.</a>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, {signInLocal})(Login);