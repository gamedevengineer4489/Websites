import React from 'react';
import { useEffect, useState } from 'react';
import zooImage from '../mediaFiles/frontPageImages/zooImage.jpg';
import image1 from '../mediaFiles/frontPageImages/image1.jpg';
import image2 from '../mediaFiles/frontPageImages/image2.jpg';
import image3 from '../mediaFiles/frontPageImages/image3.jpg';

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
        <div style = {{ marginTop: '40px', padding: '4px', minHeight: '1200px', position: 'static' }}>
            <center>
                <h1>Hello. Herzlich Wilkommen auf der Website unseres Zoos. </h1>
                <br />
                
                <img src = {images[index]} style = {{ height: '50vh', maxWidth: '50vw'}} />
                <br />
                <span style = {{ paddingRight: '10vh' }}>
                    <button style = {{ position: 'static'}} className = "waves-effect wave-light btn" onClick={() => previous()}><i style = {{ position: 'static'}} className='material-icons'>chevron_left</i></button>
                </span>
                
                
                    <button style = {{ position: 'static'}} className = "waves-effect wave-light btn" onClick={() => next()}><i style = {{ position: 'static'}} className='material-icons'>chevron_right</i></button>
                
            </center>
        </div>
    );
    
}

export default Landing;

