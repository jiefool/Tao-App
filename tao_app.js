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
import Checkin from './app/ExplorerCheckin';

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
        />
        <Scene
          key="taoexpage"
          component={PageExpedition}
          title="Tao Expedition"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="sailing"
          component={PageSailing}
          title="Tao Sailing"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="island"
          component={PageIsland}
          title="Tao Island"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="trek"
          component={PageTrek}
          title="Tao Trek"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="gathering"
          component={PageGathering}
          title="Tao Gatherings"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="foundation"
          component={PageFoundation}
          title="Tao Foundation"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="ourstory"
          component={OurStory}
          title="Our Story"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="founderletter"
          component={FounderLetter}
          title="Letter From the Founder"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="taooath"
          component={TaoOath}
          title="Tao Oath"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="healthandsafety"
          component={HealthSafety}
          title="Health Safety"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="captainsdosanddonts"
          component={CaptainsDosAndDonts}
          title="Captain's Dos and Don'ts"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="culturaldifferences"
          component={CulturalDifference}
          title="Cultural Differences"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="learntagalog"
          component={LearnTagalog}
          title="Learn Tagalog"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="packinglist"
          component={PackingList}
          title="Packing List"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="taotoprecommendations"
          component={TaoTopRecommendations}
          title="TaoTopRecommendations"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="boat"
          component={TripBoat}
          title="Boat"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="crews"
          component={TripCrewList}
          title="Crews"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="explorers"
          component={TripExplorers}
          title="Explorers"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="recipes"
          component={TripRecipes}
          title="Recipes"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="stories"
          component={TripStories}
          title="Stories"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="basecamps"
          component={TripBaseCamps}
          title="Basecamps"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="guidetoph"
          component={GuideToPh}
          title="Guide to PH"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="mapnorthluzon"
          component={MapNorthLuzon}
          title="North Luzon"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="showtriprecipe"
          component={ShowTripRecipe}
          title="Trip Recipe"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
        <Scene
          key="showtripstory"
          component={ShowTripStory}
          title="Trip Story"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
        />
         <Scene
          key="checkin"
          component={Checkin}
          title="CHECK-IN"
          onRight={()=> console.log()}
          rightTitle="Right"
          rightButtonTextStyle = {styles.rightTitle}
          initial
          hideNavBar = "true"
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
    alignSelf:'center',
    color:'black',
  },
  barButtonTextStyle:{
    color:'black',
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  },
  rightTitle:{
    color: 'yellow'
  },
});

export default TaoApp;

