
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationStyles } from '@exponent/ex-navigation';
import router from '../../router';
import { navigationBarDark } from '../../styles/navigationBarStyles';
import Screen from '../partials/Screen';
import Link from '../partials/Link';

class CartScreen extends Component {

  static route = {
    styles: {
      ...NavigationStyles.SlideVertical
    },
    navigationBar: {
      ...navigationBarDark,
      title: 'Cart',
    },
  }

  render() {
    return (
      <Screen>
        <Text>Cart</Text>
        <Link onPress={() => this.props.navigator.push('product')}>Product</Link>
      </Screen>
    );
  }
}

export default CartScreen;
