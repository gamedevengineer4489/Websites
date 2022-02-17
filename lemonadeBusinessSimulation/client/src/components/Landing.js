import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class Landing extends React.Component {
    
    
    
    render() {
        return(
            <div style = {{ marginTop: '70px', padding: '4px', minHeight: '1200px', position: 'static' }}>
                <center>
                    <h1>Hello. Welcome to our website. Log-in so the lemonade adventure can start. Logging out is tantamount to quitting the game. If a day is not completed and the game is quit, that progress will not be saved.</h1>
                    <br />
                    <img src='https://cdn.pixabay.com/photo/2018/07/29/21/27/lemonade-3571083_960_720.jpg'  style={{ width: '70vw', height: 'auto'}}/>
                </center>
            </div>
        );
    }
    
    
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Landing);

