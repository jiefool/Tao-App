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
import PageExpedition from './app/PageExpedition';
import PageSailing from './app/PageSailing';
import PageIsland from './app/PageIsland';
import PageTrek from './app/PageTrek';
import PageGathering from './app/PageGathering';
import PageFoundation from './app/PageFoundation';

import OurStory from './app/OurStory';
import FounderLetter from './app/FounderLetter';
import TaoOath from './app/TaoOath';
import HealthSafety from './app/HealthSafety';
import CaptainsDosAndDonts from './app/CaptainsDosAndDonts';
import CulturalDifference from './app/CulturalDifference';
import LearnTagalog from './app/LearnTagalog';
import PackingList from './app/PackingList';
import TaoTopRecommendations from './app/TaoTopRecommendations';

import TripBoat from './app/TripBoat';
import TripCrewList from './app/TripCrewList';
import TripExplorers from './app/TripExplorers';
import TripRecipes from './app/TripRecipes';
import TripStories from './app/TripStories';
import GuideToPh from './app/GuideToPh';
import MapNorthLuzon from './app/MapNorthLuzon';
import TripBaseCamps from './app/TripBaseCamps';
import ShowTripRecipe from './app/ShowTripRecipe';
import ShowTripStory from './app/ShowTripStory';




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
          title="Tao Philippines"
          initial
        />
        <Scene
          key="taoexpage"
          component={PageExpedition}
          title="Tao Expedition"
        />
        <Scene
          key="sailing"
          component={PageSailing}
          title="Tao Sailing"
        />
        <Scene
          key="island"
          component={PageIsland}
          title="Tao Island"
        />
        <Scene
          key="trek"
          component={PageTrek}
          title="Tao Trek"
        />
        <Scene
          key="gathering"
          component={PageGathering}
          title="Tao Gatherings"
        />
        <Scene
          key="foundation"
          component={PageFoundation}
          title="Tao Foundation"
        />
        <Scene
          key="ourstory"
          component={OurStory}
          title="Our Story"
        />
        <Scene
          key="founderletter"
          component={FounderLetter}
          title="Letter From the Founder"
        />
        <Scene
          key="taooath"
          component={TaoOath}
          title="Tao Oath"
        />
        <Scene
          key="healthandsafety"
          component={HealthSafety}
          title="Health Safety"
        />
        <Scene
          key="captainsdosanddonts"
          component={CaptainsDosAndDonts}
          title="Captain's Dos and Don'ts"
        />
        <Scene
          key="culturaldifferences"
          component={CulturalDifference}
          title="Cultural Differences"
        />
        <Scene
          key="learntagalog"
          component={LearnTagalog}
          title="Learn agalog"
        />
        <Scene
          key="packinglist"
          component={PackingList}
          title="Packing List"
        />
        <Scene
          key="taotoprecommendations"
          component={TaoTopRecommendations}
          title="TaoTopRecommendations"
        />
        <Scene
          key="boat"
          component={TripBoat}
          title="Boat"
        />
        <Scene
          key="crews"
          component={TripCrewList}
          title="Crews"
        />
        <Scene
          key="explorers"
          component={TripExplorers}
          title="Explorers"
        />
        <Scene
          key="recipes"
          component={TripRecipes}
          title="Recipes"
        />
        <Scene
          key="stories"
          component={TripStories}
          title="Stories"
        />
        <Scene
          key="basecamps"
          component={TripBaseCamps}
          title="Basecamps"
        />
        <Scene
          key="guidetoph"
          component={GuideToPh}
          title="Guide to PH"
        />
        <Scene
          key="mapnorthluzon"
          component={MapNorthLuzon}
          title="North Luzon"
        />
        <Scene
          key="showtriprecipe"
          component={ShowTripRecipe}
          title="Trip Recipe"
        />
        <Scene
          key="showtripstory"
          component={ShowTripStory}
          title="Trip Story"
        />
      </Scene>
    </Router>
  );
}
var styles = StyleSheet.create({
  navBar: {
    backgroundColor:'yellow',
  },
  navBarTitle:{
    textAlign: 'center',
    alignSelf:'center',
    color:'black'
  },
  barButtonTextStyle:{
    color:'black'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  },
});

export default TaoApp;

