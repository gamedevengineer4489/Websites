import React, { Component } from 'react';
import storeImage from '../inventoryImages/store.png';

class Landing extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div style= {{ marginTop: '70px', marginLeft: '5px'}}>
                <h2 style={{ padding: '20px'}}>Welcome to our grocery store. <br />Sign-in to add items to the shopping cart or sign-up for an account.</h2>
                <br />
                <img src = {storeImage} style={{ marginLeft: '550px', height: '600px', objectFit: 'contain' }}/>
            </div>
        )
    }
}

export default Landing;