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


class TripCrewList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.crewData)
    };
    this.navigate = this.navigate.bind(this)
  }

  navigate(name){
    this.props.navigator.push({name})
  }

 

  _renderItem(data){
    return(
       <GeneralListItem thumb_image = {data.crew_thumb} title = {data.first_name+data.last_name} line_text_a = {data.birth_date} line_text_b = {data.address} 
         onPress={()=> this.navigate({name: 'tripexplorers', data: data}) }/>
   
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Boat Crew' navigator={this.props.navigator}/>
        </View>
        <View style={Styles.containerRow}>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} /> 
        </View>
      </View>
    );
  }
}

export default TripCrewList
