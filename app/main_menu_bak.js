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
  AsyncStorage,
  Button,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from 'react-native';
import {
  PagerTabIndicator, 
  IndicatorViewPager, 
  PagerTitleIndicator, 
  PagerDotIndicator
} from 'rn-viewpager';
import Communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';



import Styles from './assets/stylesheets/Styles';
import MenuButton from './components/MenuButton';
import Api from './utilities/Api';
import NavBar from './components/NavBar';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ETIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FNIcon from 'react-native-vector-icons/Foundation';
import ORIcons from 'react-native-vector-icons/Octicons';


const boatIcon = (<MIcon name="directions-boat" size={60} color="yellow" />)
const humanIcon = (<MCIcon name="human-child" size={60} color="yellow" />)
const mapSignIcon = (<FAIcon name="map-signs" size={60} color="yellow" />)
const bookIcon = (<ETIcon name="book" size={60} color="yellow" />)
const envelopIcon = (<FAIcon name="envelope" size={50} color="yellow" />)
const handIcon = (<IonIcon name="ios-hand" size={60} color="yellow" />)
const medicIcon = (<FAIcon name="medkit" size={60} color="yellow" />)
const crossIcon = (<ETIcon name="squared-cross" size={60} color="yellow" />)
const likeIcon = (<FNIcon name="like" size={60} color="yellow" />)
const bundleIcon = (<MCIcon name="humble-bundle" size={60} color="yellow" />)
const langIcon = (<ETIcon name="language" size={60} color="yellow" />)
const torsoIcon = (<FNIcon name="torsos-all" size={60} color="yellow" />)
const infoIcon = (<FAIcon name="info" size={60} color="yellow" />)
const checkListIcon = (<ORIcons name="checklist" size={60} color="yellow" />)
const briefCaseCheck = (<MCIcon name="briefcase-check" size={60} color="yellow" />)
const lightBulb = (<FNIcon name="lightbulb" size={60} color="yellow" />)
const thumbsUp = (<FAIcon name="thumbs-up" size={60} color="yellow" />)
const shipIcon = (<IonIcon name="ios-boat" size={60} color="yellow" />)
const anchorIcon = (<FAIcon name="anchor" size={60} color="yellow" />)
const footIcon = (<FNIcon name="foot" size={60} color="yellow" />)
const baseCamp = (<ETIcon name="basecamp" size={60} color="yellow" />)
const silverWare  = (<MCIcon name="silverware" size={60} color="yellow" />)
const mapIcon  = (<FNIcon name="map" size={60} color="yellow" />)
const logoutIcon = (<MCIcon name="logout" size={40} color="gray" />)
const refreshIcon = (<MCIcon name="refresh" size={60} color="yellow" />)
const loginIcon = (<MCIcon name="login" size={60} color="yellow" />)
const updateIcon = (<MIcon name="update" size={60} color="yellow" />)
const burnFire = (<IonIcon name="ios-bonfire" size={60} color="yellow" />)
const welcomeFlag = (<ETIcon name="flag" size={60} color="yellow" />)
const listUl = (<FAIcon name="list-ul" size={60} color="yellow" />)
const infoCircle = (<ETIcon name="info-with-circle" size={60} color="yellow" />)
const questionCircle = (<FAIcon name="question-circle" size={60} color="yellow" />)
const speechBubble = (<IonIcon name="ios-chatbubbles" size={60} color="yellow" />)
const projectIcon = (<FAIcon name="handshake-o" size={60} color="yellow" />)
const facebook = (<ETIcon name="facebook" size={40} color="white" />)
const instagram = (<ETIcon name="instagram" size={40} color="white" />)

class MainMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
                  explorer_data: {},
                  expeditionData: {},
                  login: '', 
                  book_ref: '',
                  first_name: '',
                  last_name: '',
                  email: '',
                  toView: 'tripdetails'
                }
  }      

 
  render() {
    return ( 
      <View style={{flex: 1}}>

        <IndicatorViewPager
            style={{flex: 1}}
            ref={viewPager => { this.viewPager = viewPager; }} >

         

          <View>
           <Text> Main Menu </Text>
          </View>

        </IndicatorViewPager>
      </View>
    );
  }

 

}

export default MainMenu
