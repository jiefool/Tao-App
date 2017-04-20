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
  ScrollView,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import Styles from './assets/stylesheets/Styles';


class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            Your Tao Trip Checkin:
          </Text>
          </View>
            <TextInput
            placeholder='First Name'
                style={Styles.checkInput}
                />
            <TextInput
                placeholder='Last Name'
                style={Styles.checkInput}
                />
            <TextInput
                placeholder='Nationality'
                style={Styles.checkInput}
                />
           <TextInput
                placeholder='Birthdate'
                style={Styles.checkInput}
                />
                <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.props.navigator.pop() }>
                <Image source={require('./assets/images/button.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>      
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

export default Checkin
