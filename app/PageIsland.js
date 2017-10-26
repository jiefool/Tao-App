/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import Styles from './assets/stylesheets/Styles';

class PageIsland extends Component {
  render() {
    return (
      <Image source={require('./assets/images/page_island.png')} style={Styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{backgroundColor: 'rgba(0,0,0,.5)', padding: 20, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white',padding: 10}}>
              Camp Ngey! Ngey! is our crusoe-style deserted island camp, paradise for those who understand the luxury of simplicity and disconnection.
            </Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => Communications.web('https://booking.taophilippines.com/camp-ngeyngey') }>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', backgroundColor: 'blue', padding: 10}}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}

export default PageIsland
