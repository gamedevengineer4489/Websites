import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '@material-ui/core';
import {
    Grid,
} from '@material-ui/core/'



class Clothes extends React.Component {
    componentDidMount() {
        this.props.obtainClothesInventory();
    }

    renderInventory() {
        if(this.props.clothes && this.props.clothes.length > 0)
        {
            return this.props.clothes.map(clothe => {
                return(
                    <Grid item className = "card" style={{ padding: '10px', position: 'static', width: '450px', marginLeft: '10px'  }} key = {Math.random() * 10}>
                         <h5>{clothe.productName}</h5>
                        <img src = {clothe.imageURL} style = {{ maxWidth: '400px', minHeight: '350px'}}/>
                        <p><b>Price: ${clothe.productPrice}</b></p>
                        <button onClick = {() => this.props.addItemToCart(clothe)} className = "waves-effect wave-light btn">Add To Cart</button>
                        
                   </Grid>
                    
                )
            })
        }
        
    }

    render() {
        return(
            <Grid style={{ marginTop: '70px', padding: '10px', marginLeft: '10px'}} container>
                {this.renderInventory()}
               
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { clothes: state.clothes }
}

export default connect(mapStateToProps, actions)(Clothes);