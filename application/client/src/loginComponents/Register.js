import React from 'react';
import { addNewUserCustom, signInLocal } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Register extends React.Component {
    state = { username: null, password: null, reenteredPassword: null, firstName: null, lastName: null, email: null, imageURL: null, avatar: null};
    

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
        // First check if the entered password and reentered passwords are the same
        var rgx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.\w{2,3}]+$)/);
        if(!rgx.test(this.state.email))
        {
            alert("The entered email is invalid.");
            document.getElementById("emailEntered").value = "";
        } else {
            if(this.state.password !== this.state.reenteredPassword)
            {
                alert("The password and reentered password don't match.");
                document.getElementById("reenteredPassword").value = "";
                
            } else {
                if(this.state.avatar)
                {
                    this.obtainEncodedURLString(this.state.avatar).then(result => this.props.addNewUserCustom(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, this.state.imageURL, result ));
                    document.location.replace(document.location.href.substring(0, window.location.href.length - 8) + 'login');
                    
                } else {
                    this.props.addNewUserCustom(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, this.state.imageURL, this.state.avatar );
                    document.location.replace(document.location.href.substring(0, window.location.href.length - 8) + 'login');
                    
                }
            
                
                
            }
        }
        
        
        
    }

   checkFileSize = (element) => {
        var size = element.size;
        if(size <= 10000)
        {
            // Size is limited to 10kb
            this.setState({ avatar: element })
        } else {
            
            document.getElementById("avatar").value = "";
            alert('Image size cannot exceed 10kb. Please select a smaller image.');
            return;
        }
   }



    render() {
        return(
            <div>
                        <h1>New user registration</h1>
                        
                            <label>Username:</label> <input type = "text" name = "username" placeholder = "username" onChange = {(event) => this.setState({ username: event.target.value})} required />
                            <label>Password:</label> <input type = "password" name = "password" placeholder = "password" onChange = {(event) => this.setState({ password: event.target.value})} required/>
                            <label> Renter Password:</label> <input type = "password" id = "reenteredPassword" placeholder = "password" onChange = {(event) => this.setState({ reenteredPassword: event.target.value})} required/>
                            <label>First Name:</label> <input type = "text" name = "first name" placeholder = "first name" onChange = {(event) => this.setState({ firstName: event.target.value})} required/>
                            <label>Last Name:</label> <input type = "text" name = "last name" placeholder = "last name" onChange = {(event) => this.setState({ lastName: event.target.value})} required/>
                            <label>Email:</label> <input type = "email" name = "email" id = "emailEntered" placeholder = "email" onChange = {(event) => this.setState({ email: event.target.value})}required/>
                            <label>imageFile(optional):</label> <input type = "file" id = "avatar"  accept = "image/png, image/jpeg" onChange = {(event) => this.checkFileSize(event.target.files[0])}/>
                            
                            <label>Image Selected </label>
                            <br />
                            {this.state.avatar ? <img style = {{ height: '100px', width: '100px'}} src = {URL.createObjectURL(this.state.avatar)} /> : <label>No picture selected</label>}
                           
                            <br />
       
                            
                            <strong>Note: If no image url or file is provided then a default profile picture will be provided.</strong>
                            <br />
                            <button className = "btn" onClick = {() => this.register()}>Register</button>
                        
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { addNewUserCustom, signInLocal })(Register);