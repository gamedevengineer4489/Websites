import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

class Shop extends React.Component {
    componentDidMount() {
        this.props.getInventory();
    }
    renderStore() {
        return this.props.store.map(item => {
            return(
                <div className = "card" style={{ padding: '10px', marginLeft: '500px', marginRight: '800px', position: 'static'}} key = {Math.random() * 10}>
                   {console.log(item.imageURL)}
                   <h3>{item.productName}</h3>
                   <center><img src = {item.imageURL} style={{ height: '400px', width: '450px'}}/></center>
                   <h5>Price: ${item.productPrice}</h5>
                   <div className='right'>
                       <button className='waves-effect wave-light btn' onClick={() => this.props.addToShoppingCart(item)}>Add To Cart</button>
                   </div>
                </div>
            )
        })
    }
    render() {
        return(
            <div style = {{ marginTop: '70px'}}>
                {this.props.store && this.props.store.length ? this.renderStore() : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { store: state.store }
}

export default connect(mapStateToProps, actions)(Shop);