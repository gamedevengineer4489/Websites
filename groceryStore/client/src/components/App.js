import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser();
        this.props.getCart();
        this.props.getInventory();
        this.props.getCoffee();
    }

    render() {
        return(
            <div>
                <Header />
                
                <div style = {{ minHeight: '100vh'}}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null, actions)(App);