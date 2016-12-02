
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class Link extends Component {

  render() {
    const {
      onPress,
    } = this.props;
    const props = {
      onPress,
    };
    return (
      <TouchableOpacity {...props}>
        <View>
          <Text style={componentStyles.linkText}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const componentStyles = StyleSheet.create({
  linkText: {
    color: 'darkcyan',
  },
});

export default Link;
