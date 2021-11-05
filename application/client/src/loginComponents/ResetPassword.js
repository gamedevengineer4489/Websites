import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class ResetPassword extends React.Component {
    state = { "enteredUsername": null, "enteredPassword": null, "reenteredPassword": null }

    

   


    render() {
        return(
            <div>
                <h1>Reset Password</h1>
                    <form name = "loginForm">
                        {console.log(this.state)}
                        Username: <input type = "text" name = "username" placeholder = "username" onChange = {(event) => this.setState({ enteredUsername: event.target.value })} required/>
                        New Password: <input type = "password" name = "password" placeholder = "password" onChange = {(event) => this.setState({ enteredPassword: event.target.value })} required/>
                        Reenter New Password: <input type = "password" name = "password" placeholder = "renter password" onChange = {(event) => this.setState({ reenteredPassword: event.target.value })} required/>
                        {this.state.enteredPassword && this.state.enteredPassword === this.state.reenteredPassword ? <Link to = "/"><button className = "btn" type = "submit" onClick = {() => this.props.changePassword(this.state.enteredUsername, this.state.enteredPassword)}>Reset Password</button></Link> : ""}
                    </form>
                    <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(ResetPassword);