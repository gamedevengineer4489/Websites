import React from 'react';
import { addNewUserCustom } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Register extends React.Component {
    state = { username: null, password: null, reenteredPassword: null, firstName: null, lastName: null, email: null, imageURL: null, avatar: null,  name: null, lastModified: null, size: null, type: null, webkitRelativePath: "" };
    

    obtainEncodedURLString = function(file, onLoadCallback) {

        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
                

            reader.onload = function() {
                resolve(reader.result)
                    
            };

            reader.onerror = reject;
            // This function happens asynchronously so we can use promises.
            reader.readAsDataURL(file);
        })
       
    }
    

    register = function() {
        
        

        if(this.state.avatar)
        {
               this.obtainEncodedURLString(this.state.avatar).then(result => this.props.addNewUserCustom(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, this.state.imageURL, result ));
                
                

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
                            <label>imageFile(optional):</label> <input type = "file" name = "avatar" accept = "image/png, image/jpeg" onChange = {(event) => this.setState({ avatar: event.target.files[0] })}/>
                            
                            <label>Image Selected </label>
                            <br />
                            {this.state ? console.log(this.state) : null}
                            {this.state.avatar ? console.log(this.state.avatar) : null }
                            {this.state.avatar ? <img style = {{ height: '200px', width: '200px'}} src = {URL.createObjectURL(this.state.avatar)} /> : <label>No picture selected</label>}
                           
                            <br />
       
                            
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