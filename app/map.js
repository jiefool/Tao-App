'use strict';

import React, {Component} from 'react'
import{ StyleSheet, Text, View } from 'react-native'

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Map
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

module.exports = Map;
