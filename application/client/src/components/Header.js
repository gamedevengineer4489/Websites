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
                        <li key = "1"><a className = "btn" href = "/auth/spotify">Sign In with Spotify <i className = "spotify icon small" /></a></li>,
                        <li key = "2"><a className = "btn red" href = '/auth/google'>Sign In with Google <i className = "google icon small" /></a></li>,
                        // <li><a className = "btn grey" href = '/auth/steam'>Sign In with Steam <i className = "google icon small" /></a></li>,
                        <li key = "3"><a className = "btn brown" href = '/login'>Login <i className = "computer icon small" /></a></li>,
                    ]
                )
            default:
                if(this.props.auth.email|| this.props.auth.userID ) {
                    return([
                            <li key = "4"><a className = "btn" href = "/api/logout">Sign Out</a></li>,
                            <li key = "7"><a className = "btn pink" href = "/users">Other Blogs</a></li>,
                            <li key = "5"><Link className = "btn grey" to = "/list">Blog Posts</Link></li>
                        ]
                    )
                } else {
                    return(
                        [
                            <li key = "6"><a className = "btn" href = "/auth/spotify">Sign In with Spotify <i className = "spotify icon small" /></a></li>,
                            <li key = "7"><a className = "btn red" href = '/auth/google'>Sign In with Google <i className = "google icon small" /></a></li>,
                            <li key = "8"><a className = "btn grey" href = '/auth/steam'>Sign In with Steam <i className = "google icon small" /></a></li>,
                            <li key = "9"><a className = "btn brown" href = '/login'>Login <i className = "computer icon small" /></a></li>,
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