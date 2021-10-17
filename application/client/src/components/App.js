import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Login from '../loginComponents/Login';
import Register from '../loginComponents/Register';
import Header from './Header';
import Landing from './Landing';
import BlogList from './BlogList';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUserGoogle();
    this.props.fetchUserSpotify();
    // this.props.postUserLocal(this.props.auth);
    //this.props.postUserLocal(this.props.auth);
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
            <Route path = "/login" exact component = {Login} />
            <Route path = "/register" exact component = {Register} />
          </div>
        </BrowserRouter>
        
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);