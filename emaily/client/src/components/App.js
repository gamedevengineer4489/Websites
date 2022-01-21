import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css';

import Landing from './Landing';
import Header from './Header';
import SurveyNew from './emails/SurveyNew';
import Dashboard from './Dashboard';
import Footer from './Footer';



class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
        var options = {};
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
        });
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    
                    <Header />
                    <div className = "container" style = {{ minHeight: '100vh'}}>
                        <Route exact path = "/" component = {Landing} />
                        <Route exact path = "/surveys" component = {Dashboard} />
                        <Route path = "/surveys/new" component = {SurveyNew} />
                    </div>
                    <Footer />

                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);