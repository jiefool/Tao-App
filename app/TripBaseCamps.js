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


class TripBaseCamps extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.basecampsData)
    };
    this.navigate = this.navigate.bind(this)
  }

  navigate(name){
    this.props.navigator.push({name})
  }

  // componentWillMount(){
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   Api.getTaoProjects().then((res) =>{
  //     this.setState({
  //       dataSource: ds.cloneWithRows(res)
  //     });
  //   });
  // }

  _renderItem(data){
    return(
      <GeneralListItem thumb_image = {data.basecamps_thumb} title = {data.name} line_text_a = {data.description}
         onPress={()=> this.navigate({name: 'tripCrewList', data: data}) }/>
    
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            Trip Base Camps
          </Text>
        </View>
        <View style={Styles.containerRow}>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} /> 
        </View>
        <View style={Styles.containerPaddingSmall}>
          <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.props.navigator.pop() }>
            <Text style={Styles.regText}>
              Back
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default TripBaseCamps
