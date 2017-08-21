import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';


class TaoFoundation extends Component {
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
            <NavBar title='Tao Foundation' navigator={this.props.navigator}/>
          </View>

          <ScrollView style={{flex: 1}}>
            <View style={{alignItems: 'center', paddingBottom: 20, flex: 1}}>
            <Image source={require('./assets/images/tao_foundation.png')} originalWidth={400} originalHeight={300} style={{ borderWidth: 0, resizeMode: 'cover'}}/>
            
              <View style={Styles.textWrapper}>            
                <Text style={Styles.regText}>Everyone has a different idea of paradise, but what's our definition? Our recent stewardship of a provite tropical island is our chance to explore this. Tao island is a typhoon wrecked boutique resort now taken over by the Lost Boys. It will be a creative playground, designed + built with deep understanding of living on the island. </Text> 
              </View>    
              
              <TouchableHighlight
                style={{alignItems: 'center'}}
                onPress={()=> this.navigate('taoProjects') }>
                <View style={Styles.btnWrapper}>
                  <Text style={[Styles.regText, {color: 'white'}]}>
                    Go to Tao Projects
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
    );
  }
}

export default TaoFoundation
