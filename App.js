/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import {
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
import Checkin from './app/Checkin';
import TaoTenTips from './app/TaoTenTips';
import TaoFurtherInfo from './app/TaoFurtherInfo';
import TaoTopRecommendations from './app/TaoTopRecommendations';
import TaoProjects from './app/TaoProjects';
import TaoAroundPh from './app/TaoAroundPh';
import TaoAfterTrip from './app/TaoAfterTrip';
import TaoOffers from './app/TaoOffers';
import GuideToPh from './app/GuideToPh';
import CampNgeyngey from './app/CampNgeyngey';
import ApplyNgeyngey from './app/ApplyNgeyngey';
import ShowTaoProject from './app/ShowTaoProject';
import TaoNorth from './app/TaoNorth';
import Tao5dayExpedition from './app/Tao5dayExpedition';
import TaoFoundation from './app/TaoFoundation';
import NewExplorerForm from './app/NewExplorerForm';
import TripBoat from './app/TripBoat';
import TripCrewList from './app/TripCrewList';
import TripBaseCamps from './app/TripBaseCamps';
import TripExplorers from './app/TripExplorers';
import TripStories from './app/TripStories';
import TripRecipes from './app/TripRecipes';
import ExperiencesEvents from './app/ExperiencesEvents';

var News = require('./app/news');
var Turn = require('./app/turn');
var Iterinary = require('./app/iterinary');
var More = require('./app/more');

export default class App extends Component {
  constructor(){
    super();
    this.renderScene = this.renderScene.bind(this)
  }

  componentDidMount(){
  //  SplashScreen.hide();
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
    }else if (route.name === 'checkin'){
      return <Checkin navigator={navigator}/>
    }else if (route.name === 'taoTenTips'){
      return <TaoTenTips navigator={navigator}/>
    }else if (route.name === 'taoFurtherInfo'){
      return <TaoFurtherInfo navigator={navigator}/>
    }else if (route.name === 'taoTopRecommendations'){
      return <TaoTopRecommendations navigator={navigator}/>
    }else if (route.name === 'taoProjects'){
      return <TaoProjects navigator={navigator}/>
    }else if (route.name === 'taoAroundPh'){
      return <TaoAroundPh navigator={navigator}/>
    }else if (route.name === 'taoAfterTrip'){
      return <TaoAfterTrip navigator={navigator}/>
    }else if (route.name === 'taoOffers'){
      return <TaoOffers navigator={navigator}/>
    }else if (route.name === 'guideToPh'){
      return <GuideToPh navigator={navigator}/>
    }else if (route.name === 'campNgeyngey'){
      return <CampNgeyngey navigator={navigator}/>
    }else if (route.name === 'applyNgeyngey'){
      return <ApplyNgeyngey navigator={navigator}/>
    }else if (route.name.name === 'showTaoProject'){
      return <ShowTaoProject navigator={navigator} projectData = {route.name.data}/>
    }else if (route.name === 'taoNorth'){
      return <TaoNorth navigator={navigator}/>
    }else if (route.name === 'tao5dayExpedition'){
      return <Tao5dayExpedition navigator={navigator}/>
    }else if (route.name === 'taoFoundation'){
      return <TaoFoundation navigator={navigator}/>
    }else if (route.name === 'newExplorerForm'){
      return <NewExplorerForm navigator={navigator}/>
    }else if (route.name === 'tripBoat'){
      return <TripBoat navigator={navigator}/>
    }else if (route.name === 'tripCrewList'){
      return <TripCrewList navigator={navigator}/>
    }else if (route.name === 'tripBaseCamps'){
      return <TripBaseCamps navigator={navigator}/>
    }else if (route.name === 'tripExplorers'){
      return <TripExplorers navigator={navigator}/>
    }else if (route.name === 'tripStories'){
      return <TripStories navigator={navigator}/>
    }else if (route.name === 'tripRecipes'){
      return <TripRecipes navigator={navigator}/>
    }else if (route.name === 'experiencesEvents'){
      return <ExperiencesEvents navigator={navigator}/>
    }else if (route.name.name === 'tripBoat'){
      return <TripBoat navigator={navigator} boatData={route.name.data}/>
    }else if (route.name.name === 'tripCrewList'){
      return <TripCrewList navigator={navigator} crewData={route.name.data}/>
    }else if (route.name.name === 'tripBaseCamps'){
      return <TripBaseCamps navigator={navigator} basecampsData={route.name.data}/>
    }else if (route.name.name === 'tripStories'){
      return <TripStories navigator={navigator} storiesData={route.name.data}/>
    }else if (route.name.name === 'tripExplorers'){
      return <TripExplorers navigator={navigator} explorersData={route.name.data}/>
    }else if (route.name.name === 'tripRecipes'){
      return <TripRecipes navigator={navigator} recipesData={route.name.data}/>
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

