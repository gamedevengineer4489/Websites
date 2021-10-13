import { Component } from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import * as actions from '../../actions';
import { connect } from 'react-redux';


class NewUser extends Component {
    
    render() {
        return (
            <div>
               
                <LoginForm val = "newUser" />
            </div>
        )
    }
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm);

