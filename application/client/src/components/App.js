import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Login from '../loginComponents/Login';
import Register from '../loginComponents/Register';
import Header from './Header';
import Landing from './Landing';
import BlogList from './BlogList';
import Footer from './Footer';
import BlogEdit from './BlogEdit';
import BlogUnique from './BlogUnique';
import Blog from './Blog';
import AllUsers from './AllUsers';
import CommentEdit from './CommentEdit';
import ResetPassword from '../loginComponents/ResetPassword';

function changeTheme() {
  var element = document.body;
  element.classList.toggle("darkMode");
}

class App extends React.Component {
  componentDidMount() {
    
      this.props.fetchUserGoogle();
      this.props.fetchUserSpotify();
      this.props.fetchUserSteam();
      
      if(this.props.auth)
      {
        this.props.postUserLocal(this.props.auth);
    

        this.props.fetchUserLocal(this.props.auth.userID);
      }

  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <div  style = {{ minHeight: '100vh'}}>
            <Header />
            <br />
            {/* <button className = "ui primary button red" onClick = {() => changeTheme()} style = {{ marginLeft: '1650px', color: 'white' }}>Change Background Color</button> */}
            <br />
            <div className = "container">
              <Route path = "/" exact component = {Landing} />
              <Route path = "/changePassword" exact component = {ResetPassword} />
              <Route path = "/edit/:blogID/:commentID/:userID" exact component = {CommentEdit} />
              <Route path = "/list" exact component = {BlogList} />
              <Route path = "/login" exact component = {Login} />
              <Route path = "/register" exact component = {Register} />
              <Route path = "/list/:blogId" exact component = {BlogEdit} />
              <Route path = "/list/:userID/:username" exact component = {BlogUnique} /> {/* Each user has a unique userID */}
              <Route path = "/list/:userID/:username/:blogID" exact component = {Blog} /> {/* Each blog has a unique Id */}
              <Route path = "/users" exact component = {AllUsers} />
            </div>
            
          </div>
          <Footer />
        </BrowserRouter>
        
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);