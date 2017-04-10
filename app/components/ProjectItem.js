import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import Styles from '../assets/stylesheets/Styles';


class ProjectItem extends Component {
  render(){
    return(
       <TouchableHighlight onPress={ this.props.onPress }>
        <View style={Styles.projectItem}>
          <Image source={require('../assets/images/tao_icon2.png')}
                      resizeMode='contain'
                      style={Styles.projectIcon}
                    />
          <Text style={Styles.liItem}> {this.props.item}</Text>
          <Text style={Styles.liItemInfo}> {this.props.description}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ProjectItem
