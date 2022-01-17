import React from 'react';
import zooImage from '../images/zooImage.jpg';

class App extends React.Component {
    render() {
        return(
            <div style = {{ marginTop: '70px', padding: '4px'}}>
                <center>
                    <h1>Hello. Herzlich Wilkommen auf der Website unseres Zoos. </h1>
                    <br />
                    <img src = {zooImage} style = {{ height: '500px', 'width': 'auto'}} />
                </center>
            </div>
        )
    }
}

export default App;