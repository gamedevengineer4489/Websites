import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import * as actions from '../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
        this.props.getCart();
    }

    render() {
        return(
            <div>
                <div style={{ minHeight: '100vh'}}>
                    <Header />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null, actions)(App);