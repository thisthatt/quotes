import React from 'react'

import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import App from './App'
import Anecdotereducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/FilterReducer'
const store = configureStore({
  reducer: {
    anecdotes: Anecdotereducer,
    notification: notificationReducer,
    filter: filterReducer
  }
})
console.log(store.getState());


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
