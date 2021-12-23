import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../components/actions';

class Header extends React.Component {

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
                        <li key = "3"><Link className = "sidenav-close" to = "/registration">Sign-Up</Link></li>
                        
                    ]
                );
            default:
                return(
                    [
                        <li key = "4"><a className = "sidenav-close" href = "/auth/logout">Sign-Out</a></li>,
                        <li key = "5"><Link className = "sidenav-close" to = "/shop">Shop</Link></li>,
                        <li key = "6"><Link className = "sidenav-close" to = "/checkout">Cart</Link></li>
                    ]
                )
        }
        
    } 

    render() {
        return(
            <div style={{ position: 'fixed', width: '100%', top: '0'}}>
                <nav>
                    <div className='nav-wrapper blue'>
                        <ul>
                            {this.renderButtons()}
                            <Link className = "brand-logo right" to = "/" style={{ padding: '4px'}}>Dalessi Groceries</Link>
                            
                        </ul>
                    


                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Header);