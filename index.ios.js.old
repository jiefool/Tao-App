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
  StyleSheet
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
      <TabBarIOS tintColor={"steelblue"}>
        <Icon.TabBarItem
          title="Explore"
          iconName="ios-compass"
          selectedIconName="ios-compass"
          selected={this.state.selectedTab === "Explore"}
          onPress={() => {
            this.setState({
              selectedTab: "Explore",
            });
          }}>
          {this._renderContent('Explore')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="News"
          iconName="ios-chatbubbles"
          selectedIconName="ios-chatbubbles"
          selected={this.state.selectedTab === "News"}
          onPress={() => {
            this.setState({
              selectedTab: "News",
            });
          }}>
          {this._renderContent('News')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="360° Turn"
          iconName="ios-refresh-circle"
          selectedIconName="ios-refresh-circle"
          selected={this.state.selectedTab === "Turn"}
          onPress={() => {
            this.setState({
              selectedTab: "Turn",
            });
          }}>
          {this._renderContent('Turn')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="My Iterinary"
          iconName="ios-map"
          selectedIconName="ios-map"
          selected={this.state.selectedTab === "Iterinary"}
          onPress={() => {
            this.setState({
              selectedTab: "Iterinary",
            });
          }}>
          {this._renderContent('Iterinary')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="More"
          iconName="ios-more"
          selectedIconName="ios-more"
          selected={this.state.selectedTab === "More"}
          onPress={() => {
            this.setState({
              selectedTab: "More",
            });
          }}>
          {this._renderContent('More')}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    color: "white",
    margin: 50,
  },
  wrapper: {
    flex: 1
  }
});

AppRegistry.registerComponent('taokalahi', () => taokalahi);
