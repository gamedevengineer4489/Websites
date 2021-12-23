import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import Payments from './Payments';

class ShoppingCart extends React.Component {
    
    renderCart() {
        return this.props.shoppingCart.items.map(item => {
            return(
                <div className = "card" style={{ padding: '10px', marginLeft: '600px', marginRight: '700px', position: 'static'}} key = {Math.random() * 10}>
                   {console.log(item.imageURL)}
                   <h3>{item.productName}</h3>
                   <center><img src = {item.imageURL} style={{ height: '400px', width: '450px'}}/></center>
                   <h5>Price: ${item.productPrice}</h5>
                  
                </div>
            )
        })
    }
    render() {
        return(
            <div style = {{ marginTop: '70px', minHeight: '100vh'}}>
                {this.props.shoppingCart && this.props.shoppingCart.items.length ? this.renderCart() : ''}
                {this.props.shoppingCart && this.props.shoppingCart.items.length ? 
                <div className='right' style={{ marginRight: '20px'}}>
                       <Payments />
                </div>
                : ''}
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { store: state.store, shoppingCart: state.shoppingCart }
}

export default connect(mapStateToProps, actions)(ShoppingCart);