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
import MenuButton from './components/MenuButton';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ORIcons from 'react-native-vector-icons/Octicons';
import FDIcons from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const infoIcon = (<FAIcon name="info" size={80} color="yellow" />)
const checkListIcon = (<ORIcons name="checklist" size={80} color="yellow" />)
const briefCaseCheck = (<MCIcon name="briefcase-check" size={80} color="yellow" />)
const lightBulb = (<FDIcons name="lightbulb" size={80} color="yellow" />)
const thumbsUp = (<FAIcon name="thumbs-up" size={80} color="yellow" />)
const shipIcon = (<Ionicons name="ios-boat" size={80} color="yellow" />)
const anchorIcon = (<FAIcon name="anchor" size={80} color="yellow" />)
const footIcon = (<FDIcons name="foot" size={80} color="yellow" />)
const baseCamp = (<Entypo name="basecamp" size={80} color="yellow" />)
const bookIcon  = (<FAIcon name="book" size={80} color="yellow" />)
const silverWare  = (<MCIcon name="silverware" size={80} color="yellow" />)


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
                    <View>
                      <MenuButton menuIcon={infoIcon} menuText="INFO" />
                    </View>
                </TouchableHighlight>
              </View>
               <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('explorerCheckin') }>
                    <View>
                      <MenuButton menuIcon={checkListIcon} menuText="CHECK LIST" />
                    </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('packingList') }>
                    <View>
                      <MenuButton menuIcon={briefCaseCheck} menuText="PACKING LIST" />
                    </View>
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('taoTenTips') }>
                    <View>
                      <MenuButton menuIcon={lightBulb} menuText="TIPS" />
                    </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate('taoTopRecommendations') }>
                    <View>
                      <MenuButton menuIcon={thumbsUp} menuText="SUGGESTIONS" />
                    </View>
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate({name: 'tripBoat', data: expeditionData.boat})}>
                    <View>
                      <MenuButton menuIcon={shipIcon} menuText="SHIP" />
                    </View>
                </TouchableHighlight>
              </View>
            </View>
               <View style={Styles.containerRow}>
            <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                   onPress={() => this.navigate({name: 'tripCrewList', data: expeditionData.crews})}>
                    <View>
                      <MenuButton menuIcon={anchorIcon} menuText="CREWS" />
                    </View>
                </TouchableHighlight>
              </View>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate({name: 'tripExplorers', data: expeditionData.explorers})}>
                    <View>
                      <MenuButton menuIcon={footIcon} menuText="EXPLORERS" />
                    </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                 onPress={() => this.navigate({name: 'tripBaseCamps', data: expeditionData.basecamps})}>
                    <View>
                      <MenuButton menuIcon={baseCamp} menuText="BASECAMPS" />
                    </View>
                </TouchableHighlight>
              </View>    
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => this.navigate({name: 'tripStories', data: expeditionData.stories})}>
                    <View>
                      <MenuButton menuIcon={bookIcon} menuText="STORIES" />
                    </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={Styles.containerRow}>
              <View style={Styles.containerFirstColumn}>
                <View style={Styles.iconSpacing} />
                <TouchableHighlight
                  style={Styles.mainMenuButton}
                   onPress={() => this.navigate({name: 'tripRecipes', data: expeditionData.recipes})}>
                      <View>
                        <MenuButton menuIcon={silverWare} menuText="CREWS" />
                      </View> 
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
