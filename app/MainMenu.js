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
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MenuButton from './components/MenuButton';
const boatIcon = (<MIcon name="directions-boat" size={80} color="yellow" />)
const humanIcon = (<MCIcon name="human-child" size={80} color="yellow" />)



class MainMenu extends Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
    this.state = {explorer_data: {}}
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  getExplorerData(){
    AsyncStorage.getItem("explorer_data").then((value) => {
      if (value != null){
        this.setState({"explorer_data": JSON.parse(value) });
      }
    }).done();
  }

  checkExplorerData(){
    console.log(this.state.explorer_data.book_ref)
    console.log(this.state.explorer_data)
    if(this.state.explorer_data.book_ref === undefined ){
      this.navigate('newExplorerForm')
    }else{
      this.navigate({name: 'yourTaoTrip', data: this.state.explorer_data})
    }
  }

  componentWillMount(){
    this.getExplorerData();
  }
  


  render() {
    return (
      <Image source={require('./assets/images/Tao.img2.jpg')}  style={Styles.container}>
        <View style={Styles.containerPaddingSpacer}>

        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
            <Image source={require('./assets/images/tao_logo.png')}
                      resizeMode='contain'
                      style={Styles.iconStyle}
                    />
          </View>
        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
            style={Styles.mainMenuButton}
            onPress={() => this.checkExplorerData() }>
              <View>
                <MenuButton menuIcon={boatIcon} menuText="MY TAO TRIP" />
              </View>
            </TouchableHighlight> 
          </View>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
              style={Styles.mainMenuButton}
              onPress={() => this.navigate('taoOffers') }>
                <View>
                  <MenuButton menuIcon={humanIcon} menuText="ABOUT TAO" />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
          	<TouchableHighlight
              style={Styles.mainMenuButton}
              onPress={() => this.navigate('guideToPh') }>
             	<Image source={require('./assets/images/tao_icon4.png')}
                    resizeMode='contain'
                    style={Styles.mainIconStyle}
                  />
            </TouchableHighlight>
          </View>
        </View>
      </Image>
    );
  }
}

export default MainMenu
