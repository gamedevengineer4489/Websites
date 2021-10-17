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
            <div className = "header"><img  style = {{ width: '60px', height: '60px', borderRadius: '40px' }} src={auth.imageURLGoogle || auth.imageURLSpotify || 'https://comps.gograph.com/egg_gg57344858.jpg' } /><b style = {{ fontSize: 'x-large', margin: '8px'}}>{auth.googleUserName || auth.spotifyUserName || auth.username }</b></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { auth: state.auth }
};

export default connect(mapStateToProps)(UserHeader);