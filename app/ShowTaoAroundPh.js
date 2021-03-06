import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Styles from './assets/stylesheets/Styles';


class ShowTaoAroundPh extends Component {
  render(){
    return(
        <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>{this.props.projectData.business_name}</Text>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={{uri: 'https://taotechph.com' + this.props.projectData.feature_image_medium }}
                        style={Styles.showProjectIcon}
                      />

          <View style={Styles.textWrapper}>           
            <Text style={Styles.bigText}>{this.props.projectData.business_name}</Text> 
            <Text style={Styles.regText}>{this.props.projectData.short_description}</Text> 
            <Text style={Styles.smallText}>{this.props.projectData.address}</Text> 
            <Text style={Styles.smallText}>{this.props.projectData.long_description}</Text> 
            <Text style={Styles.smallText}>{this.props.projectData.price_rate}</Text> 
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

export default ShowTaoAroundPh
