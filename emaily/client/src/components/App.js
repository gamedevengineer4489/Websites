import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Header from './Header';
import SurveyNew from './emails/SurveyNew';
import Dashboard from './Dashboard';
import Footer from './Footer';



class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    
                    <Header />
                    <div className = "container">
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