import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import M from 'materialize-css';

import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Websites from './components/Websites';
import Contact from './components/Contact';

function changeTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
}



class App extends React.Component {
  componentDidMount() {
    var options = {};
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelector('.sidenav');
            var instances = M.Sidenav.init(elems, options);
    });

    
  }

  render() {
    return(
      
        <div>
          <BrowserRouter>
              <Header />
              <br />
              <br />
              <br />
              <br />
              <button className = "btn" onClick = {() => changeTheme()} style = {{ marginTop: '5px', marginLeft: '3vh', color: 'white' }}>Change Background Color</button>              
              <br />
              <br />
              <Routes>
                  <Route path = "/" exact element = {<Landing />} />
                  <Route path = "/websites" exact element = {<Websites />} />
                  <Route path = "/message" exact element = {<Contact />} />
              </Routes>
              <Footer />
          </BrowserRouter>
        </div>
      
      
    )
  }
}

export default App;
