import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import SignupPage from './components/signup/SignupPage'
import { Route, BrowserRouter, Link, } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/"  component={App} />
    <Route path="/signup"  component={SignupPage} />
  </BrowserRouter>

  , document.getElementById('app'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
