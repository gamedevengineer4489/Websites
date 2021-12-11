import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Landing from './components/Landing';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Profile from './components/Profile';
import PasswordChange from './components/auth/PasswordChange';
import AllUsers from './components/AllUsers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App>
          <Routes>
            <Route path = '/' element = {<Landing />} />
            <Route path = '/signin' element = {<SignIn />} />
            <Route path = '/signup' element = {<SignUp />} />
            <Route path = '/profile/:username' element = {<Profile />} />
            <Route path = '/passwordChange' element = {<PasswordChange />} />
            <Route path = '/users' element = {<AllUsers />} />
          </Routes>
      </App>
    </ BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
