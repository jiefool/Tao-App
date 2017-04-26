import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';


class Tao5dayExpedition extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate(name){
    this.props.navigator.push({name})
  }
  
  render(){
    return(
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>Tao 5 Day Expedition</Text>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={require('./assets/images/tao_5dexp_header.png')}
                        style={Styles.showProjectHeader}
                      />
          <View style={Styles.textWrapper}>            
            <Text style={Styles.regText}>Tao Expeditions are 5 days trips that follow Eddies's original route through the remote islands of Northern Palwan. The experience is shared with 22 travellers and 10 local crew, creating enough memories to last a lifetime. Our expeditions are world renowed amongst travellers looking for their own definition of paradise. </Text> 
          </View>    
          
        </ScrollView>
        <View style={Styles.containerPaddingSmall}>
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

export default Tao5dayExpedition
