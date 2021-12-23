import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from './actions';

class Payments extends React.Component {
    render() {
        return(
            <StripeCheckout
                name = "Dalessi Groceries"
                description = "Thanks for shopping at Dalessi Groceries. Please come again."
                amount = {this.props.shoppingCart.total * 100}
                token = {token => this.props.handleToken(token, this.props.shoppingCart.total * 100)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                billingAddress
                locale='auto'
                zipCode
            >
                {console.log(process.env.REACT_APP_STRIPE_KEY)}
                <button className = "waves-effect wave-light btn" >
                    Checkout
                </button>
            </StripeCheckout>
        )
    }
}

const mapStateToProps = (state) => {
    return {shoppingCart: state.shoppingCart}
}

export default connect(mapStateToProps, actions)(Payments);