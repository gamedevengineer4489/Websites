import React from 'react';
import { connect } from 'react-redux';
import '@material-ui/core';
import {
    Grid
} from '@material-ui/core/'


class Wildlife extends React.Component {

    
    renderAnimals() {
        return this.props.animals.map(animal => {
                return(
                        <Grid item className = "card" style={{ marginLeft: '10px', padding: '10px', position: 'static', width: '300px' }} key = {Math.random() * 10}>
                            <h5 >{animal.animalName}</h5>
                            <h5 >Origin: {animal.countryOrigin}</h5>
                            <br />
                            <img src = {animal.imageURL} style={{ height: '200px', width: '250px' }} />
                            <h5>{animal.bio}</h5>
                        </Grid>
                )
                
        })
    }

    render() {
        return(
            <Grid style={{ marginTop: '70px'}} container>
                    {this.renderAnimals()}
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { animals: state.animals }
}

export default connect(mapStateToProps, null)(Wildlife);