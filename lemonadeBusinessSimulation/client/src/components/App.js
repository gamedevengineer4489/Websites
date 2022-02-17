import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';

import Header from './Header';
import * as actions from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
    
    
    var options = {};
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });
  }

  componentDidUpdate() {
    if(this.props.user === null)
    {
        
        this.props.obtainUserData(this.props.auth.GoogleID);
    }

    
  }

  

  render() {
    return(
      <div>
        <Header />
        {this.props.children}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, user: state.user }
}

export default connect(mapStateToProps, actions)(App);
