import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';

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
          <NavBar title='Tao North' navigator={this.props.navigator}/>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={require('./assets/images/tao_north.png')}
                        style={Styles.showProjectHeader}
                      />

          <View style={Styles.textWrapper}>       
            <Text style={Styles.regText}>What does it takes to export the ideas of Tao to a different geography and culture? Tao North is underway. We are currently busy busy at creating the Tao trekking experience in Eddie's home village in the rice terraces of the Mountain Provence in the North Luzon. </Text>       
          </View>    
        </ScrollView>
      </View>
    );
  }
}

export default TaoNorth
