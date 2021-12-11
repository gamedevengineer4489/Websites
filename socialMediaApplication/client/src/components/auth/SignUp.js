import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';


import * as actions from '../../actions';

class SignUp extends React.Component {
    formSubmit = (formProps) => {
        //this.props.signup(formProps);
        console.log(formProps.hashReenter);
        if(formProps.email && formProps.username)
        {
            if(formProps.hash === formProps.hashReenter)
            {
                this.props.signup(formProps);
                window.location.href = "/signin";
            } else {
                alert("The rentered password does not match ");
            }
        }
        else {
            alert("You must enter a username and password. These fields cannot be left blank.");
        }
    }


    render() {
        const { handleSubmit } = this.props;

        return(
            <div style = {{ padding: '5px', marginTop: '50px'}}>
                <center><h3>Registration</h3></center>
                <form onSubmit = {handleSubmit(this.formSubmit)}>
                    <fieldset>
                        <label>Email</label>
                        <Field
                            name = "email"
                            type = "text"
                            component = "input"
                            autoComplete = "none"
                        />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Username</label>
                        <Field
                            name = "username"
                            type = "text"
                            component = "input"
                            autoComplete = "none"
                        />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Password</label>
                        <Field
                            name = "hashReenter"
                            type = "password"
                            component = "input"
                            autoComplete = "none"
                        />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Renter Password</label>
                        <Field
                            name = "hash"
                            type = "password"
                            component = "input"
                            autoComplete = "none"
                        />
                    </fieldset>
                    <br />
                    <button className = "waves-effect waves-light btn">Sign Up</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default compose(
    reduxForm({ form: 'signup' }),
    connect(mapStateToProps, actions)
)(SignUp);