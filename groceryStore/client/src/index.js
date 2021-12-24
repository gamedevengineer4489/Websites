import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './components/reducers';
import Landing from './components/Landing';
import PasswordChange from './components/auth components/PasswordChange';
import SignUp from './components/auth components/SignUp';
import SignIn from './components/auth components/SignIn';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';
import CoffeeShop from './components/CoffeeShop';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path = "/" element = {<Landing />} />
                    <Route path = "/signin" element = {<SignIn />} />
                    <Route path = "/registration" element = {<SignUp />} />
                    <Route path = "/changepassword" element = {<PasswordChange />} />
                    <Route path = "/shop" element = {<Shop />} />
                    <Route path = "/coffee" element = {<CoffeeShop />} />
                    <Route path = "/checkout" element = {<ShoppingCart />} />
                </Routes>
            </App>
        </BrowserRouter>
    </Provider>
   
    , document.getElementById('root')
);