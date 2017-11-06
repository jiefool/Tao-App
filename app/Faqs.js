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
import customData from './assets/data/faq.json'
import { Actions } from 'react-native-router-flux';


class Faqs extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(customData)
    };
  }

  _renderItem(data){
    return(
      <TouchableHighlight onPress={()=> Actions.toprecommendationdetails({data: data, title: data.name}) }>
        <View style={{flexDirection: "row", marginTop: 1, marginBottom: 1, alignItems: 'center'}}>
          <View style={{width: width, alignItems: 'center', backgroundColor: '#085582', height: 75, justifyContent: 'center', padding: 10}}>
            <Text style={{alignItems: 'center', fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'ffad_matro-webfont'}}>{data.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={Styles.containerRow}>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} /> 
        </View>
      </ScrollView>
    );
  }
}

export default Faqs
