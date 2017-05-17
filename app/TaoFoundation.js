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

        <ScrollView style={Styles.containerColumn}>
          <Image source={require('./assets/images/tao_foundation_header.png')}
                        style={Styles.showProjectHeader}
                      />
          <View style={Styles.textWrapper}>            
            <Text style={Styles.regText}>Everyone has a different idea of paradise, but what's our definition? Our recent stewardship of a provite tropical island is our chance to explore this. Tao island is a typhoon wrecked boutique resort now taken over by the Lost Boys. It will be a creative playground, designed + built with deep understanding of living on the island. </Text> 
          </View>    
          <View style={Styles.btnWrapper}>    
            <View style={Styles.btnBlock}>
              <Button style={Styles.bText}
                onPress={()=> this.navigate('taoProjects') }
                title="Go to Tao Projects"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

export default TaoFoundation
