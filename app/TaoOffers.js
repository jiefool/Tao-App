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
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';

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
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Tao Experience' navigator={this.props.navigator}/>
        </View>
        <ScrollView style={Styles.containerColumnx}>
          <View style={Styles.containerRow}>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.mainMenuButton}
                onPress={() => this.navigate('tao5dayExpedition') }>
                <Image source={require('./assets/images/tao_5dexp_icon.png')}
                        resizeMode='contain'
                        style={Styles.mainIconStyle}
                      />
              </TouchableHighlight>
            </View>
            <View style={Styles.containerFirstColumn}>
              <TouchableHighlight
                style={Styles.mainMenuButton}
                onPress={() => this.navigate('taoNorth') }>
                <Image source={require('./assets/images/tao_north_icon.png')}
                        resizeMode='contain'
                        style={Styles.mainIconStyle}
                      />
              </TouchableHighlight>
            </View>
          </View>

            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('campNgeyngey') }>
                  <Image source={require('./assets/images/tao_island_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>    
              <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('taoFoundation') }>
                  <Image source={require('./assets/images/tao_foundation_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
      </Image>
    );
  }
}

export default MyExperiences
