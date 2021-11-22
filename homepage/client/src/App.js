import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  render() {
    return(
      
        <div className = "maintainer">
          <BrowserRouter>
              <Header />
              <br />
              <button className = "ui primary button red" onClick = {() => changeTheme()} style = {{ marginLeft: '1650px', color: 'white' }}>Change Background Color</button>
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
