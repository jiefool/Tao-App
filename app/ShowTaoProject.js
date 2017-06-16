import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';


class ShowTaoProject extends Component {
  render(){
    return(
        <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title={this.props.projectData.title} navigator={this.props.navigator}/>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={{uri: 'https://taotechph.com' + this.props.projectData.feature_image_medium }}
                        style={Styles.showProjectIcon}
                      />

          <View style={Styles.textWrapper}>           
            <Text style={Styles.bigText}>{this.props.projectData.title}</Text> 
            <Text style={Styles.regText}>{this.props.projectData.short_description}</Text> 
            <Text style={Styles.smallText}>{this.props.projectData.text_content}</Text> 
          </View>         
        </ScrollView>
      </View>
    );
  }
}

export default ShowTaoProject
