import React from 'react';
import { addNewUserCustom } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    state = { username: null, password: null, reenteredPassword: null, firstName: null, lastName: null, email: null };

    render() {
        return(
            <div>
                <h1>New user registration</h1>
                   
                        Username: <input type = "text" name = "username" placeholder = "username" onChange = {(event) => this.setState({ username: event.target.value})} required />
                        Password: <input type = "password" name = "password" placeholder = "password" onChange = {(event) => this.setState({ password: event.target.value})} required/>
                        First Name: <input type = "text" name = "first name" placeholder = "first name" onChange = {(event) => this.setState({ firstName: event.target.value})} required/>
                        Last Name: <input type = "text" name = "last name" placeholder = "last name" onChange = {(event) => this.setState({ lastName: event.target.value})} required/>
                        Email: <input type = "text" name = "email" placeholder = "email" onChange = {(event) => this.setState({ email: event.target.value})}required/>
                        <Link to = "/"><button className = "btn" onClick = {() => this.props.addNewUserCustom(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email )}>Register</button></Link>
                    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { addNewUserCustom })(Register);