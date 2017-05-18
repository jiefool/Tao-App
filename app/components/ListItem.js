import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Styles from '../assets/stylesheets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="angle-right" size={40} />)


class ListItem extends Component {
  render(){
    return(
       <TouchableHighlight onPress={ this.props.onPress }>
        <View style={Styles.li}>
          <View>{myIcon}</View>
          <View>
            <Text style={Styles.liItem}> {this.props.item}</Text>
            <Text style={Styles.liItemInfo}> {this.props.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem
