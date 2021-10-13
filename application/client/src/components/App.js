import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import BlogList from './BlogList';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUserGoogle();
    this.props.fetchUserSpotify();
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <div className = "container">
            <Header />
            <br />
            <Route path = "/" exact component = {Landing} />
            <Route path = "/list" exact component = {BlogList} />
          </div>
        </BrowserRouter>
        
      </div>
    )
  }
}

export default connect(null, actions)(App);