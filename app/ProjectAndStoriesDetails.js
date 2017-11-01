import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Styles from './assets/stylesheets/Styles';
const { width, height } = Dimensions.get('window');


class ProjectAndStoriesDetails extends Component {
   _require_image(image){
    switch(image){
      case 'manila.jpg':
        return require('./assets/images/manila.jpg')
        break
      case 'zhostel.jpg':
        return require('./assets/images/zhostel.jpg')
        break
      case 'black_market.png':
        return require('./assets/images/black_market.png')
        break
      case 'museum.jpg':
        return require('./assets/images/museum.jpg')
        break
      case 'food.png':
        return require('./assets/images/food.png')
        break
      case 'intramuros.jpg':
        return require('./assets/images/intramuros.jpg')
        break
      case 'manila_traffic.jpg':
        return require('./assets/images/manila_traffic.jpg')
        break
      case 'puerto_princesa.jpg':
        return require('./assets/images/puerto_princesa.jpg')
        break
      case 'elnido.jpg':
        return require('./assets/images/elnido.jpg')
        break
    }
  }

  render(){
    return(
      <ScrollView>
        <Image source={this._require_image(this.props.data.image)} style={{height: 250, width: width}}/>
        <Text style={{fontSize: 18, padding: 10}}>
          {this.props.data.content}
        </Text>
        <View style={{height: 100}} />
      </ScrollView>
    );
  }
}

export default ProjectAndStoriesDetails
