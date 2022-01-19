import React from 'react';
import { useEffect, useState } from 'react';
import zooImage from '../images/zooImage.jpg';
import image1 from '../images/frontPageImages/image1.jpg';
import image2 from '../images/frontPageImages/image2.jpg';
import image3 from '../images/frontPageImages/image3.jpg';

function Landing() {
    const images = [
        zooImage,
        image1,
        image2,
        image3
    ];

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((i) => (i + 1) < images.length ? ((i + 1) % images.length) : 0);
    };

    const previous = () => {
        setIndex((i) => (i - 1) >= 0 ? ((i - 1) % images.length) : images.length - 1);
    };

    return(
        <div style = {{ marginTop: '70px', padding: '4px'}}>
            <center>
                <h1>Hello. Herzlich Wilkommen auf der Website unseres Zoos. </h1>
                <br />
                <span style = {{ paddingRight: '10px',  bottom: '250px', position: 'relative'}}>
                    <button className = "waves-effect wave-light btn"  onClick={() => previous()}>previous</button>
                </span>
                <img src = {images[index]} style = {{ height: '500px', 'width': 'auto'}} />
                <span style = {{ paddingLeft: '10px',  bottom: '250px', position: 'relative'}}>
                    <button className = "waves-effect wave-light btn" onClick={() => next()}>next</button>
                </span>
            </center>
        </div>
    );
    
}

export default Landing;

