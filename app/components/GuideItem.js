import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import Styles from '../assets/stylesheets/Styles';


class GuideItem extends Component {
  render(){
    return(
       <TouchableHighlight onPress={ this.props.onPress }>
        <View style={Styles.projectItem}>
          <View style={Styles.imageHolder}>
            <Image source={require('../assets/images/tao_icon4.png')}
                        resizeMode='contain'
                        style={Styles.projectIcon}
                      />
          </View>
          <View style={Styles.textHolder}>
            <Text style={Styles.liItem}> {this.props.item}</Text>
            <Text style={Styles.liItemInfo}> {this.props.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default GuideItem
