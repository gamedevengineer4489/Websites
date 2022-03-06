import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <footer style={{ width: '100%', bottom: '0px', position: 'relative', backgroundColor: 'lightgray'}} id = "footer">
                <div className = "row">
                    <div className = "col s9">
                        <h5 style = {{ color: 'black', fontSize: 'xx-large', fontFamily: 'fantasy', fontStyle: 'italic'}}>OC Websites</h5>
                        <p className = "black-text" style = {{ fontSize: 'large'}}>Website developed by Alexander Dalessi</p>
                    </div>
                    <div className = "col">
                        <h5 style = {{ fontFamily: 'monospace', fontSize: 'xxx-large', color: 'black'}}><b>Links</b></h5>
                        <ul>
                            <li><Link to="/" style = {{ fontFamily: 'sans-serif', fontSize: 'x-large', color: 'black'}}>Home</Link></li>
                            <li><Link to="/websites" style = {{ fontFamily: 'serif', fontSize: 'x-large', color: 'black'}}>Websites</Link></li>
                            <li><Link to="/message" style = {{ fontFamily: 'serif', fontSize: 'x-large', color: 'black'}}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div style={{ color: 'black'}}>
                    © 2021 Copyright OC Websites
                </div>
            </footer>
        )
    }
}

export default Footer;
