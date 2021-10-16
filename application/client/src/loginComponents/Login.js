import React from 'react';
import { connect } from 'react-redux';
import { fetchUserLocal } from '../actions';

class Login extends React.Component {
    render() {
        return(
            <div>
                <h1>Log-in</h1>

                    Username: <input type = "text" name = "username" placeholder = "username" required/>
                    Password: <input type = "password" name = "password" placeholder = "password" required/>
                    <button className = "btn" onClick = {() => this.props.fetchUserLocal()}>Log-in</button>
                    <br />
                    Don't have an account yet? Then sign-in with google or spotify or create an account <a href = "/register">here.</a>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, {fetchUserLocal})(Login);