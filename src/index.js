import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './store.js';

const app = (
   <StateProvider>
     <App />
   </StateProvider>
 );

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
