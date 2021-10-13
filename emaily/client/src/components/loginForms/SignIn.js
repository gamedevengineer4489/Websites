import { Component } from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {
    render() {
        return (
            <div>
                <LoginForm val = 'signIn' />
            </div>
        )
    }
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm);