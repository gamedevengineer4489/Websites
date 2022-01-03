import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

class Shop extends React.Component {
    componentDidMount() {
        this.props.getInventory();
        window.scrollTo(0,0);
    }
    renderStore() {
        return this.props.store.map(item => {
            return(
                <div className = "card" style={{ marginLeft: '20px', padding: '10px', position: 'static', width: '300px' }} key = {Math.random() * 10}>
                   <h5><center>{item.productName}</center></h5>
                   <img src = {item.imageURL} style={{ height: '200px', width: '250px' }}/>
                   <h5>Price: ${item.productPrice}</h5>
                   <div className='right'>
                      {item.quantity > 0 ? <button className='waves-effect wave-light btn' onClick={() => this.props.addToCartDraft(item)}>Add To Cart</button> : 'Sold Out. Come Back Later'}
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