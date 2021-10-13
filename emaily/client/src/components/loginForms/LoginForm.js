import React from 'react';
import { reduxForm, Field } from 'redux-form';
import LoginField from './LoginField';
import formFields from './formFields';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
    

    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key = {name}
                    component = {LoginField}
                    type = "text"
                    label = {label}
                    name = {name}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <form> 
                    {this.renderFields()}
                    <Link to="/" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    {console.log(this.props)}

                    <button type = "submit" className="teal btn-flat right white-text" onClick = {() => this.props.submitNewUser(this.props.formValues.loginForm.values )} >
                        Create
                        
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { formValues: state.form }
}

export default connect(mapStateToProps, actions)(LoginForm);