/**
 * Tao Kalahi App
 * Developed by: Bagol Labs Robotics & IT Solutions
 * bagollabs.com
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  Stylesheet,
  View,
  Text,
  Image,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';

class MainMenu extends Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
    this.state = {explorer_book_ref: ''}
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  getExplorerData(){
     AsyncStorage.getItem("explorer_book_ref").then((value) => {
        if (value != null){
          this.setState({"explorer_book_ref": value });
        }
    }).done();
    
  }

  checkExplorerData(){
    this.getExplorerData();
    if(this.state.explorer_book_ref == ''){
      this.navigate('newExplorerForm')
    }else{
      this.navigate('yourTaoTrip')
    }
  }
  


  render() {
    return (
      <Image source={require('./assets/images/Tao.img2.jpg')}  style={Styles.container}>
        <View style={Styles.containerPadding}>
        </View>
        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
            style={Styles.menuButton}
            onPress={() => this.checkExplorerData() }>
            <Image source={require('./assets/images/tao_icon.png')}
                    resizeMode='contain'
                    style={Styles.iconStyle}
                  />
          	</TouchableHighlight> 
          </View>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
              style={Styles.menuButton}
              onPress={() => this.navigate('taoOffers') }>
                <Image source={require('./assets/images/tao_icon6.png')}
                   resizeMode='contain'
                   style={Styles.iconStyle}
                  />
              </TouchableHighlight>
            </View>
          </View>        
        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
          	<TouchableHighlight
              style={Styles.menuButton}
              onPress={() => this.navigate('guideToPh') }>
             	<Image source={require('./assets/images/tao_icon4.png')}
                    resizeMode='contain'
                    style={Styles.iconStyle}
                  />
            </TouchableHighlight>
          </View>
        </View>
         <View style={Styles.containerPadding}>
        </View>
        
      </Image>
    );
  }
}

export default MainMenu
