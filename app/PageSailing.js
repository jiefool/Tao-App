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
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import Styles from './assets/stylesheets/Styles';

class PageSailing extends Component {
  gotoExpedition(navigator){
    AsyncStorage.setItem('alreadybooked', 'true').done(function(){
      Actions.reset('main');
    });
  }

  render() {
    return (
      <Image source={require('./assets/images/page_sailing.png')} style={Styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{backgroundColor: 'rgba(0,0,0,.5)', padding: 20, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white',padding: 10}}>
              Experience the ultimate Tao expedition aboard the newest member of our fleet, a traditional Paraw sailboat. The Sailing Paraw Expedition is similar to a regular Open Expedition, but is set on a stunning 74-foot sailboat, the largest Paraw in the Philippines.
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

export default PageSailing
