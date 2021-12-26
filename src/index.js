import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import MenuState from './context/menu/MenuState';

ReactDOM.render(
  <React.StrictMode>
    <MenuState>
      <App />{' '}
    </MenuState>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
