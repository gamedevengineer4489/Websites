import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import Payments from './Payments';


class ShoppingCart extends React.Component {

    componentDidMount() {
        
        window.scrollTo(0,0);
    }

    
    
    renderCart() {
       
        if(this.props.shoppingCart.items.items && this.props.shoppingCart.items.items.length)
        {

            return this.props.shoppingCart.items.items.map(item => {
                return(
                    <div className = "card" style={{ marginLeft: '20px', padding: '10px', position: 'static', width: '300px' }} key = {Math.random() * 10}>
                       <h5><center>{item.productName}</center></h5>
                       <center><img src = {item.imageURL} style={{ height: '200px', width: '250px' }} /></center>
                       <h5>Price: ${item.productPrice}</h5>
                       <a href = "/checkout" onClick = {() => this.props.removeFromCart(item)} className='btn' style={{ position: 'static'}}>Remove From Cart</a>
                    </div>
                )
            })
        }
        
    }
    render() {
        return(
            <div style = {{ marginTop: '70px', minHeight: '100vh', position: 'static'}}>
                {this.renderCart()}
                
                {this.props.shoppingCart.items.items && this.props.shoppingCart.items.items.length ? <div className='left' style={{ marginLeft: '20px'}}>
                    <Payments />
                </div> : ''}
               
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { store: state.store, shoppingCart: state.shoppingCart }
}

export default connect(mapStateToProps, actions)(ShoppingCart);