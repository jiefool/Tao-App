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


class ExplorerCheckin extends Component {
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
        <ScrollView style={Styles.containerColumn}>
          <View style={Styles.containerPaddingSmall}>
           <Text style={Styles.bigText}>
            Map Experience Events
            </Text>
          </View>
                <View style={Styles.centerContent}>
                  <TextInput
                  placeholder='DATE OF EXPEDITION:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='BOOKING REFERENCE:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='LAST NAME:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='FIRST NAME:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='MIDDLE NAME:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='DATE OF BIRTH (MM/DD/YYYY):'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='AGE:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='GENDER:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='HOME ADDRESS:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='NATIONALITY:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='EMAIL ADDRESS:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='MOBILE NUMBER:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='PASSPORT NUMBER:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='CONTACT PERSON IN CASE OF EMERGENCY:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='CONTACT  NUMBER:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='RELEVANT MEDICAL CONDOTION OR DIETARY RESTRICTION:'
                  style={Styles.checkInput}
                  />
                  <TextInput
                  placeholder='AFTER EXPEDITION TRAVEL PLAN OR ITINERARY:'
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
        </ScrollView>
      </View>
    );
  }
}

export default ExplorerCheckin
