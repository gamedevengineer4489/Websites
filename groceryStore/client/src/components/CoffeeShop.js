import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

class Shop extends React.Component {
    componentDidMount() {
        this.props.getCoffee();
        window.scrollTo(0,0);
    }
    renderStore() {
        if(this.props.coffee && this.props.coffee.length)
        {
            return this.props.coffee.map(item => {
                return(
                    <div className = "card" style={{ marginLeft: '20px', padding: '10px', position: 'static', width: '300px'}} key = {Math.random() * 10}>
                    <h5><center>{item.productName}</center></h5>
                    <center><img src = {item.imageURL} style={{ height: '200px', width: '250px'}}/></center>
                    <h5>Price: ${item.productPrice}</h5>
                    <div className='right'>
                        {item.quantity > 0 ? <a className='btn' onClick={() => this.props.addToCartDraft(item)}>Add To Cart</a> : 'Sold Out. Come Back Later'}
                    </div>
                    </div>
                )
            })
        }
    }
    render() {
        return(
            <div style = {{ marginTop: '70px'}}>
                {this.props.coffee && this.props.coffee.length ? this.renderStore() : ''}
            </div>
        )
       
    }
}

const mapStateToProps = (state) => {
    return { coffee: state.coffee }
}

export default connect(mapStateToProps, actions)(Shop);