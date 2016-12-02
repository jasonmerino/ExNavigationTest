import { createAction } from 'redux-actions';
import { NavigationActions } from '@exponent/ex-navigation';
import store from '../reducers';
import router from '../router'

export const pop = createAction('NAVIGATION_POP', async () => {
  const navigatorUID = store.getState().navigation.currentNavigatorUID;
  store.dispatch(NavigationActions.pop(navigatorUID));
});

export const push = createAction('NAVIGATION_PUSH', async (id, props = {}) => {
  const navigatorUID = store.getState().navigation.currentNavigatorUID;
  store.dispatch(NavigationActions.push(navigatorUID, router.getRoute(id, props)))
});
