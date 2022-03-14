import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



import './index.css';
import App from './App';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';
import Landing from './components/Landing';
import CreateDeck from './components/deckComponents/CreateDeck';
import Decks from './components/Decks';
import Deck from './components/deckComponents/Deck';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
          <App>
            <Routes>
            
              <Route path='/' element={<Landing />} />
              <Route path='/createDeck' element={<CreateDeck />} />
              <Route path='/decks' element={<Decks />} />
              <Route path='/decks/:id' element={<Deck />} />
            </Routes>
          </App>
          
        
      </BrowserRouter>
      
      
    </Provider>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
