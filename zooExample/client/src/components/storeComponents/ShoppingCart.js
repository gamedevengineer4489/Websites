import React from 'react';
import { connect } from 'react-redux';
import '@material-ui/core';
import {
    Grid
} from '@material-ui/core/'
import * as actions from '../../actions';
import Payments from '../Payments';

class ShoppingCart extends React.Component {
    componentDidMount() {
        this.props.getCart();
    }
    
    renderItems() {
        if(this.props.cart.items.items && this.props.cart.items.items.length)
        {
            return this.props.cart.items.items.map(item => {
                return(
                    <div style={{ paddingRight: '10px'}}>
                        <Grid className = "card" style={{ position: 'static', width: '350px', marginLeft: '5px', padding: '10px'  }} key = {Math.random() * 10}>
                            <h5>{item.productName}</h5>
                            <img src = {item.imageURL} style = {{ maxWidth: '325px', height: '350px'}} />
                            <p><b>Price: ${item.productPrice}</b></p>
                        </Grid>
                    </div>
                    
                )
            })
        }
            
        
    }

    render() {
        return(
            <div>
                <Grid style={{ marginTop: '70px', padding: '10px', marginRight: '10px' }} container>
                    {this.renderItems()}
                </Grid>
                <div style={{ marginLeft: '20px', marginRight: '10px'}} >{this.props.cart.total > 0 ? <Payments /> : ''}</div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { cart: state.cart }
}

export default connect(mapStateToProps, actions)(ShoppingCart);