/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MainMenu from './app/MainMenu';
import TaoExpeditionPage from './app/TaoExpeditionPage';

const TaoApp = () => {
  return (
    <Router 
      navigationBarStyle={styles.navBar} 
      headerTitleStyle={styles.navBarTitle} 
      barButtonTextStyle={styles.barButtonTextStyle} 
      barButtonIconStyle={styles.barButtonIconStyle}>
      <Scene key="root">
        <Scene key="main"
          component={MainMenu}
          title="Main Menu"
          initial
        />
        <Scene
          key="taoexpage"
          component={TaoExpeditionPage}
          title="Tao Expedition Page"
        />
      </Scene>
    </Router>
  );
}
var styles = StyleSheet.create({
  navBar: {
    backgroundColor:'#0D47A1',
  },
  navBarTitle:{
    textAlign: 'center',
    alignSelf:'center',
    color:'#FFFFFF'
  },
  barButtonTextStyle:{
    color:'#FFFFFF'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  },
});

export default TaoApp;

