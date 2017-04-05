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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignSelf: 'stretch',
    backgroundColor: "red"
  },
  containerPadding: {
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: "yellow"
  },
  containerFirstColumn: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  containerSecondColumn: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  iconStyle: {
    resizeMode:'contain',
    height: 170,
    width: 170
  }
});

AppRegistry.registerComponent('taokalahi', () => taokalahi);
