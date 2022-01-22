import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';

import Header from './Header';
import Footer from './Footer';
import * as actions from '../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
        this.props.getCart();
        var options = {};
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
        });
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