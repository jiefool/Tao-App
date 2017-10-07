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
  Button,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from 'react-native';
import {
  PagerTabIndicator, 
  IndicatorViewPager, 
  PagerTitleIndicator, 
  PagerDotIndicator
} from 'rn-viewpager';

import { Actions } from 'react-native-router-flux';



import Styles from './assets/stylesheets/Styles';
import MenuButton from './components/MenuButton';
import Api from './utilities/Api';
import NavBar from './components/NavBar';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ETIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FNIcon from 'react-native-vector-icons/Foundation';
import ORIcons from 'react-native-vector-icons/Octicons';


const boatIcon = (<MIcon name="directions-boat" size={60} color="yellow" />)
const humanIcon = (<MCIcon name="human-child" size={60} color="yellow" />)
const mapSignIcon = (<FAIcon name="map-signs" size={60} color="yellow" />)
const bookIcon = (<ETIcon name="book" size={60} color="yellow" />)
const envelopIcon = (<FAIcon name="envelope" size={50} color="yellow" />)
const handIcon = (<IonIcon name="ios-hand" size={60} color="yellow" />)
const medicIcon = (<FAIcon name="medkit" size={60} color="yellow" />)
const crossIcon = (<ETIcon name="squared-cross" size={60} color="yellow" />)
const likeIcon = (<FNIcon name="like" size={60} color="yellow" />)
const bundleIcon = (<MCIcon name="humble-bundle" size={60} color="yellow" />)
const langIcon = (<ETIcon name="language" size={60} color="yellow" />)
const torsoIcon = (<FNIcon name="torsos-all" size={60} color="yellow" />)
const infoIcon = (<FAIcon name="info" size={60} color="yellow" />)
const checkListIcon = (<ORIcons name="checklist" size={60} color="yellow" />)
const briefCaseCheck = (<MCIcon name="briefcase-check" size={60} color="yellow" />)
const lightBulb = (<FNIcon name="lightbulb" size={60} color="yellow" />)
const thumbsUp = (<FAIcon name="thumbs-up" size={60} color="yellow" />)
const shipIcon = (<IonIcon name="ios-boat" size={60} color="yellow" />)
const anchorIcon = (<FAIcon name="anchor" size={60} color="yellow" />)
const footIcon = (<FNIcon name="foot" size={60} color="yellow" />)
const baseCamp = (<ETIcon name="basecamp" size={60} color="yellow" />)
const silverWare  = (<MCIcon name="silverware" size={60} color="yellow" />)
const mapIcon  = (<FNIcon name="map" size={60} color="yellow" />)
const logoutIcon = (<MCIcon name="logout" size={60} color="yellow" />)
const refreshIcon = (<MCIcon name="refresh" size={60} color="yellow" />)
const loginIcon = (<MCIcon name="login" size={60} color="yellow" />)
const updateIcon = (<MIcon name="update" size={60} color="yellow" />)
const burnFire = (<IonIcon name="ios-bonfire" size={60} color="yellow" />)

class MainMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
                  explorer_data: {},
                  expeditionData: {},
                  login: '', 
                  book_ref: '',
                  first_name: '',
                  last_name: '',
                  email: '',
                  toView: 'tripdetails'
                }
  }      

  showDetails(action, data){
    if (data != null){
      this.actionSwitch(action, data)
    }else{
      alert("No " + action + " data. Expedtion may not be updated yet. Please check later.")
    }
  }

  actionSwitch(action, data){
    switch(action) {
      case "boat":
        Actions.boat({data: data})
        break;
      case "crews":
        Actions.crews({data: data})
        break;
      case "explorers":
        Actions.explorers({data: data})
        break;
      case "basecamps":
        Actions.basecamps({data: data})
        break;
      case "stories":
        Actions.stories({data: data})
        break;
      case "recipes":
        Actions.recipes({data: data})
        break;
      case "updateexplorer":
        Actions.updateexplorer({data: data})
        break;
      default:
          
    }
  }

  getRemoteExpeditionData(res){
    this.setState({toView: 'sending'})
    Api.getExpeditionTrip(res).then((resx)=> {
      this.saveExpeditionDataToLocal(resx)
      this.setState({expeditionData: resx})
      this.setState({toView: 'tripdetails'})
    })
  }

  async saveExplorerDataToLocal(explorerData){
    await AsyncStorage.setItem('explorerdata', JSON.stringify(explorerData));
  }

  async saveExpeditionDataToLocal(expeditionData){
    await AsyncStorage.setItem('expeditiondata', JSON.stringify(expeditionData));
  }

  async logoutUser(){
    await AsyncStorage.removeItem("explorerdata")
    await AsyncStorage.removeItem("expeditiondata")
    await AsyncStorage.removeItem("accept_liability")
    await AsyncStorage.removeItem("read_founder_letter")
    Actions.reset("checkin");
  }

  refreshExpeditionData(){
    AsyncStorage.getItem("explorerdata").then((value) => {
      if (value != null){
        this.setState({"explorer_data": JSON.parse(value) });
        this.getRemoteExpeditionData(this.state.explorer_data)
      }
    })
  }

  componentWillMount(){
    AsyncStorage.getItem("explorerdata").then((value) => {
      console.log(value)
      if (value != null){
        this.setState({"explorer_data": JSON.parse(value) });

        AsyncStorage.getItem("expeditiondata").then((value) => {
          if (value != null){
            this.setState({"expeditionData": JSON.parse(value) });
          }else{
            this.getRemoteExpeditionData(this.state.explorer_data)
          }
        })

      }
    })
  }

  componentDidMount(){
    viewPager = this.viewPager
    AsyncStorage.getItem("alreadybooked").then((value) => {
      if (value == 'true'){
        AsyncStorage.setItem("alreadybooked", 'false').then(function(){
          viewPager.setPage(1)
        })
      }
    })
  }

  renderView(view){
    switch(view){
      case 'form':
        return(<Image source={require('./assets/images/Tao.img5.jpg')}  style={Styles.container}>
          
          <ScrollView style={[Styles.containerColumnx, {flex: 1, }]}>
            <View style={{marginTop: 30, paddingLeft: 20, paddingRight: 20}}>
            <Text style={[Styles.smallTextLogin, {fontWeight: 'bold', color: 'white', textShadowColor: 'gray', textShadowOffset: {height: 1, width: 1}}]}>Login:</Text>
            <TextInput
              placeholder='Login'
              style={Styles.checkInput}
              onChangeText={(login) => this.setState({login})}
              value={this.state.login}
            />
            <Text style={[Styles.smallTextLogin, {fontWeight: 'bold', color: 'white', textShadowColor: 'gray', textShadowOffset: {height: 1, width: 1}}]}>Booking Reference #:</Text>
            <TextInput
              placeholder='Booking Reference #'
              style={Styles.checkInput}
              onChangeText={(book_ref) => this.setState({book_ref})}
              value={this.state.book_ref}
            />
            <Text style={[Styles.smallTextLogin, {fontWeight: 'bold', color: 'white', textShadowColor: 'gray', textShadowOffset: {height: 1, width: 1}}]}>First Name:</Text>
            <TextInput
              placeholder='First Name'
              style={Styles.checkInput}
              onChangeText={(first_name) => this.setState({first_name})}
              value={this.state.first_name}
            />
            <Text style={[Styles.smallTextLogin, {fontWeight: 'bold', color: 'white', textShadowColor: 'gray', textShadowOffset: {height: 1, width: 1}}]}>Last Name:</Text>
            <TextInput
              placeholder='Last Name'
              style={Styles.checkInput}
              onChangeText={(last_name) => this.setState({last_name})}
              value={this.state.last_name}
            />
            <Text style={[Styles.smallTextLogin, {fontWeight: 'bold', color: 'white', textShadowColor: 'gray', textShadowOffset: {height: 1, width: 1}}]}>Email:</Text>
            <TextInput
              placeholder='Email'
              style={Styles.checkInput}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              keyboardType = 'email-address'
            />


            <TouchableHighlight
              style={[Styles.menuButton, {alignItems: 'center'}]}
              onPress={() => {this.createLoginExplorer()} }>
                <View style={{height: 50, width: 300, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[Styles.regText, {color: 'white'}]}>
                    Submit
                  </Text>
                </View>
            </TouchableHighlight>
            </View>
            <View style={{height: 350}}>
            </View>

          </ScrollView>
  
        </Image>)
        break;
      case 'sending':
        return(<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <ActivityIndicator
                    animating={this.state.animating}
                    size="large"
                  />
                  <Text>Fetching information...</Text>
                </View>)
        break;
      case 'tripdetails':
        return ( <Image source={require('./assets/images/Tao.img5.jpg')}  style={[Styles.container,{padding: 10}]}>
            <View style={Styles.containerRow}>
                 <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.ourstory() }>
                      <View>
                        <MenuButton menuIcon={bookIcon} menuText="OUR STORY" />
                      </View>
                  </TouchableHighlight>
                </View>
                <View style={Styles.containerFirstColumn}>
                  
                </View>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.taooath() }>
                      <View>
                        <MenuButton menuIcon={handIcon} menuText="TAO OATH" />
                    </View>
                  </TouchableHighlight>
                </View>
              </View>

              <View style={Styles.containerRow}>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => Actions.healthandsafety() }>
                    <View>
                      <MenuButton menuIcon={medicIcon} menuText="HEALTH AND SAFETY" />
                    </View>
                  </TouchableHighlight> 
                </View>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.captainsdosanddonts() }>
                      <View>
                        <MenuButton menuIcon={crossIcon} menuText="DOs AND DON'Ts" />
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => Actions.culturaldifferences() }>
                    <View>
                      <MenuButton menuIcon={torsoIcon} menuText="CULTURAL DIFFERENCES" />
                    </View>
                  </TouchableHighlight> 
                </View>
              </View>

              <View style={Styles.containerRow}>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.learntagalog() }>
                      <View>
                        <MenuButton menuIcon={langIcon} menuText="LEARN TAGALOG" />
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => Actions.packinglist() }>
                    <View>
                      <MenuButton menuIcon={bundleIcon} menuText="PACKING LIST" />
                    </View>
                  </TouchableHighlight> 
                </View>

                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.updateexplorer() }>
                      <View>
                        <MenuButton menuIcon={updateIcon} menuText="UPDATE INFO" />
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            
              <View style={Styles.containerRow}>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => this.showDetails("boat", this.state.expeditionData.boat) }>
                      <View>
                        <MenuButton menuIcon={shipIcon} menuText="SHIP" />
                      </View>
                  </TouchableHighlight>
                </View>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                     onPress={() => this.showDetails("crews", this.state.expeditionData.crews) }>
                      <View>
                        <MenuButton menuIcon={anchorIcon} menuText="CREWS" />
                      </View>
                  </TouchableHighlight>
                </View>
                 <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => this.showDetails("explorers", this.state.expeditionData.explorers) }>
                      <View>
                        <MenuButton menuIcon={footIcon} menuText="EXPLORERS" />
                      </View>
                  </TouchableHighlight>
                </View>
              </View>

              <View style={Styles.containerRow}>
                 <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                   onPress={() => this.showDetails("basecamps", this.state.expeditionData.basecamps) }>
                      <View>
                        <MenuButton menuIcon={baseCamp} menuText="BASECAMPS" />
                      </View>
                  </TouchableHighlight>
                </View>  
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => this.showDetails("stories", this.state.expeditionData.stories) }>
                      <View>
                        <MenuButton menuIcon={burnFire} menuText="STORIES" />
                      </View>
                </TouchableHighlight>
                </View>
                 <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                     onPress={() => this.showDetails("recipes", this.state.expeditionData.recipes) }>
                        <View>
                          <MenuButton menuIcon={silverWare} menuText="RECIPES" />
                        </View> 
                  </TouchableHighlight>
                </View>
              </View>
          
              <View style={Styles.containerRow}>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => this.refreshExpeditionData() }>
                      <View>
                        <MenuButton menuIcon={refreshIcon} menuText="REFRESH DATA" />
                      </View>
                  </TouchableHighlight>
                </View>
                <View style={Styles.containerFirstColumn}></View>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => this.logoutUser() }>
                      <View>
                        <MenuButton menuIcon={logoutIcon} menuText="LOGOUT" />
                      </View>
                  </TouchableHighlight>
                </View>
              </View>
            </Image>
        )
        break;
        case 'fieldError':
        return(
          <View style={[Styles.centerContent, {alignItems: 'center'}]}>
            <Text style={[Styles.bigText, {textAlign: 'center'}]}>Some fields should not be blank. Please fill-up accordingly.</Text>
            <View style={{width: 200, marginTop: 10}}>
              <Button title='Try Again'
                onPress={() => this.setState({toView: 'form'}) }>
              </Button>
            </View>
          </View>
        )
        break;
        case 'noData':
        return(
          <View style={[Styles.centerContent, {alignItems: 'center', justifyContent: 'center'}]}>
            <Text style={[Styles.bigText, {textAlign: 'center'}]}>There was no data fetched. Trip details may have not yet updated. Please try again in a day or two.</Text>
            <View style={{width: 200, marginTop: 10}}>
              <Button title='Try Again'
                onPress={() => this.setState({toView: 'form'}) }>
              </Button>
            </View>
          </View>
        )
        break;
    }
  }

  render() {
    return ( 
      <View style={{flex: 1}}>

        <IndicatorViewPager
            style={{flex: 1}}
            ref={viewPager => { this.viewPager = viewPager; }} >

         

          <View>
           { this.renderView(this.state.toView) }
          </View>

        </IndicatorViewPager>
      </View>
    );
  }

 

}

export default MainMenu
