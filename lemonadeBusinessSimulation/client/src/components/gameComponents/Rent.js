import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Rent extends React.Component {

    rentMap = () => {
        return this.props.rent.map((location) => {
            return(
                <div className='col s7'>
                    <h3>{location.Name}</h3>
                    <img src={`${location.image}`} style = {{ width: '50vw', height: 'auto'}} />
                    <br />
                    {location.Description}
                    <h5>Rent: ${location.Rent}</h5>
                </div>
                
            )
        })
    }

    render() {
        return(
            <div style={{ marginTop: '70px', marginLeft: '10px'}} className = 'row'>
                {this.props.rent && this.props.rent.length ? this.rentMap() : ''}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { rent: state.rent };
}

export default connect(mapStateToProps, actions)(Rent);