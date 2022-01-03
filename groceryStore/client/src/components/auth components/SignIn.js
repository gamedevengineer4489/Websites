import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions';

class SignUp extends React.Component {
    onFormSubmit = (formProps) => {
        
        if(formProps.email && formProps.hash)
        {
            this.props.signin(formProps);
            window.location.href = "/";
        } else {
            alert('To sign-in, all fieds must have values.');
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div style={{ marginTop: '70px'}}>
                <center><h3>Log-in</h3></center>
                <form onSubmit={handleSubmit(this.onFormSubmit)} style = {{ padding: '10px'}}>
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
                    <button className='waves-effect waves-light btn'>Sign-In</button>
                    <p>If you have forgotten your password. <a href = "/changePassword">Click Here!</a></p>
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