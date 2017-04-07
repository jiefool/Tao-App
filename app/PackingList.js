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

class PackingList extends Component {

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
     <ListItem item={item.title} description={item.description} onPress={()=>{}} />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>Packing List</Text>
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

export default PackingList
