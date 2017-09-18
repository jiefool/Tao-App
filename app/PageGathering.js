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

class PageGathering extends Component {
  render() {
    return (
      <Image source={require('./assets/images/page_gathering.png')} style={Styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{backgroundColor: 'rgba(0,0,0,.5)', padding: 20, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white',padding: 10}}>
              We host and collaborate with unique events and festivals in our island venues. We also extend the island vibes wandering into the city with food events, conferences and warehouse parties.
            </Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => Communications.web('https://booking.taophilippines.com/tao-gathering/') }>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', backgroundColor: 'blue', padding: 10}}>Apply Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}

export default PageGathering
