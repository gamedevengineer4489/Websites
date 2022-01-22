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
            return [
                
                    <li alt = {Math.random()}><a href = "/auth/google">Sign-in with Google</a></li>,
                    <li alt = {Math.random()}><a href = "/wildlife">Animals</a></li>,
                    <li alt = {Math.random()}><a href = "/shop">Shop</a></li>,
                    <li alt = {Math.random()}><a href = "/checkout">Checkout</a></li>,
            ]
            
        } else {
            return[
                
                    <li alt = {Math.random()}><a href = "/api/logout">Sign-Out</a></li>,
                    <li alt = {Math.random()}><a href = "/wildlife">Animals</a></li>,
                    <li alt = {Math.random()}><a href = "/shop">Shop</a></li>,
                    <li alt = {Math.random()}><a href = "/checkout">Checkout</a></li>,
                
            ]
        }
    }

    render() {
        return(
            <div >
                
                    <nav style={{ position: 'fixed', top: '0px', width: '100%'}}>
                        <div className='nav-wrapper blue' >
                            <a href="#" data-target="mobile-demo" className = "sidenav-trigger"><i className = "material-icons">menu</i></a>
                            <ul className='left hide-on-med-and-down'>
                                {this.renderButtons()}
                            </ul>
                            <Link className='right brand-logo' style={{ color: 'orangered', marginLeft: '170px' }} to = '/'>Dalessi Zoo</Link>
                        </div>
                    </nav>
                
                <ul class='sidenav' id="mobile-demo">
                    {this.renderButtons()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Header);