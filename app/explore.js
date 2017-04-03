'use strict';

import React, {Component} from 'react'
import{ StyleSheet, Text, View, TouchableHighlight, Image, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

var Menu = require('./menu');
var Map = require('./map');
var Gallery = require('./gallery');

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class Explore extends Component {
  constructor(){
    super();
    this.state = {selectedTab: "Menu"}
  }

  _renderContent(component: string) {
    switch(component){
      case "Menu":
        return(
          <ScrollView>
            <TouchableHighlight>
              <View style={styles.menuContainer}>
                <Text style={styles.menuHeaderText}>Towns and Villages</Text>
                <Text style={styles.menuDescText}>7 Towns and villages</Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
        );
      case "Map":
        return(
          <ScrollView style={styles.mapContainer} centerContent={true}>
              <ScrollView style={styles.mapContainer, {marginTop: -60}} horizontal={true} maximumZoomScale={3}>
                <View style={styles.mapHolder}>
                  <Image source={require('./assets/images/map.jpg')}
                    resizeMode='contain'
                    style={{
                      resizeMode:'contain',
                      height: height,
                      width: width
                    }}
                  />
                </View>
                <View style={styles.spacer}>
                </View>
              </ScrollView>
          </ScrollView>
        );
      case "Gallery":
        return(
          <View>
            <Text>Gallery</Text>
          </View>
        );
    }

  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <TouchableHighlight
            style={styles.menuButton}
            onPress={() => {
              this.setState({
                selectedTab: "Map"
              })
            }}>
            <Text style={styles.menuText}>MAP</Text>

          </TouchableHighlight>
          <TouchableHighlight
            style={styles.menuButton}
            onPress={() => {
              this.setState({
                selectedTab: "Menu"
              })
            }}>
            <Text style={styles.menuText}>MENU</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.menuButton}
            onPress={() => {
              this.setState({
                selectedTab: "Gallery"
              })
            }}>
            <Text style={styles.menuText}>GALLERY</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          {this._renderContent(this.state.selectedTab)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topMenu: {
    marginTop: 10,
    flex: .08,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -12
  },
  content: {
    flex: .92,
    padding: 0,
  },
  menuButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
    padding: 7,
    borderWidth: .5,
    borderColor: 'white'
  },
  menuText: {
    color: 'white'
  },
  mapContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  menuHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  menuContainer: {
    width: width-20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'steelblue',
    padding: 5
  },
  spacer:{
    height: 100
  }
})

module.exports = Explore;
