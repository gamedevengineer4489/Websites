import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

class Signin extends React.Component {
    onFormSubmit = (formProps) => {
        //this.props.signup(formProps);
        console.log(formProps);
        if(formProps.email && formProps.hash)
        {
            
                this.props.signin(formProps);
                window.location.href = '/';
        }
        else {
            alert("You must enter a username and password. These fields cannot be left blank.");
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div style = {{ marginTop: '70px', paddingLeft: '10px'}}>
                <center><h3>Sign-In</h3></center>
                <hr />
                
                    <form onSubmit = {handleSubmit(this.onFormSubmit)} >
                            <fieldset className='anyField'>
                                <label>Email</label>
                                <Field
                                    name = "email"
                                    type = "text"
                                    component = "input"
                                    autoComplete = "none"
                                />
                            </fieldset>
                        <br />
                        <fieldset  className='anyField'>
                            <label>Password</label>
                            <Field
                                name = "hash"
                                type = "password"
                                component = "input"
                                autoComplete = "none"
                                
                            />
                        </fieldset>
                        <br />
                        <div className='anyField'>
                            <button className = "waves-effect waves-light btn" style = {{ marginLeft: '5px'}}>Log-in</button>
                            <p style = {{ marginLeft: '5px' }}>To change your password. <a href = "/passwordChange">Click here</a></p>
                        </div>
                        
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