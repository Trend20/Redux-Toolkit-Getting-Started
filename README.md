## Redux Toolkit

The official, opinionated, batteries-included toolset for efficient Redux development

# Redux Overview

There are three main concepts that are associated with Redux:

### Action

In Redux, actions are objects that are used to send data to the Redux store.
Actions are always associated with two properties(PAYLOAD AND TYPE).

##### Payload

Contains the data we intend to put in the Redux store.(can be any data type)

##### Type

Describes the action.(usually a string)

### Reducers

They use actions to know what to do with the Redux store. The action can tell the reducers to either add, remove or delete data from the store.

### Store

Without the Redux store, the actions and reducers can not fully function and a Redux application can only have a single store.
The store is where we keep the application state(application data).

The store works together with the reducers and actions. Actions tell reducers how to interact with the store and the store allows reducers to access the data in it and perform the actions.

To create a store, we have to import configure store from @reduxjs/toolkit.

```
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {}
})
```

This create the Redux store and automatically configure the Redux DevTools extension on the browser so that you can inspect the application while developing.

### Provide the Redux Store to the react application

```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
<!--
  In the main entry file of the application i.e index.js in react apps
  import the store as a named export and the Provider from react-redux
-->
import { store } from './redux/store.js'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
)

```

### Slices

These are portions of Redux code that is responsible for managing specific set of data and actions within the Redux Store.
A slice reducer is a reducer that is responsible for handling actions and updating the data for a given slice.

Creating a slice require 3 main constraints, a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.

### Creating counter slice as an example

```
 <!-- import createSlice from redux-toolkit -->

 import { createSlice } from '@reduxjs/toolkit';

 <!-- declare initial state -->

 const initialState = {
  value: 0
 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) =>{
      state.value -= 1;
    },
    incrementByAmount: (state, action) =>{
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

```
