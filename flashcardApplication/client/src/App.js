import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import * as actions from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.getUser();
    
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
    
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, actions)(App);
