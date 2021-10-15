import React from "react";
import Image1 from '../images/programmer.png';
import Image2 from '../images/web.png';
import Header from './Header';

class Landing extends React.Component {
    render() {
        return(
            <div>
                <h1>Herzlich Wilkommen auf unserer Website. Welcome to our website.</h1>
                <img src = {Image2} style = {{width: '700px', height: '700px', marginLeft: '300px'}}/>
            </div>
        )
    }
}

export default Landing;

