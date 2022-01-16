import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '@material-ui/core';
import {
    Grid
} from '@material-ui/core/'


class Films extends React.Component {
    componentDidMount() {
        this.props.obtainFilmInventory();
    }

    renderInventory() {
        if(this.props.films && this.props.films.length > 0)
        {
            return this.props.films.map(film => {
                return(
                    <Grid item className = "card" style={{ padding: '10px', position: 'static', width: '450px', marginLeft: '10px'  }} key = {Math.random() * 10}>
                        <h5>{film.productName}</h5>
                        <img src = {film.imageURL} style = {{ maxWidth: '400px'}}/>
                        <p><b>Price: ${film.productPrice}</b></p>
                        <button onClick = {() => this.props.addItemToCart(film)} className = "waves-effect wave-light btn">Add To Cart</button>
                    </Grid>
                )
            })
        }
        
    }

    render() {
        return(
            <Grid style = {{ marginTop: '70px', marginLeft: '10px'}} container>
                {this.renderInventory()}
               
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { films: state.films }
}

export default connect(mapStateToProps, actions)(Films);