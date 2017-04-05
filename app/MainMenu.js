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
  TouchableHighlight
} from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.containerPadding}>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerFirstColumn}>
             <TouchableHighlight
            style={styles.menuButton}
            onPress={() => this.navigate('yourTaoTrip') }>
            <Image source={require('./assets/images/tao_icon.png')}
                    resizeMode='contain'
                    style={styles.iconStyle}
                  />
          </TouchableHighlight>
             
          </View>

          <View style={styles.containerSecondColumn}>
            <Image source={require('./assets/images/tao_icon2.png')}
                    resizeMode='contain'
                    style={styles.iconStyle}
                  />
          </View>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerSecondColumn}>
             <Image source={require('./assets/images/tao_icon3.png')}
                    resizeMode='contain'
                    style={styles.iconStyle}
                  />
          </View>

          <View style={styles.containerFirstColumn}>
             <Image source={require('./assets/images/tao_icon4.png')}
                    resizeMode='contain'
                    style={styles.iconStyle}
                  />
          </View>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerFirstColumn}>
             <Image source={require('./assets/images/tao_icon5.png')}
                    resizeMode='contain'
                    style={styles.iconStyle}
                  />
          </View>
        </View>

         <View style={styles.containerPadding}>
        </View>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignSelf: 'stretch',
    backgroundColor: "red"
  },
  containerPadding: {
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: "yellow"
  },
  containerFirstColumn: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  containerSecondColumn: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  iconStyle: {
    resizeMode:'contain',
    height: 170,
    width: 170
  }
});

export default MainMenu
