import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <div>
                <h1>Log-in</h1>
                <form>
                    Username: <input type = "text" name = "username" placeholder = "username" required/>
                    Password: <input type = "password" name = "password" placeholder = "password" required/>
                    <a className = "btn">Log-in</a>
                    <br />
                    Don't have an account yet? Then sign-in with google or spotify or create an account <a href = "/register">here.</a>
                </form>
            </div>
        )
    }
}

export default Login;