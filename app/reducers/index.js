
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import app from './appReducer';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, createLogger())(createStore);

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore: createStoreWithMiddleware,
  navigationStateKey: 'navigation',
});

const store = createStoreWithNavigation(
  /* combineReducers and your normal create store things here! */
  combineReducers({
    navigation: NavigationReducer,
    app,
  })
);

export default store;
