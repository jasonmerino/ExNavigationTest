
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import router from '../../router';
import Screen from '../partials/Screen';

class MoreScreen extends Component {

  static route = {
    navigationBar: {
      title: 'Settings',
    }
  }

  render() {
    return (
      <Screen>
        <Text>More</Text>
      </Screen>
    );
  }
}

const componentStyles = StyleSheet.create({
  selectedTab: {
    color: 'blue',
  },
});

export default MoreScreen;
