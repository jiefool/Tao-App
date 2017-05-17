import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';

class TripBoat extends Component {
  render(){
    return(


        <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Trip Boat' navigator={this.props.navigator}/>
        </View>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>{this.props.boatData.title}</Text>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={{uri: 'https://taotechph.com' + this.props.boatData.boat_medium }}
                        style={Styles.showProjectIcon}
                      />

          <View style={Styles.textWrapper}>           
            <Text style={Styles.bigText}>{this.props.boatData.name}</Text> 
            <Text style={Styles.regText}>{this.props.boatData.description}</Text> 
          </View>         
        </ScrollView>
      </View>
    );
  }
}

export default TripBoat
