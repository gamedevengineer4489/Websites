import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions';

class SignUp extends React.Component {
    onFormSubmit = (formProps) => {
        // alexanderdalessi@yahoo.com
        // alexander.dalessi@gmail.com
        var rgx = new RegExp(/^\w+([.-]\w+)*@\w+[.]\w{2,3}$/);
        let formSubmission = formProps;
        
        if(formSubmission.email && formSubmission.firstname && formSubmission.hash && formSubmission.hashReenter && formSubmission.lastname && formSubmission.image && rgx.test(formSubmission.email))
        {
            
            this.obtainEncodedURLString(formProps.image[0]).then(profileImage => this.props.signup({email: formSubmission.email, firstname: formSubmission.firstname, lastname: formSubmission.lastname, hash: formSubmission.hash, hashReenter: formSubmission.hashReenter, image: profileImage}));
            
            
            window.location.href = "/signin";
        } 
        else if(formSubmission.email && formSubmission.firstname && formSubmission.hash && formSubmission.hashReenter && formSubmission.lastname && formSubmission.image && !rgx.test(formSubmission.email))
        {
            alert('The email entered is invalid.');
        }
        else {
            alert('To register an account all fields must be filled out.');
        }
    }

    

    customFileInput = (field) => {
        delete field.input.value; // <-- deleting the value property
        return <input type = "file" id = "file"  {...field.input }/>;
    }

    obtainEncodedURLString = (file) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsDataURL(file);
        })
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div style={{ marginTop: '70px'}}>
                <center><h3>Register an account</h3></center>
                <form onSubmit={handleSubmit(this.onFormSubmit)} style = {{ padding: '10px'}}>
                    <fieldset>
                        <label >First Name: </label>
                        <Field name = "firstname" type = "text" component = "input" autoComplete = "none" />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Last Name: </label>
                        <Field name = "lastname" type = "text" component = "input" autoComplete = "none" />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Email: </label>
                        <Field name = "email" type = "email" component = "input" autoComplete = "none" />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Password: </label>
                        <Field name = "hash" type = "password" component = "input" autoComplete = "none" />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Reenter password: </label>
                        <Field name = "hashReenter" type = "password" component = "input" autoComplete = "none" />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Profile Image: </label>
                        <Field name = "image" type = "file" component = {this.customFileInput} autoComplete = "none" multiple = {false} accept='.jpg, .png, .jpeg'/>
                    </fieldset>
                    <br />
                    {console.log(this.props.form.signup &&  this.props.form.signup.values &&  this.props.form.signup.values.image ? this.props.form.signup.values.image[0] : "No values entered.")}
                    {this.props.form.signup &&  this.props.form.signup.values &&  this.props.form.signup.values.image &&  this.props.form.signup.values.image.length ? <img alt = "abc" style = {{ height: '100px', width: '100px'}} src = {URL.createObjectURL(this.props.form.signup.values.image[0])} /> : <label>No picture selected</label>}
                    <br />
                    <button className='waves-effect waves-light btn'>Sign-Up</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth, form: state.form }
}

export default compose(
    reduxForm({ form: 'signup' }),
    connect(mapStateToProps, actions)
)(SignUp);