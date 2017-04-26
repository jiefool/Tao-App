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
  Button
} from 'react-native';

import Styles from './assets/stylesheets/Styles';


class NewExplorerForm extends Component {
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
            Your TAO
          </Text>
        </View>
        <TextInput
          placeholder='Login'
          style={Styles.checkInput}
        />
        <TextInput
          placeholder='Booking Reference #'
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
          placeholder='Email'
          style={Styles.checkInput}
        />

        <View style={Styles.btnWrapper}>    
          <View style={Styles.btnBlock}>
            <Button style={Styles.bText}
              onPress={()=> this.navigate('yourTaoTrip') }
              title="Submit"
              color="blue"
              accessibilityLabel="Learn more about this purple button"
            />
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
      </View>
    );
  }
}

export default NewExplorerForm
