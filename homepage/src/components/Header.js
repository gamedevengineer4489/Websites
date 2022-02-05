import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), open: false }
    }

    componentDidMount() {
        this.setState({
            open: false
        })
    }

    
    render() {
        

        return(
            <div >
                
                    <nav style = {{ position: 'fixed', width: '100%', top: '0px'}}>
                        <div className = "nav-wrapper blue" >
                            <a data-target = "mobile-demo" className='sidenav-trigger' style={{ cursor: 'pointer'}} ><i className='material-icons'>menu</i></a>
                            <ul className = "row left hide-on-med-and-down">
                                <li key ={Math.random() * 10 + 1}><Link to = "/websites" className = "col" > <span style = {{ fontSize: 'large', color: 'black'}}>Websites</span></Link></li>
                                <li key ={Math.random() * 10 + 1}><Link to = "/message"><span style = {{ fontSize: 'large', color: 'black'}}>Message Us</span></Link></li>
                            </ul>
                            <div className = "brand-logo right" ><Link to = "/" style = {{ color: 'darkgreen', fontWeight: 'bolder', fontStyle: 'italic'}}>OC Websites</Link></div>
                        </div>
                    </nav>

                
                 <ul className = "sidenav" id = "mobile-demo" >
                            <li key ={Math.random() * 10 + 1}><a href = "/websites" className = "col" > <span style = {{ fontSize: 'large', color: 'black'}}>Websites</span></a></li>
                            <li key ={Math.random() * 10 + 1}><a href = "/message" ><span style = {{ fontSize: 'large', color: 'black'}}>Message Us</span></a></li>
                </ul>

               
            </div>
        )
    }
}

export default Header;