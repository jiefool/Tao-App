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

class HealthSafety extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={Styles.paragraph}>
            Being <Text style={{fontWeight: 'bold'}}>'care free'</Text> and <Text style={{fontWeight: 'bold'}}>'embracing the moment'</Text> does not mean forgetting about keeping safe. 
            This is a journey to some of the most remote islands in the Philippines- which means far from any hospital. 
            Be observant, calculate the risk and look out for each other. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            1. SUNSHINE OVERLOAD 
          </Text>
          <Text style={Styles.paragraph}>
            Number one cause of sickness onboard is sunstroke. Europeans travelling in the tropics. Stay out of the sun between 10am and 3pm- we are a hat, cover with a sarong, wear suncream, sunglasses. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            2. DRINK LOTS OF WATER
          </Text>
          <Text style={Styles.paragraph}>
            Your body is 70% water, Remember to hydrate. Always cary your water bottle and fill it up at least 3 times a day. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            3. THIS IS NOT A SWIMMING POOL
          </Text>
          <Text style={Styles.paragraph}> 
            The sea is dangerous. Life jackets are not 'just for tourists'. Keep safe in the water. 
            Listen very carefully to the safety briefing when you board the boat. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            4. NEVER STEP ON THE REEF
          </Text>
          <Text style={Styles.paragraph}>
            Venomous critters on the reef are very dangerous. Contact with one of these can send you into anafaletic shock, causing drowning. Say away from the reef at all costs. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
            5. DONT CLIMB COCONUT TREES
          </Text>
          <Text style={Styles.paragraph}>
            Falling from heights is our biggest cause of accidents in the past. Climbing anything is not worth the risk, Stay at ground level. 
          </Text>  
        </ScrollView>
      </View>
    );
  }
}

export default HealthSafety
