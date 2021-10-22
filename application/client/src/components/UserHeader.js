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
            <div className = "header"><img  style = {{ width: '60px', height: '60px', borderRadius: '40px' }} src={auth.imageURLGoogle || auth.imageURLSpotify || auth.imageURLSteam || auth.imageURL || 'https://th.bing.com/th/id/OIP.aZmeezB0ccZ_TZsi6odQ0wAAAA?pid=ImgDet&rs=1' } /><b style = {{ fontSize: 'x-large', margin: '8px'}}>{auth.googleUserName || auth.spotifyUserName || auth.username }</b></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { auth: state.auth }
};

export default connect(mapStateToProps)(UserHeader);