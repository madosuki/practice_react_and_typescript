// Top

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// , applyMiddleware, compose
import { createStore, Action } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import App from './components/App';
import './index.css';
// <Hello name="Typescript" enthusiasmLevel={10} />

// Top Level

const store = createStore<StoreState, Action, undefined, undefined>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Marine Blue'
});

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
