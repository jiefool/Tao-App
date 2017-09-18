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

class PackingList extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={Styles.paragraph}>
          Below is a list of essentials you will need to pack in your <Text style={{fontWeight: 'bold'}}>DRYBAG [approx.  25 – 35 Liters].</Text> 
          </Text>
          <Text style={Styles.paragraph}>
          You have access to this bag during the day and take it down to the base-camps at night. The rest of your stuff will be packed out of the way in the boat and can be accessed every now and again to replenish your day pack. 
          </Text>
          <Text style={Styles.paragraph}>
          To make things simple we recommend that you pack these two bags the night before you depart to ensure a swift departure. In your waterproof day pack you will need:
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Sun hat or cap, sunscreen, and sun glasses.
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Sarong (for boys and girls...All around use - day towel, sun protection, beach loungers)
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • A refillable water bottle (it’s important to keep hydrated)
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • A small towel, shower gel, tooth brush. [WE DO NOT PROVIDE TOWELS]
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Flashlight or Head torch (to find your way around in the dark)
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Change of clothes, shorts and t shirts/vests for the day.
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Swimwear during the days because you will be in and out of the water.
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • A rash guard for sun protection and guard against jellyfish stings [optional- but very advisable]
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • In the evening you can shower and put on some very light weight trousers and a long sleeve top or shirt to minimize insect bites.
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Insect Repellent.
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Sandals or reef shoes.
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • Camera, a good book, ipod.
          </Text>
          <Text style={{height: 40}}></Text>
        </ScrollView>
      </View>
    );
  }
}

export default PackingList

