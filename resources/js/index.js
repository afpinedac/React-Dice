import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import SignupPage from './components/signup/SignupPage'
import { Route, BrowserRouter, Link, } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //allow us to dispatch asynchronous actions

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App}/>
      <Route path="/signup" component={SignupPage}/>
    </BrowserRouter>
  </Provider>, document.getElementById('app')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
