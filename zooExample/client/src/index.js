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
import Animal from './components/Animal';
import tigerVideo from './mediaFiles/videoFiles/tigerVideo.mp4';
import zebraVideo from './mediaFiles/videoFiles/zebraVideo.mp4';
import lionVideo from './mediaFiles/videoFiles/lionVideo2.mp4';
import grizzlyBearVideo from './mediaFiles/videoFiles/grizzlyBearVideo.mp4';

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
                    <Route path = '/wildlife/Tiger' element = {<Animal videoSRC = {tigerVideo} title = "Tiger" />}/>
                    <Route path = '/wildlife/Zebra' element = {<Animal videoSRC = {zebraVideo} title = "Zebra" />}/>
                    <Route path = '/wildlife/Lion' element = {<Animal videoSRC = {lionVideo} title = "Lion" />}/>
                    <Route path = '/wildlife/Bear' element = {<Animal videoSRC = {grizzlyBearVideo} title = "Bear" />}/>
                    <Route path = '/checkout' element = {<ShoppingCart />}/>
                </Routes>
                
            </App>
        </BrowserRouter>
    </Provider>
   ,
    document.getElementById('root')
 );