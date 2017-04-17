import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import Styles from '../assets/stylesheets/Styles';


class ProjectItem extends Component {

  _renderContent(){

  }
  render(){
    return(
       <TouchableHighlight onPress={ this.props.onPress }>
        <View style={Styles.projectItem}>
          <View style={Styles.imageHolder}>
            <Image source={{uri: 'https://taotechph.com' + this.props.projectData.feature_image_thumb }}
                        style={Styles.projectIcon}
                      />
          </View>
          <View style={Styles.textHolder}>
            <Text style={Styles.liItem}> {this.props.projectData.title}</Text>
            <Text style={Styles.liItemInfo}> {this.props.projectData.short_description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ProjectItem
