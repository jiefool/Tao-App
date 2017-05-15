import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';


class MapNorthLuzon extends Component {
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


<View style={{flex: 0.1, flexDirection: 'row',}}>
        <View style={Styles.containerPaddingSmall}>
         <Text style={Styles.regText}>Experience</Text>
        </View>
        <View style={Styles.containerPaddingSmall}>
         <Text style={Styles.regText}>Events</Text>
        </View>
        </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
          <Text style={Styles.smallText}>Surf</Text>
          <Text style={Styles.smallText}>Culture</Text>
          <Text style={Styles.smallText}>Foody</Text>
          <Text style={Styles.smallText}>Party</Text>
        </View>
        <View style={{width: 1, height: 900, backgroundColor: 'black'}} />
        <View style={{flex: 1, flexDirection: 'column', padding: 10}}>

           <Text style={Styles.smallText}>Sinulog</Text>
           <Text style={Styles.smallText}>Malosimbo</Text>
        </View>
      </View>

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

export default MapNorthLuzon
