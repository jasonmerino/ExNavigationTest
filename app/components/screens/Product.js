
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import router from '../../router';
import Screen from '../partials/Screen';
import { navigationBarStylesDark } from '../../styles/navigationBarStyles';

class ProductScreen extends Component {

  static route = {
    navigationBar: {
      ...navigationBarStylesDark
    }
  }

  render() {
    return (
      <Screen>
        <Text>Product</Text>
      </Screen>
    );
  }
}

const componentStyles = StyleSheet.create({
  selectedTab: {
    color: 'blue',
  },
});

export default ProductScreen;
