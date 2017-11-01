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
  ScrollView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
import Styles from './assets/stylesheets/Styles';
import ProjectItem from './components/ProjectItem';
import Api from './utilities/Api';
import NavBar from './components/NavBar';
import customData from './assets/data/project_and_stories.json'
import { Actions } from 'react-native-router-flux';


class TaoProjects extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(customData.ps_array)
    };
  }

  _require_image(image){
    switch(image){
      case 'lost_boys.jpg':
        return require('./assets/images/lost_boys.jpg')
        break
      case 'campngeyngey.jpg':
        return require('./assets/images/campngeyngey.jpg')
        break
      case 'tao_foundation.png':
        return require('./assets/images/tao_foundation.png')
        break
      case 'Tao.img10.jpg':
        return require('./assets/images/Tao.img10.jpg')
        break
      case 'Tao.img5.jpg':
        return require('./assets/images/Tao.img5.jpg')
        break
      case 'tao_sailing.png':
        return require('./assets/images/tao_sailing.png')
        break
      case 'tao_farming.jpg':
        return require('./assets/images/tao_farming.jpg')
        break
      case 'women_livelihood.jpg':
        return require('./assets/images/women_livelihood.jpg')
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
      <ScrollView>
        <Text style={{padding: 10, fontSize: 20}}>{customData.content}</Text>
        <View style={Styles.containerRow}>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} /> 
        </View>
      </ScrollView>
    );
  }
}

export default TaoProjects
