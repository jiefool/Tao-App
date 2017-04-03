'use strict';

import React, {Component} from 'react'
import{ StyleSheet, Text, View } from 'react-native'

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Menu
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

module.exports = Menu;
