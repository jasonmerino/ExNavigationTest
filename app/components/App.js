
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from '../reducers';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  NavigationProvider,
  NavigationContext,
} from '@exponent/ex-navigation';
import router from '../router';

const navigationContext = new NavigationContext({
  router,
  store,
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation
            id="root"
            navigatorUID="root"
            defaultRouteConfig={{
              navigationBar: {
                visible: false,
              }
            }}
            initialRoute={router.getRoute('main')}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}

const componentStyles = StyleSheet.create({
  selectedTab: {
    backgroundColor: 'darkcyan',
  },
});

export default App;
