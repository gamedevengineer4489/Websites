import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from "./Payments";


class Header extends React.Component {
    renderButtons() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href = '/auth/google' className = "btn">Log In With Google</a>
                    </li>
                )
            default:
                return [
                    <li key = "1"><Payments /></li>,
                    <li key = "4"><a href = '/surveys' className = "btn" style = {{ color: 'black'}}>To Surveys</a></li>,
                    <li key = "3" style = {{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
                    <li key = "2"><a href = '/api/logout' className = "btn" style = {{ color: 'black'}}>Log Out</a></li>
                ];
        }
    }

    render() {
        return(
            <nav>
                <div className = "nav-wrapper">
                    
                    <Link to = '/' className = "left brand-logo" style = {{ marginLeft: '10px', color: 'darkgreen'}}>
                        OC Websites
                    </Link>
                    <ul className = "right">
                        {this.renderButtons()}
                        
                    </ul>
                </div>
            </nav>
            
        )
    }
}

function mapStateToProps({auth}) {
    return { auth }
}


export default connect(mapStateToProps)(Header);