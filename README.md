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
