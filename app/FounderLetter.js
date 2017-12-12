/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import {
  Stylesheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const chevronRightIcon = (<FAIcon name="chevron-right" size={40} color="rgb(251,224,47)" />)



class FounderLetter extends Component {

  proceedToMain(){
    AsyncStorage.setItem("read_founder_letter", "true").then(() => {
      Actions.main()
    });
  }

  componentWillMount(){
    AsyncStorage.getItem("read_founder_letter").then((res) => {
      if (res == "true"){
        if (this.props.fromMenu == "true"){
         
        }else{
          Actions.main()
        }
      }
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 20}}>
             Welcome to Palawan! 
          </Text>
          <Text style={Styles.paragraph}>
            Time to prepare for your Expedition …{'\n'}{'\n'}

            We have put together this briefing which contains all the practical information, some hard talking tips and a little bit inspiration you will need to prepare for your journey and make the most out of your time with Tao. {'\n'}{'\n'}

            Tao is a community of over 200 islanders working together with pride. 
            Our mission is to reinvigorate the mind body and soul by taking you on a journey through the most remote islands in Palawan. 
            We know that the best journeys run deep and reconnect us with what it means to be human. We aim to offer new perspectives for travellers by connecting then intimately with our local culture and the beauty of the natural world. {'\n'}{'\n'}

            Your crew are all locals, born and raised in the islands. We call them the Lostboys and they are the best guides to take you out into this region. They are the heart and soul of of this adventure and the personality of our trips. Living with them onboard and getting to know them over the next 5 days will give you a real insight into our culture and its people. {'\n'}{'\n'}  
            Despite the language barrier there is much you can learn from them. Using their inherent island skills, the things they learnt growing up in the islands they will show you a different side of hospitality. {'\n'}{'\n'}

            The 10 tips are based on cultural differences between traveller and islander mentality. Understanding concepts like ‘Island time’ will help you understand your hosts and help you get in the right mindset for spending the next few days at sea with us. {'\n'}{'\n'} 

            Before you set off, the most important point to realize is that what Tao offers will make only 50% of your experience.  We offer you the access and tools to discover this incredible region for yourself. The other 50% has to come from you, your enthusiasm, your input, your personal journey. {'\n'}{'\n'}
            This is why we call it ‘the Expedition’. Every expedition is different because the journey is made by what our travellers bring. Your personal journey will cross with the collective one and make something unique. Understanding your role is essential. {'\n'}{'\n'}

            We say that our trips are not for everyone, we know that our idea of a good time may be different form the norm. We don’t care about making exclusive trips, but prefer to create something special for those who understands it. We care about everyone that joins us and for the time that they are with us, they become part of our family. {'\n'}{'\n'}

            Remember; Be positive, be friendly, be curious, ask questions and try new things. Awaken you inner child, get into the mindset of the Filipino and find out why we are known as the happiest people on earth!{'\n'}{'\n'}

            Welcome to our world, {'\n'}{'\n'}

            Eddie {'\n'}
            Tao Founder 

          </Text>

          <View style={{flexDirection: 'column', alignItems: 'flex-end', marginTop: 10}}>
            <TouchableHighlight
              style={[Styles.menuButton, {alignItems: 'center', justifyContent: 'center', backgroundColor: '#085582', height: 50, width: 50}]}
              onPress={() => this.proceedToMain() }>
                  <Text style={{color: 'white'}}>
                    {chevronRightIcon}
                  </Text>
            </TouchableHighlight> 
          </View>
          <View style={{flex: 1, height: 30}}>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FounderLetter
