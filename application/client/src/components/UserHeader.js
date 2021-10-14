import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const { auth } = this.props;
        console.log(auth);
        if(!auth)
        {
            return null;
        }

        return(
            <div className = "header"><i className = "large middle aligned icon user" /><b>{auth}</b></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { auth: state.auth.googleUserName || state.auth.spotifyUserName }
};

export default connect(mapStateToProps)(UserHeader);