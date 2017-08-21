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

class OurStory extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Our Story' navigator={this.props.navigator}/>
        </View>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 20}}>
            WHAT DOES TAO MEAN? 
          </Text>

          <Text style={Styles.paragraph}>
            We are guided by the principles of our name <Text style={{fontWeight: 'bold'}}>‘Tao’</Text> – means Human in the Filipino language. 
            This is a journey is a human experience.  This is about people, coming together to enjoy the rewards of a journey. 
          </Text>
          <Text style={Styles.paragraph}>
            It began as an adventure, when two friends set sail on old fishing boat with a map but no plan. 
          </Text>
          <Text style={Styles.paragraph}>  
            We discovered a paradise playground of the hundreds of remote islands, reefs and coves of Northern Palawan. 
          </Text>
          <Text style={Styles.paragraph}>
            We traveled with nomadic fishermen, traded with remote communities and sheltered with local families. 
            We got to know the people and the culture of hospitality and happy exuberance that seems to define the true meaning of life in paradise.
          </Text>
          <Text style={Styles.paragraph}> 
            It didn't take long before we realised we never wanted to go home, addicted to the boundless freedom of a life in open nature. 
            Exploring the limitless treasures of the archipelago with the raw beauty and magic of life in The Philippines’ final frontier. 
            Along the way meeting young islanders who joined the crew, travelling with us on journeys that changed the course of their lives forever. 
          </Text>
          <Text style={Styles.paragraph}>
            We wanted to find a way to share this endless adventure with likeminded travellers looking for their own meaning of paradise. 
            In 2006, Tao was founded. A social enterprise with communities as partners. 
            We began taking a handful of travellers on expeditions to experience island life hosted by local families.  
          </Text>
          <Text style={Styles.paragraph}>
            Today, we are a community of over 200 islanders with a passion and sense of pride, welcoming worldly travellers to our islands. 
            Working, living, learning, teaching, and growing together as a sustainable mico-economy.
            We created playful camps, homes, schools, farms and livelihood projects along our journey.
            Matured with experience but still with playful ideas, Tao is a working experimental project and we invite you into our world!
          </Text>
          <Text style={{height: 40}}>
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default OurStory
