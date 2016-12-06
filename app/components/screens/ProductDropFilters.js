
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
import { navigationBarLight } from '../../styles/navigationBarStyles';
import { navigatorPop } from '../../actions/navigatorActions';

class ProductDropFiltersScreen extends Component {

  static route = {
    navigationBar: {
      ...navigationBarLight,
      title: 'Filter Results',
      renderRight() {
        return <NavigationBarButton onPress={navigatorPop}>Done</NavigationBarButton>;
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
