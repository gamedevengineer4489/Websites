import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date()}
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({date: new Date()}), 1000);
    }



    
    
    
    
       
    

    render() {
        return(
            <div>
                <nav >
                    <div className = "nav-wrapper blue" >
                        <div className = "row">
                            <Link to = "/websites" className = "col" > <span style = {{ fontSize: 'large', color: 'black'}}>Websites</span></Link>
                            <Link to = "/message"><span style = {{ fontSize: 'large', color: 'black'}}>Message Us</span></Link>
                            <span style = {{ marginLeft: '655px', color: 'black', fontSize: 'large', fontWeight: 'bolder', borderStyle: 'solid', padding: '5px', borderColor: 'gold' }}>{this.state.date.toLocaleTimeString()}</span>
                            <div className = "brand-logo right" ><Link to = "/" style = {{ color: 'darkgreen', fontWeight: 'bolder', fontStyle: 'italic'}}>OC Websites</Link></div>
                        </div>
                        
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;