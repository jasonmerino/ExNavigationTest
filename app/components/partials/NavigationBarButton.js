
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class NavigationBarButton extends Component {

  render() {
    const {
      onPress,
    } = this.props;
    const props = {
      onPress,
      style: {
        marginTop: 7,
        padding: 5,
      },
    };
    return (
      <TouchableOpacity {...props}>
        <View>
          <Text style={componentStyles.buttonText}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const componentStyles = StyleSheet.create({
  buttonText: {
    color: '#333',
  },
});

export default NavigationBarButton;
