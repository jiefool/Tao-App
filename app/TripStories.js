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
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import GeneralListItem from './components/GeneralListItem';
import Api from './utilities/Api';
import NavBar from './components/NavBar';
import { Actions } from 'react-native-router-flux';


class TripStories extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    };
  }

  _renderItem(data){
    return(
      <GeneralListItem thumb_image = {data.story_thumb} title = {data.title} line_text_a = {data.description}
         onPress={()=> Actions.showtripstory({title: data.title, data: data}) }/>
   
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

export default TripStories
