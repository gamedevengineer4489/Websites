import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <footer className='page-footer'>
                <div className='row'>
                    <div className='column' style = {{ marginLeft: '10px' }}>
                        <Link  className = 'footerColumn' to = "/" onClick={() => window.open("https://ancient-reaches-75615.herokuapp.com/")} style={{ fontFamily: 'sans-serif', fontSize: 'x-large'}}>Dalessi Groceries</Link>
                        <p>Website created by Alexander Dalessi</p>
                    </div>
                </div>
                <div className = "footer-copyright" style = {{ marginLeft: '10px' }}>
                    © 2021 Copyright OC Websites
                </div>
            </footer>
        )
    }
}

export default Footer;