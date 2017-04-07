/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  Stylesheet,
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';


class TaoInfo extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>Useful Info</Text>
        </View>

        <View style={Styles.containerRow}>
          <Text style={Styles.headerText}>FOOD AND DIETRY REQUIREMENTS</Text>
        </View>


        <View style={Styles.containerPaddingSmall}>
          <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.props.navigator.pop() }>
                <Text style={Styles.regText}>
                  Back
                </Text>
              </TouchableHighlight>

        </View>
      </View>
    );
  }
}

export default TaoInfo
