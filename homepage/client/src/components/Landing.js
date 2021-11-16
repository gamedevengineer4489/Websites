import React from 'react';
import webImage from '../images/web.png';
import programmerImage from '../images/programmer.jpg';

class Landing extends React.Component {
    render() {
        return(
            <div>
                <center>
                    <marquee><h1>Hello. Welcome to our website. Nice to meet you.</h1></marquee>
                    <img style = {{ width: '700px', height: '714px', marginTop: '0px'}} src = {programmerImage} alt = "homepage" />
                    <br />
                    </center>
                    <figcaption style = {{ marginLeft: '600px'}}><a style = {{color: 'black', fontStyle: 'italic'}} href="https://www.vecteezy.com/free-vector/coding">Coding Vectors by Vecteezy</a></figcaption>
                
            </div>
        )
    }
}

export default Landing;