import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '@material-ui/core';
import {
    Grid
} from '@material-ui/core/'


class Games extends React.Component {
    componentDidMount() {
        this.props.obtainGamesInventory();
    }

    renderInventory() {
        if(this.props.games && this.props.games.length > 0)
        {
            return this.props.games.map(game => {
                return(
                    <Grid className='card' style = {{ marginTop: '70px', padding: '10px', maxWidth: '450px', position: 'static', marginLeft: '10px' }} key = {Math.random() * 10}>
                        <h5>{game.productName}</h5>
                        <img src = {game.imageURL} style = {{ maxWidth: '400px'}}/>
                        <p><b>Price: ${game.productPrice}</b></p>
                        <button onClick = {() => this.props.addItemToCart(game)} className = "waves-effect wave-light btn">Add To Cart</button>
                    </Grid>
                )
            })
        }
        
    }

    render() {
        return(
            <Grid style = {{ marginLeft: '10px'}} container>
                {this.renderInventory()}
               
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { games: state.games }
}

export default connect(mapStateToProps, actions)(Games);