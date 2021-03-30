/*
 * @Author: gm.chen
 * @Date: 2020-09-14 20:23:14
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-03-30 23:51:00
 * @Description: file content
 * @FilePath: /react-demo/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
