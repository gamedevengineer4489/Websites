import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions/index.js';


class Header extends React.Component {
    
    renderButtons = () => {
        switch(this.props.auth) {
            case null:
                return null;
            case false:
                return(
                    <div>
                        <a className='button is-light' href='/auth/google'>Sign-In With Google</a>
                    </div>
                )
            default:
                return(
                    <div>
                        
                        <a className='button is-danger' href='/api/logout'>Sign-Out</a>
                    </div>
                )
        }
        
    } 

    render() {
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/" onClick={() => window.open('https://bulma.io')}>
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    {this.props.auth && this.props.auth.googleid ? <a className='navbar-item' href='/decks'>Decks</a> : ''}
                    </div>
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        {this.renderButtons()}
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Header);