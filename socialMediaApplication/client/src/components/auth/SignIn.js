import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

class Signin extends React.Component {
    onFormSubmit = (formProps) => {
        //this.props.signup(formProps);
        console.log(formProps);
        var rgx = new RegExp(/^\w+([\.-]?\w+)*@\w+[\.\w{2,3}]+$/);
        if(formProps.email && formProps.hash && rgx.test(formProps.email))
        {
            this.props.signin(formProps);
            window.location.href = '/';
        } else if(!rgx.test(formProps.email))
        {
            alert("The email you entered is invalid. Enter a valid email address.");
        }
        else {
            alert("You must enter a username and password. These fields cannot be left blank.");
        }
    }

    render() {
        const { handleSubmit } = this.props;
        console.log(this.props);
        return(
            <div style = {{ marginTop: '70px'}}>
                <center><h3>Sign-In</h3></center>
                <form onSubmit = {handleSubmit(this.onFormSubmit)}>
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
                        <label>Password</label>
                        <Field
                            name = "hash"
                            type = "password"
                            component = "input"
                            autoComplete = "none"
                        />
                    </fieldset>
                    <br />
                    <button className = "waves-effect waves-light btn" style = {{ marginLeft: '5px'}}>Log-in</button>
                    <p style = {{ marginLeft: '5px' }}>To change your password. <a href = "/passwordChange">Click here</a></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default compose(
    reduxForm({ form: 'signin'}),
    connect(mapStateToProps, actions)
)(Signin);