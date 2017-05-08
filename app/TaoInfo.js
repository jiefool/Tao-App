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
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';


class TaoInfo extends Component {
  render() {
    return (
      <Image source={require('./assets/images/Tao.img8.jpg')} style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            Useful Info
          </Text>
        </View>
        <ScrollView style={Styles.containerColumn}>
          <View style={Styles.textWrapper}>
            <Text style={Styles.headerText}>FOOD AND DIETRY REQUIREMENTS</Text>
            <Text style={Styles.descriptionText}>
              Our menu is based on traditional Filipino cooking using fresh seafoods, vegetables, fruits and rice. Chicken or pork will also be served if livestock is available in the islands. The chef always serves fruit and vegetable dishes so there is no need to inform us in advance if you are vegetarian or vegan. There will be numerous healthy dishes for you to enjoy.
              There are no peanuts used in our cooking and our menu is mostly gluten free. Please note that our chefs do not change their recipes or menu to accommodate any dietary preferences, our policy is eat what you want and leave the rest!!
              There is plenty of drinking water onboard. Brewed coffee and ginger tea are always available.
            </Text>
            <Text style={Styles.headerText}>ALCOHOL</Text>
            <Text style={Styles.descriptionText}>
              We provide a couple of extra bottles of rum on board for some cocktails at sundown. If you would like any other soft drinks or Alcohol, please place our order and pay in the office before departure. Your drinks will be delivered directly to the boat and can be checked before departure. It is important to order enough drinks for the duration of the trip as there are few opportunities to buy extra in the islands.
              Avoid 'Alcohol Politics'[who drank what, my beer/ your beer] by ordering more than you think you will normally drink.{'\n'}             
            </Text>
            <Text style={Styles.headerText}> DRINK LIST:</Text>
            <Text style={Styles.descriptionText}>
              We recommend 1x case of beer + 1x bottle of rum + 2x mixers per person, remember you dont have to drink it all!!{'\n'}
              San Miguel Pilsen [24 x 330ml bottles]{'\n'}
              San Miguel Light [24 x 330ml bottles]{'\n'}
              Red Horse [24 x 330ml bottles]{'\n'}
              Tanduay Rum 750ml{'\n'}
              Del monte Pineapple juice[1 litre can]{'\n'}
              Coke-Cola [1.5 litre bottle]{'\n'}
              Sprite [1.5 litre bottle]{'\n'} 
            </Text>
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

export default TaoInfo
