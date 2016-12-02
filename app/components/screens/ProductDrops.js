
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import router from '../../router';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import NavigationBarSearch from '../partials/NavigationBarSearch';

class ProductDropsScreen extends Component {

  static route = {
    navigationBar: {
      renderTitle() {
        return (
          <NavigationBarSearch />
        );
      }
    }
  }

  render() {
    return (
      <Screen>
        <Text>Product Drops</Text>
        <Link onPress={() => this.props.navigation.getNavigator('root').push(router.getRoute('productDropFilters'))}>Filter</Link>
        <Link onPress={() => this.props.navigator.push(router.getRoute('productDrops'))}>Product Detail</Link>
      </Screen>
    );
  }
}

export default ProductDropsScreen;
