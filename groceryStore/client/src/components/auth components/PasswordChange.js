import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import * as actions from '../../components/actions';

class PasswordChange extends React.Component {
    formSubmit = (formProps) => {
        console.log(formProps.hashReenter);
        if(formProps.email && formProps.hash)
        {
            
                this.props.changePassword(formProps);
                window.location.href = "/signin";
            
        }
        else {
            alert("You must enter an email and password. These fields cannot be left blank.");
        }
    }


    render() {
        const { handleSubmit } = this.props;

        return(
            <div style = {{ padding: '5px', marginTop: '50px'}}>
                <center><h3>Change Password</h3></center>
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
                        <label>Password</label>
                        <Field
                            name = "hash"
                            type = "password"
                            component = "input"
                            autoComplete = "none"
                        />
                    </fieldset>
                    <br />
                    <fieldset>
                        <label>Renter Password</label>
                        <Field
                            name = "hashReenter"
                            type = "password"
                            component = "input"
                            autoComplete = "none"
                        />
                    </fieldset>
                    <br />
                    <button className = "waves-effect waves-light btn">Change Password</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default compose(
    reduxForm({ form: 'passwordchange' }),
    connect(mapStateToProps, actions)
)(PasswordChange);