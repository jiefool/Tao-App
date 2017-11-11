/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  Stylesheet,
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';


const { width, height } = Dimensions.get('window');
import Styles from './assets/stylesheets/Styles';
import customData from './assets/data/top_recommendations.json';
import { Actions } from 'react-native-router-flux';

class TaoTopRecommendations extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(customData)
    };
  }

  _require_image(image){
    switch(image){
      case 'manila.jpg':
        return require('./assets/images/manila.jpg')
        break
      case 'puerto_princesa.jpg':
        return require('./assets/images/puerto_princesa.jpg')
        break
      case 'elnido.jpg':
        return require('./assets/images/elnido.jpg')
        break
      case 'coron.jpg':
        return require('./assets/images/coron.jpg')
        break
    }
  }


  _renderItem(data){
    return(
      <TouchableHighlight onPress={()=> Actions.toprecommendationdetails({data: data, title: data.name}) }>
        <View style={{flexDirection: "row", marginTop: 1, marginBottom: 1, alignItems: 'center'}}>
          <Image source={this._require_image(data.image)} style={{height: 150, width: width/2}}/>
          <View style={{width: width/2, alignItems: 'center', backgroundColor: '#085582', height: 150, justifyContent: 'center', padding: 10}}>
            <Text style={{alignItems: 'center', fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'ffad_matro-webfont'}}>{data.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerRow}>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} /> 
        </View>
      </View>
    );
  }
}
  

export default TaoTopRecommendations
