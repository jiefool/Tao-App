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
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={Styles.labelText}>
           <Text style={Styles.regText}>Experience</Text>
        </View>
        <View style={{width: 1, height: 80, backgroundColor: 'black'}} />
        <View style={Styles.labelText}>
           <Text style={Styles.regText}>Events</Text>
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
