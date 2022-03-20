import React from "react";
import Image2 from '../images/web.png';


class Landing extends React.Component {
    render() {
        return(
            <div >
                <center>
                    <h1>Welcome to our website.</h1>
                    <img src = {Image2} style = {{ width: '50vw', height: 'auto'}} alt = "landing" title = "headerImage"/>
                </center>
                
            </div>
        )
    }
}

export default Landing;

