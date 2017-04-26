import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';


class TaoNorth extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate(name){
    this.props.navigator.push({name})
  }
  
  render(){
    return(
        <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>Tao North</Text>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={require('./assets/images/tao_north_header.png')}
                        style={Styles.showProjectHeader}
                      />

          <View style={Styles.textWrapper}>       
            <Text style={Styles.regText}>What does it takes to export the ideas of Tao to a different geography and culture? Tao North is underway. We are currently busy busy at creating the Tao trekking experience in Eddie's home village in the rice terraces of the Mountain Provence in the North Luzon. </Text>       
          </View>    
        </ScrollView>
        <View style={Styles.containerPaddingSmall}>
          <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.props.navigator.pop() }>
                <Text style={Styles.regText}>
                  Back
                </Text>
              </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default TaoNorth
