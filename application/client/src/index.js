import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducers, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store = {store}>
    {/* A Provider element gives child components access to the redux store where the application's state is stored. */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
