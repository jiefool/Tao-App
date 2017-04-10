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
import ProjectItem from './components/ProjectItem'


class TaoProjects extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{'title': 'Bamboo Architecture', 'description':'Bamboo Architecture Description'}, {'title': 'Coral Rehabilitation', 'description':'Coral Rehabilitation Description'}])
    };
  }

  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  _renderItem(item){
    return(
     <ProjectItem item={item.title} description={item.description} onPress={()=>{}} />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            Tao Projects
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

export default TaoProjects
