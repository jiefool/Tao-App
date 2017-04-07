import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Styles from '../assets/stylesheets/Styles';


class ListItem extends Component {
  render(){
    return(
       <TouchableHighlight onPress={ this.props.onPress }>
        <View style={Styles.li}>
          <Text style={Styles.liItem}> {this.props.item}</Text>
          <Text style={Styles.liItemInfo}> {this.props.description}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem
