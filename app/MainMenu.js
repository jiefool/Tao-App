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
    this.state = {explorer_data: {}}
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  getExplorerData(){
    AsyncStorage.getItem("explorer_data").then((value) => {
      if (value != null){
        this.setState({"explorer_data": JSON.parse(value) });
      }
    }).done();
  }

  checkExplorerData(){
    console.log(this.state.explorer_data.book_ref)
    console.log(this.state.explorer_data)
    if(this.state.explorer_data.book_ref === undefined ){
      this.navigate('newExplorerForm')
    }else{
      this.navigate({name: 'yourTaoTrip', data: this.state.explorer_data})
    }
  }

  componentWillMount(){
    this.getExplorerData();
  }
  


  render() {
    return (
      <Image source={require('./assets/images/Tao.img2.jpg')}  style={Styles.container}>
        <View style={Styles.containerPaddingSpacer}>

        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
            <Image source={require('./assets/images/tao_logo.png')}
                      resizeMode='contain'
                      style={Styles.iconStyle}
                    />
          </View>
        </View>

        <View style={Styles.containerRow}>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
            style={Styles.menuButton}
            onPress={() => this.checkExplorerData() }>
            <Image source={require('./assets/images/tao_icon.png')}
                    resizeMode='contain'
                    style={Styles.mainIconStyle}
                  />
            </TouchableHighlight> 
          </View>
          <View style={Styles.containerFirstColumn}>
            <TouchableHighlight
              style={Styles.menuButton}
              onPress={() => this.navigate('taoOffers') }>
                <Image source={require('./assets/images/tao_icon6.png')}
                   resizeMode='contain'
                   style={Styles.mainIconStyle}
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
                    style={Styles.mainIconStyle}
                  />
            </TouchableHighlight>
          </View>
        </View>
      </Image>
    );
  }
}

export default MainMenu
