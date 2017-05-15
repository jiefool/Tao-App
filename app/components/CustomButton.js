import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Styles from '../assets/stylesheets/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="angle-right" size={40} color={'white'}/>)

class CustomButton extends Component {
  render(){
    return(<View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
              <Text style={[Styles.regText, {marginRight: 5, color: 'white'}]}>
              {this.props.title}
                </Text>
                {myIcon}
            </View>)
  }
}

export default CustomButton
