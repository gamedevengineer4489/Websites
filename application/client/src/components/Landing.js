import React from "react";
import Image1 from '../images/programmer.png';
import Image2 from '../images/web.png';


class Landing extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome to our website.</h1>
                <img src = {Image2} style = {{width: '700px', height: '700px', marginLeft: '200px'}} alt = "landing" title = "headerImage"/>
            </div>
        )
    }
}

export default Landing;

