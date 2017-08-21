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

class CulturalDifference extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Cultural Differences' navigator={this.props.navigator}/>
        </View>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={Styles.paragraph}>
          Be aware of cultural differences between traveller and islander mentality. Understanding them will help you manage your expectations, allowing you to get the very most out your time with Tao.
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          1. ISLAND TIME 
          </Text>
          <Text style={Styles.paragraph}>
          It’s better not to be aware of time and to leave the planning with us.
          Island time will definitely annoy any western mindset of needing to know what’s ahead. Remember that the Filipino day is only divided by breakfast, lunch and dinner. ‘When do we leave?’- after breakfast. ‘When do we get there?’ Before lunch! If you insist on knowing the exact time from any of your crew, make sure to give a leeway of 30min to 2 hours to avoid frustration. 
          </Text>
          <Text style={Styles.paragraph}>
          Don't find yourself waiting for everyone in the morning, make the most of your time by getting busy and explore the village - swim, trek, kayak, talk to the children ro just master the art of doing nothing. The boat won’t leave without you.
          Your day will be full of action if you’ re not too busy looking at the time.
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          2. WHERE ARE THE LOCALS, I WANT TRIBE PEOPLE 
          </Text>
          <Text style={Styles.paragraph}>
          Tao does not do village tours!  We do not showcase the village life. We do not go into peoples’ home taking pictures. We do encourage individuals to explore by themselves and not in groups. The villagers are our friends and we know them well. If you re friendly enough to communicate (even with language barrier) they will welcome you.
          We do not visit tribal communities with our guests. We have a lot of projects with the Tagbanua people but we cannot take our travelers to see them. They are already aloof with the immigrant communities in the area and it took time for our projects to be welcomed in their villages. 
          </Text>
          <Text style={Styles.paragraph}>
          If you are waiting for a cultural thing to happen in front of you then you are on the wrong trip. There are so many misconceptions of ‘meeting the locals’. Firstly, your crew are all locals. Getting to know them is getting to know the culture and the area. Secondly, are you sure the locals want to meet you? We do not want  the villager to be uncomfortable and shy when we bring in foreigners. We are careful not to exhaust our presence in the villages. thirdly, meeting does not mean only taking photos. Introduce yourself, ask their names, tell your name and learn some Filipino words.
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          3. UNDERSTAND WHERE YOUR GUIDE IS FROM  
          </Text>
          <Text style={Styles.paragraph}>
          Our guides, born and raised here, most have never left the islands, let alone the Philippines. They are less familiar with statistical details but instead they can tell you about the way of life and cultures of the islands. You can learn a lot from them and they can learn a lot more from you. There might be a language barrier but this does not lessen the experience.
          </Text>
          <Text style={Styles.paragraph}>
          Don’t undermine the guide’s decision but encourage them to explain. They make decisions based on many factors- weather, tides, current, wind, sunlight, water supply, jellyfish, fiestas, rum supply etc. but sometimes they forget to tell you why you have to leave early or late, why visit this island and not the other, and which base camp is chosen for sleeping. One thing is for sure, every decision is made to maximise your experience in the islands.
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          4. GET TO KNOW THE WET TOILET
          </Text>
          <Text style={Styles.paragraph}>
          There are no plumbing in the islands which means there cant be a holding tank for flushing, which means you have to use bucket to flush, which means you cannot have toilet seats as it get constantly wet. The toilet bowl is clean so you can seat on it (don’t squat), flush the toilet every time you use it, tell the crew if theres no water or paper or if its dirty. This is called a wet toilets as you have to always wash it down to keep it clean. It might not be up to your standard but remember this might be the only toilet bowl with a septic tank in the island. We provide toilet paper but please put it in the bin provided to avoid blockage. You might say these are the worst toilets you have ever seen, but you obviously have never been to a festival… or travelled much. 
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold', fontSize: 15}}>
          5. WASTEFULNESS 
          </Text>
          <Text style={Styles.paragraph}>
          Filipinos hate to see anything getting wasted, they reuse everything and fix things when they break. This leads to a beautiful resourcefulness through necessity. Island people have a respect for the idea of a limited resource.
          We ask you to do the same. Don't waste fresh water. Don't leave food on your plate. don't throw away useful things. If you are not going to use it again then gift it to someone who will. 
          </Text>
          <Text style={{height: 40}}></Text>
        </ScrollView>
      </View>
    );
  }
}

export default CulturalDifference

