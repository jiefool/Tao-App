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
    this.navigate = this.navigate.bind(this)
    this.state = { text: '' };
  }

  navigate(name){
    this.props.navigator.push({name})
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
           Map Experience Events
          </Text>
          </View>
            <View style={Styles.centerContent}>
              <TextInput
                placeholder='Book Ref:'
                  style={Styles.checkInput}
                  />
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
              <TextInput
                  placeholder='Email:'
                  style={Styles.checkInput}
                  />
            </View>
                <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('yourTaoTrip') }>
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
