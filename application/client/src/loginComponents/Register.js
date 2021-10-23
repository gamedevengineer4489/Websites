import React from 'react';
import { addNewUserCustom } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Register extends React.Component {
    state = { username: null, password: null, reenteredPassword: null, firstName: null, lastName: null, email: null, imageURL: null, avatar: null };

    register = () => {
        
        if(this.state.avatar)
        {
            
            // let object = this.state.avatar;
            // console.log(this.state.avatar[0]);
            // // Why is this nothing
            // console.log(object);
            // this.setState({
            //     avatar: object
            // })
            // console.log(object);
            this.props.addNewUserCustom(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, this.state.imageURL, this.state.avatar )
        } else {
            this.props.addNewUserCustom(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, this.state.imageURL, this.state.avatar )
        }
        
        
        document.registrationForm.reset();
    }

    render() {
        return(
            <div>
                        <h1>New user registration</h1>
                        <form name = "registrationForm">
                            <label>Username:</label> <input type = "text" name = "username" placeholder = "username" onChange = {(event) => this.setState({ username: event.target.value})} required />
                            <label>Password:</label> <input type = "password" name = "password" placeholder = "password" onChange = {(event) => this.setState({ password: event.target.value})} required/>
                            <label>First Name:</label> <input type = "text" name = "first name" placeholder = "first name" onChange = {(event) => this.setState({ firstName: event.target.value})} required/>
                            <label>Last Name:</label> <input type = "text" name = "last name" placeholder = "last name" onChange = {(event) => this.setState({ lastName: event.target.value})} required/>
                            <label>Email:</label> <input type = "email" name = "email" placeholder = "email" onChange = {(event) => this.setState({ email: event.target.value})}required/>
                            <label>imageURL(optional):</label> <input type = "url" name = "image URL" placeholder = "imageURL" onChange = {(event) => this.setState({ imageURL: event.target.value})}/>
                            <label>imageFile(optional):</label> <input type = "file" name = "avatar" accept = "image/png, image/jpeg" onChange = {(event) => this.setState({ avatar: event.target.files})}/>
                            
                            <label>Image Selected </label>
                            <br />
                            {this.state.avatar ? console.log(this.state.avatar) : null }
                            {/* {this.state.avatar ? <img style = {{ height: '200px', width: '200px'}} src = {URL.createObjectURL(this.state.avatar[0])} /> : <label>No picture selected</label>} */}
                            <br />
                            {/* {console.log(URL.createObjectURL(this.state.avatar))} */}
                            {/* // If given a file we have to convert the file to a URL that can be accesses. This is quite interesting.  */}
                            <strong>Note: If no image url or file is provided then a default profile picture will be provided.</strong>
                            <br />
                            <Link to = "/"><button className = "btn" onClick = {() => this.register()}>Register</button></Link>
                        </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { addNewUserCustom })(Register);