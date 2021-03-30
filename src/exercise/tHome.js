/*
 * @Author: gm.chen
 * @Date: 2020-09-14 20:23:14
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-03-30 23:55:07
 * @Description: file content
 * @FilePath: /react-demo/src/exercise/tHome.js
 */
import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
