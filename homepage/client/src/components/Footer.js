import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <footer className = "page-footer" style={{ width: '100%', bottom: '0px', position: 'relative'}} id = "footer">
                <div className = "row">
                    <div className = "col s9">
                        <h5 style = {{ color: 'darkgreen', fontSize: 'xx-large', fontFamily: 'fantasy', fontStyle: 'italic'}}>OC Websites</h5>
                        <p className = "black-text" style = {{ fontSize: 'large'}}>Website developed by Alexander Dalessi</p>
                    </div>
                    <div className = "col">
                        <h5 className = "green-text" style = {{ fontFamily: 'monospace', fontSize: 'xxx-large', color: 'midnightblue'}}><b>Links</b></h5>
                        <ul>
                            <li><Link to="/" style = {{ fontFamily: 'sans-serif', fontSize: 'x-large', color: 'midnightblue'}}>Home</Link></li>
                            <li><Link to="/websites" style = {{ fontFamily: 'serif', fontSize: 'x-large', color: 'chartreuse'}}>Websites</Link></li>
                            <li><Link to="/message" style = {{ fontFamily: 'serif', fontSize: 'x-large', color: 'AppWorkspace'}}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className = "footer-copyright">
                    © 2021 Copyright OC Websites
                </div>
            </footer>
        )
    }
}

export default Footer;
