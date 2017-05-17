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
  ScrollView
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import ListItem from './components/ListItem'
import Api from './utilities/Api';
import NavBar from './components/NavBar';

class TaoTopRecommendations extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([''])
    };
  }

  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    Api.getCheckList().then((res) =>{
      this.setState({
        dataSource: ds.cloneWithRows(res)
      });
    });
  }

  _renderItem(item){
    return(
     <ListItem item={"Items"} description={"Descriptions"} onPress={()=>{}} />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Tao Top Recommendaions' navigator={this.props.navigator}/>
        </View>

        <View style={Styles.containerRow}>
         <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} />
        </View>
      </View>
    );
  }
}

export default TaoTopRecommendations
