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
import ProjectItem from './components/ProjectItem';
import Api from './utilities/Api';


class TripStories extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([''])
    };
    this.navigate = this.navigate.bind(this)
  }

  navigate(name){
    this.props.navigator.push({name})
  }

  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    Api.getTaoProjects().then((res) =>{
      this.setState({
        dataSource: ds.cloneWithRows(res)
      });
    });
  }

  _renderItem(data){
    return(
     <ProjectItem projectData = {data} 
        onPress={()=> this.navigate({name: 'showTaoProject', data: data}) }/>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            Trip Stories
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

export default TripStories
