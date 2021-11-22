import React from 'react';
import programmerImage from '../images/programmer.jpg';

class Landing extends React.Component {
    render() {
        return(
            <div>
                
                    <center>
                    
                        <marquee><h1>Hello. Welcome to our website. Nice to meet you.</h1></marquee>
                        <img style = {{ maxWidth: '80%', maxHeight: '100%', marginTop: '0px', width: 'auto', height: 'auto'}} src = {programmerImage} alt = "homepage" />
                        <br />
                    </center>
                    <figcaption style = {{ marginLeft: '200px'}}><a style = {{color: 'black', fontStyle: 'italic'}} href="https://www.vecteezy.com/free-vector/coding">Coding Vectors by Vecteezy</a></figcaption>
                    <br />
                    

                   
                    
            </div>
        )
    }
}

export default Landing;