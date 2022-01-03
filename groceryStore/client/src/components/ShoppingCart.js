import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import Payments from './Payments';


class ShoppingCart extends React.Component {

    componentDidMount() {
        this.props.getCart();
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
                    </div>
                )
            })
        }
        
    }
    render() {
        return(
            <div style = {{ marginTop: '70px', minHeight: '100vh'}}>
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