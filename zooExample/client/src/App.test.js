import { render, screen } from '@testing-library/react';
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
import Header from './components/Header';

const store = createStore(reducers, applyMiddleware(thunk));

test('renders Tiger', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
            <Wildlife />
        </App>
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/Tiger/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Bear', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
            <Wildlife />
        </App>
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/Bear/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Lion', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
            <Wildlife />
        </App>
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/Lion/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Zebra', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
            <Wildlife />
        </App>
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/Zebra/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Logo', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      
    </Provider>

  );
  const linkElement = screen.getByText(/Dalessi Zoo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Shop', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      
    </Provider>

  );
  const linkElement = screen.getByText(/Shop/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Animals', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      
    </Provider>

  );
  const linkElement = screen.getByText(/Animals/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login or Logout', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      
    </Provider>

  );
  const linkElement = screen.getByText(/^Sign-\w{2,3}/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders landing message', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Landing />
        </App>
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/Hello. Welcome to our zoo's homepage./gi);
  expect(linkElement).toBeInTheDocument();
});
