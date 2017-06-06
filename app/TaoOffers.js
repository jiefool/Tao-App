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
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';
import MenuButton from './components/MenuButton';




import MIcon from 'react-native-vector-icons/MaterialIcons';
import FDIcon from 'react-native-vector-icons/Foundation';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';


const exploreIcon = (<MIcon name="explore" size={80} color="yellow" />)
const mountainIcon = (<FDIcon name="mountains" size={80} color="yellow" />)
const beachIcon = (<MCIcon name="beach" size={80} color="yellow" />)
const handshakeIcon = (<FAIcon name="handshake-o" size={80} color="yellow" />)






class MyExperiences extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  render() {
    return (
      <Image source={require('./assets/images/Tao.img6.jpg')} style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Tao Experience' navigator={this.props.navigator}/>
        </View>
        <ScrollView style={Styles.containerColumnx}>
          <View style={Styles.containerRow}>
            <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
              <TouchableHighlight
                style={Styles.mainMenuButton}
                onPress={() => this.navigate('tao5dayExpedition') }>
                <View>
                  <MenuButton menuIcon={exploreIcon} menuText="5 DAY EXP" />
                </View>
              </TouchableHighlight>
            </View>
            <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
              <TouchableHighlight
                style={Styles.mainMenuButton}
                onPress={() => this.navigate('taoNorth') }>
                <View>
                  <MenuButton menuIcon={mountainIcon} menuText="TAO NORTH" />
                </View>
              </TouchableHighlight>
            </View>
          </View>

            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('campNgeyngey') }>
                  <View>
                    <MenuButton menuIcon={beachIcon} menuText="TAO ISLAND" />
                </View>
                </TouchableHighlight>
              </View>    
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('taoFoundation') }>
                  <View>
                    <MenuButton menuIcon={handshakeIcon} menuText="TAO FOUNDATION" />
                </View>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
      </Image>
    );
  }
}

export default MyExperiences
