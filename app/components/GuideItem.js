import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import Styles from '../assets/stylesheets/Styles';


class GuideItem extends Component {
  render(){
    return(
       <TouchableHighlight onPress={ this.props.onPress }>
        <View style={Styles.projectItem}>
          <View style={Styles.imageHolder}>
            <Image source={{uri: 'https://taotechph.com' + this.props.data.feature_image_thumb }}
                        resizeMode='contain'
                        style={Styles.projectIcon}
                      />
          </View>
          <View style={Styles.textHolder}>
            <Text style={Styles.liItem}> {this.props.data.business_name}</Text>
            <Text style={Styles.liItemInfo}> {this.props.data.short_description}</Text>
             <Text style={Styles.regText}> {this.props.data.price_rate} php</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default GuideItem
