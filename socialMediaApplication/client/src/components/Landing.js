import React from 'react';
import { connect } from 'react-redux';

import computer from '../images/computer.png';
import * as actions from '../actions';

class Landing extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        return(
            
                <div >
                    <div className = "card" style = {{ marginLeft: '50px', marginRight: '50px', marginTop: '80px', position: 'static'}}>
                        <center>
                            <div className = "card-content" style = {{ position: 'static '}}>
                                    <h1>Hello. Welcome to our website.</h1>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                            </div>
                            {/* { The css for all the card classes has the position property set to absolute. 
                                This results in the content going over the header. Therefore, this property has to be overriden to the default position property of static. } */}
                            <div className = "card-image" style = {{ position: 'static ', padding: '20px', height: '66vh'}}>
                                    <img src = {computer} style = {{ height: '50vh', width: 'auto' }}/>
                            </div>
                        </center>
                    </div>
    
                    
                </div>
        )
    }
}

export default connect(null, actions)(Landing);