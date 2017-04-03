'use strict';

import React, {Component} from 'react'
import{ StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          News
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

module.exports = News;
