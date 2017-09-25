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

import { 
  KeyboardAwareScrollView 
} from 'react-native-keyboard-aware-scroll-view'

import { Actions } from 'react-native-router-flux';

import SplashScreen from 'react-native-splash-screen';

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
                  toView: 'form'
                }
  }              

  createLoginExplorer(){
    if(this.state.login == '' || this.state.book_ref== '' || this.state.email == ''){
      this.setState({toView: 'fieldError'})
    }else{
      this.setState({toView: 'sending'})
      Api.createLoginExplorer(this.state).then((res)=> {
        console.log(res)
        if (res.id != undefined){
          
          this.saveExplorerDataToLocal(res);
          this.getRemoteExpeditionData(res)
          this.setState({toView: 'tripdetails', explorer_data: res })

        }else{
          this.setState({toView: 'noData'})
        }
      })
    }
  }

  getRemoteExpeditionData(res){
    this.setState({toView: 'sending'})
    Api.getExpeditionTrip(res).then((resx)=> {
      this.saveExpeditionDataToLocal(resx)
      this.setState({expeditionData: resx})
      this.setState({toView: 'tripdetails', explorer_data: res })
    })
  }

  async saveExplorerDataToLocal(explorerData){
    await AsyncStorage.setItem('explorerdata', JSON.stringify(explorerData));
  }

  async saveExpeditionDataToLocal(expeditionData){
    await AsyncStorage.setItem('expeditiondata', JSON.stringify(expeditionData));
  }

  async getLocalExplorerData(){
    await AsyncStorage.getItem("explorerdata").then((value) => {
      if (value != null){
        this.setState({"explorer_data": JSON.parse(value) });
        this.setState({toView: 'tripdetails'})
      }else{
        this.setState({toView: 'form'})
      }
    }).done();
  }

  async getLocalExpeditionData(){
    await AsyncStorage.getItem("expeditiondata").then((value) => {
      if (value != null){
        this.setState({"expeditionData": JSON.parse(value) });
        this.setState({toView: 'tripdetails'})
      }else{
        this.setState({toView: 'form'})
      }
    }).done();
  }

  async logoutUser(){
    await AsyncStorage.removeItem("explorerdata")
    await AsyncStorage.removeItem("expeditiondata")
    this.setState({toView: 'form'})
  }


  componentWillMount(){
    this.getLocalExplorerData();
    this.getLocalExpeditionData()
  }

  componentDidMount(){
    SplashScreen.hide();
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
          <KeyboardAwareScrollView>
          <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
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
          </KeyboardAwareScrollView>
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
                  <TouchableHighlight
                  style={Styles.mainMenuButton}
                  onPress={() => Actions.founderletter() }>
                    <View>
                      <MenuButton menuIcon={envelopIcon} menuText="LETTER FROM THE FOUNDER" />
                    </View>
                  </TouchableHighlight> 
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
                    onPress={() => Actions.taotoprecommendations() }>
                      <View>
                        <MenuButton menuIcon={likeIcon} menuText="TOP RECOMMENDATIONS" />
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            
              <View style={Styles.containerRow}>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.boat({data: this.state.expeditionData.boat})}>
                      <View>
                        <MenuButton menuIcon={shipIcon} menuText="SHIP" />
                      </View>
                  </TouchableHighlight>
                </View>
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                     onPress={() => Actions.crews({data: this.state.expeditionData.crews}) }>
                      <View>
                        <MenuButton menuIcon={anchorIcon} menuText="CREWS" />
                      </View>
                  </TouchableHighlight>
                </View>
                 <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.explorers({data: this.state.expeditionData.explorers})}>
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
                   onPress={() => Actions.basecamps({data: this.state.expeditionData.basecamps})}>
                      <View>
                        <MenuButton menuIcon={baseCamp} menuText="BASECAMPS" />
                      </View>
                  </TouchableHighlight>
                </View>  
                <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                    onPress={() => Actions.stories({data: this.state.expeditionData.stories})}>
                      <View>
                        <MenuButton menuIcon={bookIcon} menuText="STORIES" />
                      </View>
                </TouchableHighlight>
                </View>
                 <View style={Styles.containerFirstColumn}>
                  <TouchableHighlight
                    style={Styles.mainMenuButton}
                     onPress={() => Actions.recipes({data: this.state.expeditionData.recipes})}>
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
                    onPress={() => this.getRemoteExpeditionData(this.state.explorer_data) }>
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
            ref={viewPager => { this.viewPager = viewPager; }}
            indicator={this._renderDotIndicator()}>

          <View>
            <ScrollView style={{backgroundColor:'cornflowerblue'}}>
              <TouchableHighlight onPress={() => Actions.taoexpage() }>
                <Image source={require('./assets/images/tao_expedition.png')}  style={Styles.taoProducts}>
                  <Text style={Styles.productTitles}>Tao Expeditions</Text>
                </Image>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => Actions.sailing() }>
                <Image source={require('./assets/images/tao_sailing.png')}  style={Styles.taoProducts}>
                  <Text style={Styles.productTitles}>Tao Sailing Experience</Text>
                </Image>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => Actions.island() }>
                <Image source={require('./assets/images/tao_island.png')}  style={Styles.taoProducts}>
                  <Text style={Styles.productTitles}>Tao Island</Text>
                </Image>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => Actions.trek() }>
                <Image source={require('./assets/images/tao_trek.png')}  style={Styles.taoProducts}>
                  <Text style={Styles.productTitles}>Tao Treks</Text>
                </Image>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => Actions.gathering() }>
                <Image source={require('./assets/images/tao_gathering.png')}  style={Styles.taoProducts}>
                  <Text style={Styles.productTitles}>Tao Gatherings</Text>
                </Image>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => Actions.foundation() }>
                <Image source={require('./assets/images/tao_foundation.png')}  style={Styles.taoProducts}>
                  <Text style={Styles.productTitles}>Tao Kalahi Foundation</Text>
                </Image>
              </TouchableHighlight>
            </ScrollView>
          </View>

          <View>
           { this.renderView(this.state.toView) }
          </View>

          <View>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'black'}}>
              <Text style={{fontSize: 40, textAlign: 'center', fontFamily: 'ffad_matro-webfont', color: 'yellow'}}>Travel App coming soon!</Text>
            </View>
          </View>

        </IndicatorViewPager>
      </View>
    );
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

}

export default MainMenu
