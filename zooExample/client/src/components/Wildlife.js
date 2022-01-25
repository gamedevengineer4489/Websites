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
                    <div key ={Math.random() * 10 + 1}>
                        <Grid item className = "card"   style={{ marginLeft: '10px', padding: '10px', position: 'static', width: '300px', maxHeight: '500px' }} >
                            <a href = {`/wildlife/${animal.animalName}`}><h5 >{animal.animalName}</h5></a>
                            <img src = {animal.imageURL} style={{ height: '200px', width: '250px' }} alt = {`A ${animal.animalName.toLowerCase()}`}/>
                        </Grid>
                        <br />
                    </div>
                        
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