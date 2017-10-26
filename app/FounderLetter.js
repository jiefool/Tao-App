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
            Welcome! 
          </Text>

          <Text style={Styles.paragraph, {fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}>
            Welcome to Palawan! 
          </Text>
          <Text style={Styles.paragraph}>
            Be aware of cultural differences, know your part and leave first world baggages behind.
          </Text>
          <Text style={Styles.paragraph}>  
            The most important point to remember is the THIS IS NOT A TOUR. 
            No organised trips can offer a truly authentic travel experience. We cannot serve it all to you on a plate, We can only offer access and tools to make your own experience.
            We call it an expedition because this will be a free-flowing adventure. We are exploring the islands together. 
            It will be dictated by the weather, tides and the groups’ enthusiasm.
          </Text>
          <Text style={Styles.paragraph}>
            No matter how we prepare for a trip and how much we give our best, its not enough to make it a great expedition without an involvement from our travellers. 
            50% of the experience will be in a morning walk alone in the village, helping your chef cook, fishing at the back of the boat, gathering firewood from the jungle for bonfires, going through the farm and harvesting the next meal, learning how to extract coconut milk.This experience is all there for you but this cannot be listed on a menu. You have to explore it yourself.
          </Text>
          <Text style={Styles.paragraph, {paddingBottom: 20}}> 
            We do not know how much time is left before the area is totally developed and open to mass tourism, so this is the time to jump in and really enjoy the rawness of the untouched islands.
          </Text>
          <Text style={Styles.paragraph, {fontWeight: 'bold'}}>
            Tao Family 
          </Text>
          <Text style={{height: 40}}>
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
