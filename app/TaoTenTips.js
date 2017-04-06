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
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';


class TaoTenTips extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>10 Tips</Text>
        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.textWrapper}>
            <Text style={Styles.headerText}>10 useful tips to get the most out of your Expedition {'\n'} {'\n'}
              1. ISLAND TIME {'\n'}
              {'\n'}
              It's better not to be aware of time and to leave the planning with us.{'\n'}
              {'\n'}
              Island time will definitely anooy any western mindset of needing to know what's ahead.
              Remember that the Filipino day is only divided by breakfast, lunch,and dinner. 'When do we leave?' - After breakfast. 
              'When do we get there?' - Before lunch. If you insist on knowing the exact time from any of your crew, make sure to give a leeway of 30 min.
              to 2 hours to avoid frustration.{'\n'}
              if you dont like waitiing for everyone in the morning make the most of your time by getting busy
                and explore the village - swim, trek, kayak and talk to the children. The boat won't leave without you.{'\n'}
              {'\n'}
              Your day will be full of action if you're not too busy looking at the time.{'\n'}
              {'\n'}
              2. VILLAGE TOUR? WHERE ARE THE LOCALS? I WANT TRIBE PEOPLE {'\n'}
              {'\n'}
              Tao does not do village tours!{'\n'}
              {'\n'}
              If you are waiting for a cultural thing to happen in front you then you are on the wrong trip. We do not 
              showcase the village liffe. We do not go into people's home taking pictures. We do not encourage individuals to
              explore by themselves and not in groups. The village are our friends and we know them well. If you're friendly  enough
              to communicate (even with language barrier) they will welcome you.{'\n'}
              {'\n'}
              We do not visit tribal communities with our guests. We have a lot of projects with the Tagbanua people but we
              cannot take our travelers to see them. They are already allo
              3. DIGITAL DETOX! {'\n'}
              4. GET TO KNOW THE TOILET {'\n'}
              5. 'LOOK LIKE A LOBSTER!' {'\n'}
              6. LEAVING NO TRACE {'\n'}
              7. PLEASEBE GUIDE YOUR GUIDE! {'\n'}
              8. SOCIABLE! SOCIABLE! SOCIABLE! {'\n'}
              9. 50/50 {'\n'}
              10. LEARN A FEW WORDS {'\n'}
            </Text>
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

export default TaoTenTips
