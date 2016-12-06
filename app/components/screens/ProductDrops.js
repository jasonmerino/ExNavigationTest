
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
import { navigatorPush } from '../../actions/navigatorActions';

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
        <Link onPress={() => navigatorPush(router.getRoute('productDropFilters'), 'root')}>Filter</Link>
        <Link onPress={() => navigatorPush(router.getRoute('product'))}>Product</Link>
      </Screen>
    );
  }
}

export default ProductDropsScreen;
