import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';

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
          <NavBar title='5 Day Expeditions' navigator={this.props.navigator}/>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={require('./assets/images/tao_expedition.png')}
                        style={Styles.showProjectHeader}
                      />
          <View style={Styles.textWrapper}>            
            <Text style={Styles.regText}>Tao Expeditions are 5 days trips that follow Eddies's original route through the remote islands of Northern Palwan. The experience is shared with 22 travellers and 10 local crew, creating enough memories to last a lifetime. Our expeditions are world renowed amongst travellers looking for their own definition of paradise. </Text> 
          </View>    
          
        </ScrollView>
      </View>
    );
  }
}

export default Tao5dayExpedition
