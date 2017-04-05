/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
  Text
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';

var Explore = require('./app/explore');
var News = require('./app/news');
var Turn = require('./app/turn');
var Iterinary = require('./app/iterinary');
var More = require('./app/more');

export default class taokalahi extends Component {
  constructor(){
    super();
    this.state = {selectedTab: "Explore"}
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  _renderContent(component: string) {
    return (
      <Navigator initialRoute = {{
        component: component
      }}
      renderScene={
        this.navigatorRenderScene
      }
      />
    );
  }

  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.component){
      case 'Explore':
        return(<Explore navigator={navigator} title="Explore"/>);
      case 'News':
        return(<News navigator={navigator} title="News"/>);
      case 'Turn':
        return(<Turn navigator={navigator} title="Turn"/>);
      case 'Iterinary':
        return(<Iterinary navigator={navigator} title="Iterinary"/>);
      case 'More':
        return(<More navigator={navigator} title="More"/>);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerPadding}>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerFirstColumn}>
          </View>

          <View style={styles.containerSecondColumn}>
          </View>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerSecondColumn}>
          </View>

          <View style={styles.containerFirstColumn}>
          </View>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerFirstColumn}>
          </View>
          
          <View style={styles.containerSecondColumn}>
          </View>
        </View>

         <View style={styles.containerPadding}>
        </View>
        
      </View>
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
    backgroundColor: "black",
    flex: 1,
  },
  containerSecondColumn: {
    backgroundColor: "white",
    flex: 1,
  }
});

AppRegistry.registerComponent('taokalahi', () => taokalahi);
