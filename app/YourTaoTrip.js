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
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import Api from './utilities/Api';
import NavBar from './components/NavBar';
var expeditionData = {};

class YourTaoTrip extends Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
    this.state = { toView: 'menu'}
  }

  navigate(name){
    this.props.navigator.push({name})
  }


  componentWillMount(){
    Api.getExpeditionTrip(this.props.explorerData).then((res)=> { 
      expeditionData = res 
      if (res.id === undefined){
        this.setState({toView: 'no_trip'})
      }
    });
  }
  
  clearUserData(){
    this.setState({toView: 'logout'})
    try {
      AsyncStorage.removeItem('explorer_data').then((res) => {this.setState({toView: 'after_logout'})})
    } catch (error) {
      console.log(error)
    }
  }

  renderView(view){
    switch(view){
      case 'menu':
        return(<ScrollView style={Styles.containerColumnx}>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('taoInfo') }>
                  <Image source={require('./assets/images/tao_ytp.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
               <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('explorerCheckin') }>
                  <Image source={require('./assets/images/tao_ytp2.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('packingList') }>
                  <Image source={require('./assets/images/tao_ytp3.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('taoTenTips') }>
                  <Image source={require('./assets/images/tao_ytp4.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('taoTopRecommendations') }>
                  <Image source={require('./assets/images/tao_ytp6.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate({name: 'tripBoat', data: expeditionData.boat})}>
                  <Image source={require('./assets/images/tao_boat_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
            </View>
               <View style={Styles.containerRow}>
            <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                   onPress={() => this.navigate({name: 'tripCrewList', data: expeditionData.crews})}>
                  <Image source={require('./assets/images/tao_crew_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate({name: 'tripExplorers', data: expeditionData.explorers})}>
                  <Image source={require('./assets/images/tao_explorer_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                 onPress={() => this.navigate({name: 'tripBaseCamps', data: expeditionData.basecamps})}>
                  <Image source={require('./assets/images/tao_basecamps_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>    
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
               onPress={() => this.navigate({name: 'tripStories', data: expeditionData.stories})}>
                  <Image source={require('./assets/images/tao_stories_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                   onPress={() => this.navigate({name: 'tripRecipes', data: expeditionData.recipes})}>
                  <Image source={require('./assets/images/tao_recipes_icon.png')}
                          resizeMode='contain'
                          style={Styles.mainIconStyle}
                        />
                </TouchableHighlight>
              </View>
            </View>

            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.clearUserData()}>
                    <Text>Not you? Press here.</Text>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>)
        break;
      case 'logout':
        return(<View style={Styles.containerColumnx}>
                <View style={Styles.centerContent}>
                <ActivityIndicator
                  animating={this.state.animating}
                  size="large"
                />
                <Text>Logging out...</Text>
                </View>
                </View>)
        break;
      case 'after_logout':
        return (<View style={[Styles.containerColumnx,{backgroundColor: 'white', justifyContent: 'center'}]}>
          <Text style={[Styles.bigText, {textAlign: 'center'}]}>Your are now logout.</Text>
          <Text style={[Styles.smallText, {textAlign: 'center'}]}>It may require you to close the app then open it again to flush previous user data.</Text>
           <TouchableHighlight
            style={[Styles.menuButton, {alignItems: 'center'}]}
            onPress={() => this.props.navigator.popToTop() }>
              <View style={{height: 50, width: 300, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[Styles.regText, {color: 'white'}]}>
                  Back to Main
                </Text>
              </View>
            </TouchableHighlight> 
          </View>)
        break;
      case 'no_trip':
        return(<View style={[Styles.containerColumnx,{backgroundColor: 'white', justifyContent: 'center'}]}>
          <Text style={[Styles.bigText, {textAlign: 'center'}]}>No expedition trip yet associated with your booking number.</Text>
          <Text style={[Styles.smallText, {textAlign: 'center'}]}>Please wait for 1 to 2 days for we may not have arranged your trip yet.</Text>
           <TouchableHighlight
            style={[Styles.menuButton, {alignItems: 'center'}]}
            onPress={() => this.props.navigator.popToTop() }>
              <View style={{height: 50, width: 300, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[Styles.regText, {color: 'white'}]}>
                  Back to Main
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={[Styles.menuButton, {alignItems: 'center'}]}
              onPress={() => this.clearUserData()}>
                <Text>Not you? Press here.</Text>
            </TouchableHighlight>
        
          </View>)
    }
  }

  render() {
    return (
      <Image source={require('./assets/images/Tao.img11.jpg')} style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title={this.props.explorerData.first_name +'\'s Tao Trip'} navigator={this.props.navigator} />
        </View>
         
        { this.renderView(this.state.toView) }
      </Image>
    );
  }
}

export default YourTaoTrip
