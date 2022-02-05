import React from 'react';
import programmerImage from '../images/programmer.jpg';

class Landing extends React.Component {
    render() {
        return(
            <div style = {{ marginTop: '20px'}}>
                    <center>
                        <h1>Hello. Welcome to our website. Nice to meet you.</h1>
                        <img style = {{ maxWidth: '80%', maxHeight: '100%', width: 'auto', height: 'auto'}} src = {programmerImage} alt = "homepage" />
                        <br />
                        <figcaption><a style = {{ fontStyle: 'italic'}} href="https://www.vecteezy.com/free-vector/coding">Coding Vectors by Vecteezy</a></figcaption>
                    </center>
                    
                    <br />
                      
            </div>
        )
    }
}

export default Landing;