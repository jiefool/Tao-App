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
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
var expeditionData = require('./assets/data/expedition.json');

class YourTaoTrip extends Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
    this.state = { explorer_data: {}}
  }

  navigate(name){
    this.props.navigator.push({name})
  }

  
  clearUserData(){
    try {
      AsyncStorage.removeItem('explorer_data').then(this.props.navigator.popToTop())
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Image source={require('./assets/images/Tao.img11.jpg')} style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            {this.props.explorerData.first_name}'s Tao Trip
          </Text>
        </View>
          <ScrollView style={Styles.containerColumnx}>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.navigate('taoInfo') }>
                  <Image source={require('./assets/images/tao_ytp.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
                </TouchableHighlight>
              </View>
               <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.navigate({name: 'explorerCheckin', data: this.state.explorer_data }) }>
                  <Image source={require('./assets/images/tao_ytp2.png')}
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
                  onPress={() => this.navigate('packingList') }>
                  <Image source={require('./assets/images/tao_ytp3.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.navigate('taoTenTips') }>
                  <Image source={require('./assets/images/tao_ytp4.png')}
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
                  onPress={() => this.navigate('taoTopRecommendations') }>
                  <Image source={require('./assets/images/tao_ytp6.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.navigate({name: 'tripBoat', data: expeditionData.boat})}>
                  <Image source={require('./assets/images/tao_boat_icon.png')}
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
                   onPress={() => this.navigate({name: 'tripCrewList', data: expeditionData.crews})}>
                  <Image source={require('./assets/images/tao_crew_icon.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.navigate({name: 'tripExplorers', data: expeditionData.explorers})}>
                  <Image source={require('./assets/images/tao_explorer_icon.png')}
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
                 onPress={() => this.navigate({name: 'tripBaseCamps', data: expeditionData.basecamps})}>
                  <Image source={require('./assets/images/tao_basecamps_icon.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
                </TouchableHighlight>
              </View>    
              <View style={Styles.containerFirstColumn}>
                <TouchableHighlight
                  style={Styles.menuButton}
               onPress={() => this.navigate({name: 'tripStories', data: expeditionData.stories})}>
                  <Image source={require('./assets/images/tao_stories_icon.png')}
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
                   onPress={() => this.navigate({name: 'tripRecipes', data: expeditionData.recipes})}>
                  <Image source={require('./assets/images/tao_recipes_icon.png')}
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
                  onPress={() => this.clearUserData()}>
                    <Text>Not you? Press here.</Text>
                </TouchableHighlight>
              </View>
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
      </Image>

    );
  }
}

export default YourTaoTrip
