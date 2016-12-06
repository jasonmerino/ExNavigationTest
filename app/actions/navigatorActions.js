import { createAction } from 'redux-actions';
import { NavigationActions } from '@exponent/ex-navigation';
import store from '../reducers';
import router from '../router'

export const navigatorPop = createAction('NAVIGATION_POP', async () => {
  const navigatorUID = store.getState().navigation.currentNavigatorUID;
  store.dispatch(NavigationActions.pop(navigatorUID));
});

export const navigatorPush = createAction('NAVIGATION_PUSH', async (route, navUID) => {
  const navigatorUID = store.getState().navigation.currentNavigatorUID;
  store.dispatch(NavigationActions.push(navUID || navigatorUID, route));
});
