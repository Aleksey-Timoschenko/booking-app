import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/pages/App/App';

import store from './store';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
