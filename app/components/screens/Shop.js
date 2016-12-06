
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import router from '../../router';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import NavigationBarSearch from '../partials/NavigationBarSearch';
import { navigatorPush } from '../../actions/navigatorActions';

class ShopScreen extends Component {

  static route = {
    navigationBar: {
      renderTitle() {
        return (
          <NavigationBarSearch renderLogo={true} />
        );
      }
    }
  }

  render() {
    return (
      <Screen>
        <Text>Shop</Text>
        <Link onPress={() => this.props.navigator.push(router.getRoute('category'))}>Category</Link>
        <Link onPress={() => this.props.navigator.showLocalAlert('Testing text', {})}>Alert</Link>
      </Screen>
    );
  }
}

export default ShopScreen;
