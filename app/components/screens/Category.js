
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

class CategoryScreen extends Component {

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
        <Text>Category</Text>
        <Link onPress={() => this.props.navigator.push(router.getRoute('productDrops'))}>Product Drops</Link>
      </Screen>
    );
  }
}

export default CategoryScreen;
