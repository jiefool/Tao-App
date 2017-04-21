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
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';

class MainMenu extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }


  navigate(name){
    this.props.navigator.push({name})
  }


  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPadding}>
        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
            style={Styles.menuButton}
            onPress={() => this.navigate('checkin') }>
            <Image source={require('./assets/images/tao_icon.png')}
                    resizeMode='contain'
                    style={Styles.iconStyle}
                  />
          	</TouchableHighlight> 
          </View>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
              style={Styles.menuButton}
              onPress={() => this.navigate('taoOffers') }>
                <Image source={require('./assets/images/tao_icon6.png')}
                   resizeMode='contain'
                   style={Styles.iconStyle}
                  />
              </TouchableHighlight>
            </View>
          </View>        
        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
          	<TouchableHighlight
              style={Styles.menuButton}
              onPress={() => this.navigate('guideToPh') }>
             	<Image source={require('./assets/images/tao_icon4.png')}
                    resizeMode='contain'
                    style={Styles.iconStyle}
                  />
            </TouchableHighlight>
          </View>
        </View>

         <View style={Styles.containerPadding}>
        </View>
        
      </View>
    );
  }
}

export default MainMenu
