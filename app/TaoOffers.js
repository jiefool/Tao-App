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

class MyExperiences extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  render() {
    return (
      <Image source={require('./assets/images/Tao.img6.jpg')} style={Styles.container}>
        <View style={Styles.containerPadding}>
          <Text style={Styles.bigText}>
            My Experiences
          </Text>
        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('tao5dayExpedition') }>
                <Image source={require('./assets/images/tao_5dexp_icon.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoNorth') }>
                <Image source={require('./assets/images/tao_north_icon.png')}
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
                onPress={() => this.navigate('campNgeyngey') }>
                <Image source={require('./assets/images/tao_island_icon.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>    
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoFoundation') }>
                <Image source={require('./assets/images/tao_foundation_icon.png')}
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
      </Image>
    );
  }
}

export default MyExperiences
