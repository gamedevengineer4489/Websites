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
                    <div style={{ paddingRight: '10px'}}>
                        <Grid className='card' style={{ position: 'static', width: '350px', marginLeft: '5px', padding: '10px'  }} key = {Math.random() * 10}>
                            <h5>{game.productName}</h5>
                            <img src = {game.imageURL} style = {{ width: '325px', maxHeight: '350px'}}/>
                            <p><b>Price: ${game.productPrice}</b></p>
                            <button onClick = {() => this.props.addItemToCart(game)} className = "waves-effect wave-light btn">Add To Cart</button>
                        </Grid>
                        <br />
                    </div>
                    
                )
            })
        }
        
    }

    render() {
        return(
            <Grid style = {{ marginTop: '70px', marginLeft: '10px', position: 'static'}} container>
                {this.renderInventory()}
               
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { games: state.games }
}

export default connect(mapStateToProps, actions)(Games);