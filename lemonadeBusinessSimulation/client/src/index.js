import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import Game from './components/gameComponents/Game';
import Landing from './components/Landing';
import Reducers from './reducers';
import Recipe from './components/gameComponents/Recipe';
import Upgrades from './components/gameComponents/Upgrades';
import Store from './components/gameComponents/Store';
import Rent from './components/gameComponents/Rent';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
            <Route path = '/' element = {<Landing />}/>
            <Route path = '/lemonade' element = {<Game />}/>
            <Route path = '/lemonade/recipe' element = {<Recipe />} />
            <Route path = '/lemonade/upgrades' element = {<Upgrades />} />
            <Route path = '/lemonade/rent' element = {<Rent />} />
            <Route path = '/lemonade/store' element = {<Store />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)
