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
                    <div style={{ paddingRight: '10px', position: 'static'}}>
                        <Grid item className = "card" style={{ position: 'static', width: '350px', marginLeft: '5px', padding: '10px'  }} key = {Math.random() * 10}>
                            <h5>{clothe.productName}</h5>
                            <img src = {clothe.imageURL} style = {{ width: '325px', maxHeight: '350px'}}/>
                            <p><b>Price: ${clothe.productPrice}</b></p>
                            <button onClick = {() => this.props.addItemToCart(clothe)} className = "waves-effect wave-light btn">Add To Cart</button>
                        </Grid>
                        <br />
                    </div>
                    
                    
                )
            })
        }
        
    }

    render() {
        return(
            <Grid style={{ marginTop: '70px', position: 'static'}} container>
                {this.renderInventory()}
               
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { clothes: state.clothes }
}

export default connect(mapStateToProps, actions)(Clothes);