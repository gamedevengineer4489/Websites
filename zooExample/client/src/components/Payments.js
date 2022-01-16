import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component {
    

    render() {
        return(
            
            <StripeCheckout
                name = "Dalessi Zoo"
                description = "Thanks for supporting Dalessi Zoo. Please visit again."
                amount = {this.props.cart.total * 100}
                token = {token => this.props.handleToken(token, this.props.cart.total * 100, this.props.cart.items.items)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                billingAddress
                locale='auto'
                zipCode
            >
                <button className = "waves-effect wave-light btn" >
                    Checkout
                </button>
            </StripeCheckout>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {cart: state.cart}
}

export default connect(mapStateToProps, actions)(Payments);