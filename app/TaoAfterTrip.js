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
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native';

import Styles from './assets/stylesheets/Styles';


class TaoAfterTrip extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>After Trip</Text>
        </View>

          <View style={Styles.containerRow}>
            <View style={Styles.textWrapper}>
              <Text style={Styles.headerText}>Enter Code</Text>
              <TextInput style = {Styles.searchInput} placeholder = 'Enter Code Here...'/>
              <TouchableHighlight style = {Styles.button}>
              <Text style = { Styles.buttonText}> Unlock </Text>
              </TouchableHighlight>
          </View>
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
      </View>    );
  }
}

export default TaoAfterTrip
