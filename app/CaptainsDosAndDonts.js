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

class CaptainsDosAndDonts extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          1. DON'T ASK THE TIME 
          </Text>
          <Text style={Styles.paragraph}>
            You know what time it is- island time! Take off your watch and relax on island time- leave the planning to us.
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          2. OBSERVE DIGITAL DETOX 
          </Text>
          <Text style={Styles.paragraph}>
          No phones. No Wifi.  No connection with the outside world- keep it a rule!
          Not everybody will share your amazing music tastes, so speakers are banned. Let others enjoy the sounds of nature. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          3. LEAVE NO TRACE
          </Text>
          <Text style={Styles.paragraph}> 
          Although villages can covered in plastic wrappers, do not leave any trash in any island, its your responsibility to put it in the bin and bring it back to the boat.  
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          4. CONSERVE FRESH WATER 
          </Text>
          <Text style={Styles.paragraph}> 
          Water is our most precious resource, it takes a lot of effort to find it and load it onboard. Use it sparingly and with respect. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          5. DONT BE THE DRUNKEN FOOL
          </Text>
          <Text style={Styles.paragraph}> 
          We are not a booze cruise party-boat but we are also not a meditation/yoga retreat boat. Find the right balance but don't be the fool. There is nowhere to hide the next day!
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          6. RESPECT FELLOW SHIPMATES 
          </Text>
          <Text style={Styles.paragraph}> 
          We encourage people to do what they want on their trip as long as they respect other people who want to do other things. 
          </Text>
          <Text style={{height: 40}}></Text>
        </ScrollView>
      </View>
    );
  }
}

export default CaptainsDosAndDonts

