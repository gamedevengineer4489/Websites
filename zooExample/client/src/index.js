import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import Landing from './components/Landing';
import Shop from './components/Shop';
import Wildlife from './components/Wildlife';
import Clothes from './components/storeComponents/Clothes';
import Games from './components/storeComponents/Games';
import Films from './components/storeComponents/Films';
import Souvenirs from './components/storeComponents/Souvenirs';
import ShoppingCart from './components/storeComponents/ShoppingCart';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path = '/' element = {<Landing />}/>
                    <Route path = '/shop' element = {<Shop />}/>
                    <Route path = '/shop/clothes' element = {<Clothes />}/>
                    <Route path = '/shop/games' element = {<Games />}/>
                    <Route path = '/shop/films' element = {<Films />}/>
                    <Route path = '/shop/souvenirs' element = {<Souvenirs />}/>
                    <Route path = '/wildlife' element = {<Wildlife />}/>
                    <Route path = '/checkout' element = {<ShoppingCart />}/>
                </Routes>
                
            </App>
        </BrowserRouter>
    </Provider>
   ,
    document.getElementById('root')
 );