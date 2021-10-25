import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    renderButtons = () => {
        switch(this.props.auth) {
            case null:
                return null;
            case false:
                return(
                    [
                        <li><a className = "btn" href = "/auth/spotify">Sign In with Spotify <i className = "spotify icon small" /></a></li>,
                        <li><a className = "btn red" href = '/auth/google'>Sign In with Google <i className = "google icon small" /></a></li>,
                        // <li><a className = "btn grey" href = '/auth/steam'>Sign In with Steam <i className = "google icon small" /></a></li>,
                        <li><a className = "btn brown" href = '/login'>Login <i className = "computer icon small" /></a></li>,
                    ]
                )
            default:
                if(this.props.auth.email|| this.props.auth.userID ) {
                    return([
                            <li><a className = "btn" href = "/api/logout">Sign Out</a></li>,
                            <li><Link className = "btn grey" to = "/list">Blog Posts</Link></li>
                        ]
                    )
                } else {
                    return(
                        [
                            <li><a className = "btn" href = "/auth/spotify">Sign In with Spotify <i className = "spotify icon small" /></a></li>,
                            <li><a className = "btn red" href = '/auth/google'>Sign In with Google <i className = "google icon small" /></a></li>,
                            <li><a className = "btn grey" href = '/auth/steam'>Sign In with Steam <i className = "google icon small" /></a></li>,
                            <li><a className = "btn brown" href = '/login'>Login <i className = "computer icon small" /></a></li>,
                        ]
                    )
                }
                
                
        }
    }

    render() {
        return(
            <nav>
                {console.log(this.props.auth)}
                <div className = "nav-wrapper blue">
                    <Link className = "brand-logo right" to = "/">OC Websites</Link>
                    <ul className = "left">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
           
        )
    }
}

const mapStateToProps = function(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);