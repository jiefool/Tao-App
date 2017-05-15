import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Styles from '../assets/stylesheets/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="angle-left" size={40} />)

class NavBar extends Component {
  render(){
    return(
      <View style={{flex: 1, height: 50, flexDirection: 'row', backgroundColor: 'yellow'}}>
        <TouchableHighlight
          style={Styles.menuButton}
          onPress={() => this.props.navigator.pop() }>
          <View style={{flex: 0.25, flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            
                {myIcon}
                <Text style={Styles.regText}> Back </Text>
           
          </View>
        </TouchableHighlight>
        <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={Styles.regText}>{this.props.title}</Text>
        </View>
        <View style={{flex: 0.25}}>
        </View>
      </View>
    );
  }
}

export default NavBar
