import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Styles from './assets/stylesheets/Styles';

class ShowTripRecipe extends Component {
  render(){
    return(
        <View style={Styles.container}>
        <ScrollView style={Styles.containerColumn}>
          <Image source={{uri: 'https://taotechph.com' + this.props.data.recipe_medium }}
                        style={Styles.showProjectIcon}
                      />

            <View style={{padding: 10}}>
              <View style={Styles.textWrapper}>
                <Text style={Styles.bigText}>{this.props.data.name}</Text> 
                <Text style={Styles.regText}>{this.props.data.description}</Text> 
              </View>
              <Text style={[Styles.smallText, {textAlign: 'left'}]}>{this.props.data.ingredients}</Text> 
              <Text style={[Styles.smallText, {textAlign: 'left'}]}>{this.props.data.preparation}</Text> 
            </View>
                
        </ScrollView>

      </View>
    );
  }
}

export default ShowTripRecipe
