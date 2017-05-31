import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Styles from '../assets/stylesheets/Styles';

class MenuButton extends Component {
  render(){
    return(<View style={Styles.menuButtonWrapper}>
                {this.props.menuIcon}
                <Text style={Styles.menuButtonText}>{this.props.menuText}</Text>
              </View>)
  }
}

export default MenuButton
