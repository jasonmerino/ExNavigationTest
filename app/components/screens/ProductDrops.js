
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
      renderTitle({ params }) {
        return (
          <NavigationBarSearch
            showNavigationBarSearch={params.showNavigationBarSearch}
            keyword={params.keyword}
          />
        );
      }
    }
  }

  render() {
    return (
      <Screen>
        <Text>Product Drops</Text>
        <Link onPress={() => this.props.navigation.getNavigator('root').push(router.getRoute('productDropFilters'))}>Filter</Link>
        <Link onPress={() => this.props.navigator.push(router.getRoute('product'))}>Product</Link>
      </Screen>
    );
  }
}

export default ProductDropsScreen;
