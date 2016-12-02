
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../../styles/colors';

class TabBarTitle extends Component {

  render() {
    const {
      onPress,
    } = this.props;
    const props = {
      onPress,
    };
    return (
      <Text style={[componentStyles.title, this.props.isSelected ? componentStyles.selectedTitle : {}]}>{this.props.children}</Text>
    );
  }
}

const componentStyles = StyleSheet.create({
  title: {
    fontSize: 13,
  },
  selectedTitle: {
    color: colors.primary,
  },
});

export default TabBarTitle;
