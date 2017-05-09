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
       
          <View style={Styles.containerPaddingSmall}>
           <Text style={Styles.bigText}>
            Explorer Checkin
            </Text>
          </View>
           <ScrollView style={Styles.containerColumnx}>
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
                
                    <Text style={Styles.bigText}>
                    AKNOWLEDGEMENT OF RISK, RESPOSIBILITY AND LIABILITY WAIVER
                    </Text>
                    <Text style={Styles.bigText}>Assumption of Risk:</Text>
                    <Text>I understand that Tao Philippines / Tao LostBoys, Inc. is an adventure campany travelling in a very remote area of the Philippines. I understand that will be in an unfamilliar sorroundings and will be exposed to risks. I understand that i may suffer from physical injury, disease, sickness, damage or loss of my items as a result of my parcitipation in the expedition. I freely and voluntarily accept and assume all such risks, dangers and hazards</Text>
                    <Text style={Styles.bigText}>Responsibility:</Text>
                    <Text>I understand that participants are ultimately responsible for their personal safety and the consequences of their actions. I understand that the expedition leader will discuss points about safety during our briefing and I will pay attention to this points. I also confirm that I have relevant medical / travel insurance that will cover the cost of any medical / emergency action required on my behalf.</Text>
                    <Text style={Styles.bigText}>Liability Waiver:</Text>
                    <Text>I release Tao Philippines/ Tao LostBoys, Inc. and its employees all liability for any loss, damge, injury or expense that i may suffer as a result of my participation in this expidition. </Text>

                </View>  
                  <View style={Styles.centerContent}>
                  <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.navigate('yourTaoTrip') }>
                  <Image source={require('./assets/images/button.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
                </TouchableHighlight>
                <Text>BY PRESSING SUBMIT YOU AGREE TO THESE TERMS.</Text>
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
        </ScrollView>
      </View>
    );
  }
}

export default ExplorerCheckin
