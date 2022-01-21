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
                    <li key = "4"><a href = '/surveys'  style = {{ color: 'black'}}>To Surveys</a></li>,
                    <li key = "3" style = {{ margin: '0 10px' }}><b>Credits:</b> {this.props.auth.credits}</li>,
                    <li key = "2"><a href = '/api/logout' style = {{ color: 'black'}}>Log Out</a></li>
                ];
        }
    }

    render() {
        return(
            <div>
                <nav>
                    <div className = "nav-wrapper">
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul className = "left hide-on-med-and-down" style={{paddingLeft: '5px'}}>
                            {this.renderButtons()}
                        </ul>
                        <Link to = '/' className = "right brand-logo" style = {{ marginLeft: '10px', color: 'darkgreen'}}>
                            OC Websites
                        </Link>
                        
                    </div>
                
                </nav>
                <ul class="sidenav" id="mobile-demo">
                    <center>
                        {this.renderButtons()}
                    </center>
                    
                </ul>
            </div>
            
            
        )
    }
}

function mapStateToProps({auth}) {
    return { auth }
}


export default connect(mapStateToProps)(Header);