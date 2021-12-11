import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import M from 'materialize-css';
import { connect } from 'react-redux';
import M from 'materialize-css';
import * as actions from '../actions';



class Header extends Component {
    componentDidMount() {
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelector('.sidenav');
        //     var instances = window.M.Sidenav.init(elems);
        // });

        
    }
    

    renderButtons = () => {
        console.log(this.props.auth);
        switch(this.props.auth) {
            case null:
                return(
                    null
                );
            case false:
                return(
                    [
                        <li key = "2"><Link className = "sidenav-close" to = "/signin">Sign-In</Link></li>,
                        <li key = "3"><Link className = "sidenav-close" to = "/signup">Sign-Up</Link></li>
                        
                    ]
                );
            default:
                return(
                    [
                        <li key = "4"><a className = "sidenav-close" href = "/auth/logout">Sign-Out</a></li>,
                        <li key = "5"><a className = "sidenav-close" href = {`/profile/${this.props.auth.username}`}>Your Profile</a></li>,
                        <li key = "6"><a className = "sidenav-close" href = "/users">All Users</a></li>
                    ]
                )
        }
        
    } 

    render() {
        return(
            <div style = {{  position: 'fixed', width: '100%', top: '0' }}>
                <nav>
                    <div className = "nav-wrapper blue">
                        
                        {/* <a datatarget="mobile-demo" className = "sidenav-trigger" style = {{cursor: 'pointer'}}><i className = "material-icons">menu</i></a> */}
                        
                        
                        {/* <a data-target="mobile-demo" className="sidenav-trigger" style = {{ cursor: 'pointer'}}><i className="material-icons" style = {{ textDecoration: 'none'}}>menu</i></a> */}
                        <ul >
                            
                        {this.renderButtons()}
                        <Link className = "brand-logo right" to = "/" style = {{ textDecoration: 'none', color: 'orangered', marginLeft: '125px' }}>OC Websites</Link>
                        </ul>
                    </div>
                    
                </nav>
                    {/* <ul className="sidenav" id="mobile-demo">
                            <span style = {{ color: 'black', fontSize: 'large' }} >{this.props.auth ? "Main Menu" : "Login with any of the following."}</span>
                            {this.renderButtons()}
                    </ul> */}
                
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Header);