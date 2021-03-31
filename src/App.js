/*
 * @Author: gm.chen
 * @Date: 2020-09-14 20:23:14
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-03-31 21:37:37
 * @Description: file content
 * @FilePath: /react-demo/src/App.js
 */
import React from 'react'
// import { Router, Route, Link } from 'react-router'
import {  NavLink,HashRouter,Route } from 'react-router-dom';
import TScrollView from './exercise/tScrollView';
import TPizzaTranslator from './exercise/tPizzaTranslator'
import THome from './exercise/tHome'
import TStyle from './exercise/tStyle'
import TFlexBox from './exercise/tFlexbox'
  

function App() {
  return (
    <HashRouter>
      <div>
        <ul>
          <li><NavLink to='/home' activeClassName="active">home</NavLink></li>
          <li><NavLink to='/scrollView' activeClassName="active">scrollView</NavLink></li>
          <li><NavLink to='/pizzaTranslator' activeClassName="active">pizzaTranslator</NavLink></li>
          <li><NavLink to='/style' activeClassName="active">style</NavLink></li>
          <li><NavLink to='/flexbox' activeClassName="active">flexbox</NavLink></li>
        </ul>
        <Route exact path='/home' component={THome} ></Route> 
        <Route path='/scrollView' component={TScrollView}></Route>
        <Route path='/pizzaTranslator' component={TPizzaTranslator}></Route>
        <Route path='/style' component={TStyle}></Route>
        <Route path='/flexbox' component={TFlexBox}></Route>
      </div>
    </HashRouter>
  )
}


export default App;
