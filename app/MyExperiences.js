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
      <View style={Styles.container}>
        <View style={Styles.containerPadding}>
          <Text style={Styles.bigText}>
            My Experiences
          </Text>
        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoInfo') }>
                <Image source={require('./assets/images/tao_boat_icon.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('packingList') }>
                <Image source={require('./assets/images/tao_crew_icon.png')}
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
                onPress={() => this.navigate('taoTenTips') }>
                <Image source={require('./assets/images/tao_explorer_icon.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>    
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoFurtherInfo') }>
                <Image source={require('./assets/images/tao_basecamps_icon.png')}
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
                onPress={() => this.navigate('taoTopRecommendations') }>
                <Image source={require('./assets/images/tao_stories_icon.png')}
                        resizeMode='contain'
                        style={Styles.iconStyle}
                      />
              </TouchableHighlight>
            </View>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.menuButton}
                onPress={() => this.navigate('taoTopRecommendations') }>
                <Image source={require('./assets/images/tao_recipes_icon.png')}
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

export default MyExperiences
