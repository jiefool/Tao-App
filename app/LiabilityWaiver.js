
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
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const anchorIcon = (<FAIcon name="anchor" size={60} color="yellow" />)

class LiabilityWaiver extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
           <Text style={[Styles.regText, {marginTop: 10, marginBottom: 10}]}>
          AKNOWLEDGEMENT OF RISK, RESPOSIBILITY AND LIABILITY WAIVER
          </Text>
          <Text style={[Styles.regText, {marginTop: 10, marginBottom: 10}]}>Assumption of Risk</Text>
          <Text>I understand that Tao Philippines / Tao LostBoys, Inc. is an adventure campany travelling in a very remote area of the Philippines. I understand that will be in an unfamilliar sorroundings and will be exposed to risks. I understand that i may suffer from physical injury, disease, sickness, damage or loss of my items as a result of my parcitipation in the expedition. I freely and voluntarily accept and assume all such risks, dangers and hazards</Text>
          <Text style={[Styles.regText, {marginTop: 10, marginBottom: 10}]}>Responsibility</Text>
          <Text>I understand that participants are ultimately responsible for their personal safety and the consequences of their actions. I understand that the expedition leader will discuss points about safety during our briefing and I will pay attention to this points. I also confirm that I have relevant medical / travel insurance that will cover the cost of any medical / emergency action required on my behalf.</Text>
          <Text style={[Styles.regText, {marginTop: 10, marginBottom: 10}]}>Liability Waiver</Text>
          <Text>I release Tao Philippines/ Tao LostBoys, Inc. and its employees all liability for any loss, damge, injury or expense that i may suffer as a result of my participation in this expidition. </Text>

        </ScrollView>
      </View>
    );
  }
}

export default LiabilityWaiver
