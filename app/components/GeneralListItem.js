import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import Styles from '../assets/stylesheets/Styles';


class GeneralListItem extends Component {

  _renderContent(){

  }
  render(){
    return(
       <TouchableHighlight onPress={ this.props.onPress }>
        <View style={Styles.projectItem}>
          <View style={Styles.imageHolder}>
            <Image source={{uri: 'https://taotechph.com' + this.props.thumb_image }}
                        style={Styles.projectIcon}
                      />
          </View>
          <View style={Styles.textHolder}>
            <Text style={Styles.liItem}> {this.props.title}</Text>
            <Text style={Styles.liItemInfo}> {this.props.line_text_a}</Text>
            <Text style={Styles.liItemInfo}> {this.props.line_text_b}</Text>
           
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default GeneralListItem
