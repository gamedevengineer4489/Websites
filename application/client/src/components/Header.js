import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelector('.sidenav');
            var instances = window.M.Sidenav.init(elems);
        });

        
    }

    
    
    renderButtons = () => {
        switch(this.props.auth) {
            case null:
                return null;
            case false:
                return(
                    [       
                        <li key = "1"><a className = "sidenav-close" href = "/auth/spotify" style = {{ textDecoration: 'none'}}><center><i className = "spotify icon" /> </center></a></li>,
                        <li key = "2"><a className = "sidenav-close" href = '/auth/google' style = {{ textDecoration: 'none', color: 'green'}}><center><i className = "google icon" /> </center></a></li>,
                        <li key = "3"><a className = "sidenav-close" href = '/login' style = {{ textDecoration: 'none', color: 'black'}}><center>Login with Username and Password</center></a></li>,
                    ]
                )
            default:
                if(this.props.auth.email || this.props.auth.userID ) {
                    return([
                            <li key = "4"><a className = "sidenav-close" href = "/api/logout" style = {{ textDecoration: 'none'}}>Sign Out</a></li>,
                            <li key = "5"><a className = "sidenav-close" href = "/users" style = {{ textDecoration: 'none'}}>Other Blogs</a></li>,
                            <li key = "6"><Link className = "sidenav-close" to = "/list" style = {{ backgroundColor: 'tomato', textDecoration: 'none'}}>Blog Posts</Link></li>
                        ]
                    )
                } else {
                    return(
                        [
                            <li key = "7"><a className = "sidenav-close" href = "/auth/spotify" style = {{ textDecoration: 'none'}}><center><i className = "spotify icon" /> </center></a></li>,
                            <li key = "8"><a className = "sidenav-close" href = '/auth/google' style = {{ textDecoration: 'none', color: 'green'}}><center><i className = "google icon" /> </center></a></li>,
                            <li key = "9"><a className = "sidenav-close" href = '/login' style = {{ textDecoration: 'none', color: 'black'}}><center>Login with Username and Password</center></a></li>,
                        ]
                    )
                }
                
                
        }
    }

    render() {
        
        return(
            <div >
                <nav>
                    <div className = "nav-wrapper blue" style = {{ minHeight: '50px'}}>
                        <Link className = "brand-logo right" to = "/" style = {{ color: 'chocolate', fontFamily: 'fantasy', fontStyle: 'italic', textDecoration: 'none', position : 'absolute'}}>OC Websites</Link>
                        <a data-target="mobile-demo" className="sidenav-trigger" style = {{ cursor: 'pointer'}}><i className="material-icons" style = {{ textDecoration: 'none'}}>menu</i></a>
                        
                        <ul className = "hide-on-med-and-down" >
                            
                            {this.renderButtons()}
                            
                        </ul>
                        
                        
                        
                    </div>
                    <ul className="sidenav" id="mobile-demo">
                        <span style = {{ color: 'black', fontSize: 'large' }} ><center>Login with any of the following.</center></span>
                        {this.renderButtons()}
                    </ul>
                </nav>
                
            </div>
            
           
        )
    }
}

const mapStateToProps = function(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);