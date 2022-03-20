import './App.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css';

class App extends React.Component {
  

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.obtainAllUsers();
    var options = {};
    document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ minHeight: '810px'}} >
          {this.props.children}
        </div>
        <br />
        <Footer />
      </div>
    );
  }
  
}

export default connect(null, actions)(App);

