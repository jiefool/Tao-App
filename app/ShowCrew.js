import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Styles from './assets/stylesheets/Styles';


class Showcrew extends Component {
  render(){
    return(
        <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>{this.props.crewData.title}</Text>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={{uri: 'https://taotechph.com' + this.props.crewData.feature_crew_medium }}
                        style={Styles.showProjectIcon}
                      />

          <View style={Styles.textWrapper}>           
            <Text style={Styles.bigText}>{this.props.crewData.first_name}</Text> 
            <Text style={Styles.regText}>{this.props.crewData.last_name}</Text> 
            <Text style={Styles.smallText}>{this.props.crewData.birth_date}</Text> 
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

export default ShowCrew
