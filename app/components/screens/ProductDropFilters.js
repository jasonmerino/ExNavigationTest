
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import router from '../../router';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import NavigationBarButton from '../partials/NavigationBarButton';
import { navigationBarStylesLight } from '../../styles/navigationBarStyles';
import { pop } from '../../actions/navigationActions';

class ProductDropFiltersScreen extends Component {

  static route = {
    navigationBar: {
      ...navigationBarStylesLight,
      title: 'Filter Results',
      renderRight() {
        return <NavigationBarButton onPress={pop}>Done</NavigationBarButton>;
      },
      renderLeft() {
        return <NavigationBarButton>Clear</NavigationBarButton>;
      },
    }
  }

  render() {
    return (
      <Screen statusBarStyle="default">
        <Text>Filters</Text>
      </Screen>
    );
  }
}

export default ProductDropFiltersScreen;
