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
                
                    <li key ={Math.random() * 10 + 1}><a href = "/auth/google">Sign-in with Google</a></li>,
            ]
            
        } else {
            return[
                
                    <li key ={Math.random() * 10 + 1}><a href = "/api/logout">Sign-Out</a></li>,
                    <li key ={Math.random() * 10 + 1}><a href = "/lemonade">Lemonade Game</a></li>,
                    <li key ={Math.random() * 10 + 1}><a href = "/lemonade/recipe">Recipe</a></li>,
                    <li key ={Math.random() * 10 + 1}><a href = "/lemonade/rent">Rent</a></li>,
                    <li key ={Math.random() * 10 + 1}><a href = "/lemonade/store">Store</a></li>,
                    <li key ={Math.random() * 10 + 1}><a href = "/lemonade/upgrades">Upgrades</a></li>
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
                            <Link className='right brand-logo' style={{ color: 'orangered', marginLeft: '170px' }} to = '/'>Dalessi Lemonade</Link>
                        </div>
                    </nav>
                
                <ul className ='sidenav' id="mobile-demo">
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