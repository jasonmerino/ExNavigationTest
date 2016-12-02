
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class NavigationBarSearch extends Component {

  static defaultProps = {
    showNavigationBarSearch: true,
  }

  render() {
    return (
      <View style={componentStyles.container}>
        <View style={componentStyles.logo}>
          {this.props.renderLogo ? <Text style={componentStyles.logoText}>Logo</Text> : null}
        </View>
        {
          this.props.showNavigationBarSearch ?
          <TextInput
            style={componentStyles.input}
            placeholder="Search for stuff to buy"
            defaultValue={this.props.keyword}
          /> :
          null
        }
      </View>
    );
  }
}

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    height: 30,
    flexGrow: 1,
    backgroundColor: '#fff',
    marginTop: 6,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 13,
  },
  logo: {
    width: 40,
    marginTop: 12,
    marginLeft: 5,
    alignItems: 'center'
  },
  logoText: {
    color: '#fff',
  },
});

export default NavigationBarSearch;
