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
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import Styles from './assets/stylesheets/Styles';

class OtherTaoExperience extends Component {
  render() {
    return (
      <View>
        <ScrollView style={{backgroundColor:'cornflowerblue'}}>
          <TouchableHighlight onPress={() => Actions.taoexpage() }>
            <Image source={require('./assets/images/tao_expedition.png')}  style={Styles.taoProducts}>
              <Text style={Styles.productTitles}>Tao Expeditions</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.sailing() }>
            <Image source={require('./assets/images/tao_sailing.png')}  style={Styles.taoProducts}>
              <Text style={Styles.productTitles}>Tao Sailing Experience</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.island() }>
            <Image source={require('./assets/images/tao_island.png')}  style={Styles.taoProducts}>
              <Text style={Styles.productTitles}>Tao Island</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.trek() }>
            <Image source={require('./assets/images/tao_trek.png')}  style={Styles.taoProducts}>
              <Text style={Styles.productTitles}>Tao Treks</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.gathering() }>
            <Image source={require('./assets/images/tao_gathering.png')}  style={Styles.taoProducts}>
              <Text style={Styles.productTitles}>Tao Gatherings</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.foundation() }>
            <Image source={require('./assets/images/tao_foundation.png')}  style={Styles.taoProducts}>
              <Text style={Styles.productTitles}>Tao Kalahi Foundation</Text>
            </Image>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

export default OtherTaoExperience


