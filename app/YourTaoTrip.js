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
var expeditionData = require('./assets/data/expedition.json');

class YourTaoTrip extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }


  componentDidMount(){
    
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  render() {
    return (
      <Image source={require('./assets/images/Tao.img11.jpg')} style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            Your Tao Trip
          </Text>
        </View>
          <ScrollView style={Styles.containerColumn}>
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
                  onPress={() => this.navigate('tripRecipes') }>
                  <Image source={require('./assets/images/tao_recipes_icon.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
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
