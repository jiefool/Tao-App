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

class PackingList extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerPadding}>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerFirstColumn}>
            <TouchableHighlight
              style={styles.menuButton}
              onPress={() => this.navigate('packingList') }>
              <Text>
                Packing List
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.containerFirstColumn}>
            <TouchableHighlight
              style={styles.menuButton}
              onPress={() => this.props.navigator.pop() }>
              <Image source={require('./assets/images/tao_ytp2.png')}
                      resizeMode='contain'
                      style={styles.iconStyle}
                    />
            </TouchableHighlight>
          </View>
        </View>


        <View style={styles.containerPadding}>
          <TouchableHighlight
                style={styles.menuButton}
                onPress={() => this.props.navigator.pop() }>
                <Text style={styles.regText}>
                  Back
                </Text>
              </TouchableHighlight>

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
    flex: 0.2,
    alignSelf: 'stretch',
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: 'center',
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
  },
  regText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default PackingList
