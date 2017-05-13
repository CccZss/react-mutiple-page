import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import App from './App';
import adminApp from './reducers/'

// middleware
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const loggerMiddleware = createLogger()

let store = createStore(
	adminApp,
	applyMiddleware(
	    thunkMiddleware, // 允许我们 dispatch() 函数
	    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  	)
)

ReactDOM.render(
  <Provider store={store}>
  	<HashRouter>
    	<Route path="/" component={App} />
  	</HashRouter>
  </Provider>,
  document.getElementById('app')
);