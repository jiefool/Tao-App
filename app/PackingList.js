/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';


import ListItem from './components/ListItem'
import Api from './utilities/Api';
import Styles from './assets/stylesheets/Styles';
var checkListData = require('./assets/data/check_lists.json');
import NavBar from './components/NavBar';

class PackingList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(checkListData)
    };
  }

  // componentWillMount(){
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   Api.getCheckList().then((res) =>{
  //     this.setState({
  //       dataSource: ds.cloneWithRows(res)
  //     });
  //   });
  // }

  _renderItem(item){
    return(
     <ListItem item={item.title} description={item.description} onPress={()=>{}} />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Packing List' navigator={this.props.navigator}/>
        </View>

        <View style={Styles.alignLeftList}>
         <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} />
        </View>
      </View>
    );
  }
}

export default PackingList
