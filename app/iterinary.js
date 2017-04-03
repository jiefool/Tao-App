'use strict';

import React, {Component} from 'react'
import{ StyleSheet, Text, View } from 'react-native'

class Iterinary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Iterinary
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

module.exports = Iterinary;
