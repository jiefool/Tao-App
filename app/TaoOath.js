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
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';

class TaoOath extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Tao Oath' navigator={this.props.navigator}/>
        </View>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            1. TRAVEL TOGETHER AND JOURNEY ALONE 
          </Text>
          <Text style={Styles.paragraph}>  
            Everybody is on their own journey, Personal & with the Group. 
            Find time to Soul search and find time to connect with the group. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            2. STEP OUTSIDE YOUR COMFORT ZONE.
          </Text>
          <Text style={Styles.paragraph}>  
            Travel is about experiencing the rough with the smooth. There may be uncomfortable and awkward moments. 
            but Try new things, Somethings you will like, others you will not, 
            Be vulnerable, Break down your boundaries and find out what is on the other side. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            4. EMBRACE ISLAND TIME 
          </Text>
          <Text style={Styles.paragraph}>  
            Stop asking what time things are going to happen. Things happen when they happen. 
            The unexpected moments are the most beautiful. Embrace them.  
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            5. MASTER THE ART OF DOING NOTHING 
          </Text>
          <Text style={Styles.paragraph}>  
            You busy people… doing something just for the sake of doing something. Do nothing for a change… eliminate the noise and experience the feeling of a clear head, its amazing.  
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            6. AWAKEN YOUR INNER CHILD
          </Text>
          <Text style={Styles.paragraph}>  
            The most important thing to bring with you is the right mindset. Be positive, be friendly, be curious, ask questions, try new things, Think like a Philipino and find out why we are known as the happiest people on earth!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default TaoOath
