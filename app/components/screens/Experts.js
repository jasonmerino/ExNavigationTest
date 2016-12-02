
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import router from '../../router';
import Screen from '../partials/Screen';

class ExpertsScreen extends Component {

  static route = {
    navigationBar: {
      title: 'Experts',
    },
  }

  render() {
    return (
      <Screen>
        <Text>Experts</Text>
      </Screen>
    );
  }
}

const componentStyles = StyleSheet.create({
  selectedTab: {
    color: 'blue',
  },
});

export default ExpertsScreen;
