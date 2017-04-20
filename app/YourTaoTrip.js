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

class YourTaoTrip extends Component {
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
          <Text style={Styles.bigText}>
            Your Tao Trip
          </Text>
        </View>

          <View style={Styles.containerRow}>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoInfo') }>
                <Image source={require('./assets/images/tao_ytp.png')}
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
                onPress={() => this.navigate('packingList') }>
                <Image source={require('./assets/images/tao_ytp3.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoTenTips') }>
                <Image source={require('./assets/images/tao_ytp4.png')}
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
                onPress={() => this.navigate('taoFurtherInfo') }>
                <Image source={require('./assets/images/tao_ytp5.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoTopRecommendations') }>
                <Image source={require('./assets/images/tao_ytp6.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>
          </View>



        <View style={Styles.containerPadding}>
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

export default YourTaoTrip
