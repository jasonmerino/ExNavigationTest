
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import router from '../../router';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class ShopScreen extends Component {

  static defaultProps = {
    statusBarStyle: 'light-content',
  };

  render() {
    return (
      <View style={componentStyles.screen}>
        <StatusBar
          animated={true}
          barStyle={this.props.statusBarStyle}
        />
        {this.props.children}
        <KeyboardSpacer />
      </View>
    );
  }
}

const componentStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShopScreen;
