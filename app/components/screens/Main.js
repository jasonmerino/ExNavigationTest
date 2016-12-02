
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from '../../reducers';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  NavigationProvider,
  NavigationContext,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import router from '../../router';
import colors from '../../styles/colors';
import TabBarTitle from '../partials/TabBarTitle';
import { navigationBarStylesDark } from '../../styles/navigationBarStyles';

const defaultRouteConfig = {
  navigationBar: {
    ...navigationBarStylesDark,
  }
};

function getColor(isSelected) {
  return isSelected ? colors.primary : colors.secondary;
}

class MainScreen extends Component {

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="shop"
      >
        <TabNavigationItem
          id="shop"
          title="Shop"
          renderTitle={(isSelected, title) => <TabBarTitle isSelected={isSelected}>{title}</TabBarTitle>}
          renderIcon={(isSelected) => <Icon name="ios-home" size={24} color={getColor(isSelected)} />}
        >
          <StackNavigation
            id="shop"
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={router.getRoute('shop')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="experts"
          title="Experts"
          renderTitle={(isSelected, title) => <TabBarTitle isSelected={isSelected}>{title}</TabBarTitle>}
          renderIcon={(isSelected) => <Icon name="ios-people" size={24} color={getColor(isSelected)} />}
        >
          <StackNavigation
            id="experts"
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={router.getRoute('experts')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="cart"
          title="Cart"
          renderTitle={(isSelected, title) => <TabBarTitle isSelected={isSelected}>{title}</TabBarTitle>}
          renderIcon={(isSelected) => <Icon name="ios-cart" size={24} color={getColor(isSelected)} />}
          onPress={() => {
            this.props.navigation.performAction(({ stacks }) => {
              stacks('root').push(router.getRoute('cart'));
            });
          }}
        />

        <TabNavigationItem
          id="more"
          title="More"
          renderTitle={(isSelected, title) => <TabBarTitle isSelected={isSelected}>{title}</TabBarTitle>}
          renderIcon={(isSelected) => <Icon name="ios-more" size={24} color={getColor(isSelected)} />}
        >
          <StackNavigation
            id="more"
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={router.getRoute('more')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

export default MainScreen;
