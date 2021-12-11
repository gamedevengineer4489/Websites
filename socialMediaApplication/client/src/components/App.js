import './App.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
  

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.obtainAllUsers();
  }

  render() {
    return (
      <div>
        <Header />
        <div style = {{ minHeight: '100vh'}}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default connect(null, actions)(App);

