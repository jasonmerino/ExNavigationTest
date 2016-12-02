
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationStyles } from '@exponent/ex-navigation';
import router from '../../router';
import { navigationBarStylesDark } from '../../styles/navigationBarStyles';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import { push } from '../../actions/navigationActions';

class CartScreen extends Component {

  static route = {
    styles: {
      ...NavigationStyles.SlideVertical
    },
    navigationBar: {
      ...navigationBarStylesDark,
      title: 'Cart',
    },
  }

  render() {
    return (
      <Screen>
        <Text>Cart</Text>
        <Link onPress={() => push('product')}>Product</Link>
      </Screen>
    );
  }
}

const componentStyles = StyleSheet.create({
  selectedTab: {
    color: 'blue',
  },
});

export default CartScreen;
