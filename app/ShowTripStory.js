import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';


class ShowTripStory extends Component {
  render(){
    return(
        <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title={this.props.storyData.title} navigator={this.props.navigator}/>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={{uri: 'https://taotechph.com' + this.props.storyData.story_medium }}
                        style={Styles.showProjectIcon}
                      />

            <View style={{padding: 10}}>
              <View style={Styles.textWrapper}>
                <Text style={Styles.bigText}>{this.props.storyData.title}</Text> 
                <Text style={Styles.regText}>{this.props.storyData.description}</Text> 
              </View>
              <Text style={[Styles.smallText, {textAlign: 'left'}]}>{this.props.storyData.content}</Text> 
            </View>
                
        </ScrollView>

      </View>
    );
  }
}

export default ShowTripStory
