import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class Header extends React.Component {
    renderButtons() {
        if(this.props.auth === null)
        {
            return null;
        } else if(this.props.auth === false)
        {
            return(
                <ul>
                    <li alt = {Math.random()}><a href = "/auth/google">Sign-in with Google</a></li>
                    <li alt = {Math.random()}><a href = "/wildlife">Animals</a></li>
                    <li alt = {Math.random()}><a href = "/shop">Shop</a></li>
                    <li alt = {Math.random()}><a href = "/checkout">Checkout</a></li>
                </ul>
            )
        } else {
            return(
                <ul>
                    <li alt = {Math.random()}><a href = "/api/logout">Sign-Out</a></li>
                    <li alt = {Math.random()}><a href = "/wildlife">Animals</a></li>
                    <li alt = {Math.random()}><a href = "/shop">Shop</a></li>
                    <li alt = {Math.random()}><a href = "/checkout">Checkout</a></li>
                </ul>
            )
        }
    }

    render() {
        return(
            <div style={{ position: 'fixed', width: '100%', top: '0'}}>
                <nav>
                    <div className='nav-wrapper blue' >
                        {this.renderButtons()}
                        <Link className='brand-logo right' style={{ color: 'orangered' }} to = '/'>Dalessi Zoo</Link>
                    </div>
                </nav>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Header);