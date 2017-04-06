/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TabBarIOS,
  NavigatorIOS,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import MainMenu from './app/MainMenu';
import YourTaoTrip from './app/YourTaoTrip';
import PackingList from './app/PackingList';
import TaoInfo from './app/TaoInfo';
import TaoTenTips from './app/TaoTenTips';

var News = require('./app/news');
var Turn = require('./app/turn');
var Iterinary = require('./app/iterinary');
var More = require('./app/more');

export default class taokalahi extends Component {
  constructor(){
    super();
    this.renderScene = this.renderScene.bind(this)
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  renderScene(route, navigator){
    if(route.name === 'mainMenu'){
      return <MainMenu navigator={navigator}/>
    }else if(route.name === 'yourTaoTrip'){
      return <YourTaoTrip navigator={navigator}/>
    }else if (route.name === 'packingList'){
      return <PackingList navigator={navigator}/>
    }else if (route.name === 'taoInfo'){
      return <TaoInfo navigator={navigator}/>
    }else if (route.name === 'taoTenTips'){
      return <TaoTenTips navigator={navigator}/>
    }

  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'mainMenu'}}
        renderScene={this.renderScene}
      />
    );
  }
}



AppRegistry.registerComponent('taokalahi', () => taokalahi);
