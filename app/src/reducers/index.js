// *******************************************************
// Reducer Index File
// -------------------------------------------------------
// The is the index file to that imports and combines all our
// state reducers into one reducer for use in the Redux Store.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// --------------------------------

// *******************************************
// Reducer Imports
// -------------------------------------------
import app from './app';
// --------------------------------

export default combineReducers({
  router: routerReducer,
  app
});
