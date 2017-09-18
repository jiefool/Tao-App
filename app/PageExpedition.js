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

class PageExpedition extends Component {
  gotoExpedition(navigator){
    AsyncStorage.setItem('alreadybooked', 'true').done(function(){
      Actions.reset('main');
    });
  }

  render() {
    return (
      <Image source={require('./assets/images/page_expedition.png')} style={Styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{backgroundColor: 'rgba(0,0,0,.5)', padding: 20, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white',padding: 10}}>
              Choose a way to enjoy our 5 day journey through the island kingdom of Northern Palawan. It can be an action packed expedition, a slower paced sailing experience or half island stay/ half boat adventure.
            </Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => Communications.web('http://booking.taophilippines.com/open-group-experience/#form') }>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', backgroundColor: 'blue', padding: 10}}>Apply Now!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.gotoExpedition() }>
              <Text style={{color: 'yellow', marginTop: 10}}>
                Already booked? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}

export default PageExpedition
