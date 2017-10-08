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
  TouchableHighlight,
  TextInput,
  Picker,
  ActivityIndicator,
  AsyncStorage,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import DatePicker from 'react-native-datepicker'
import Styles from './assets/stylesheets/Styles';
import Api from './utilities/Api';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const chevronRightIcon = (<FAIcon name="chevron-right" size={40} color="white" />)
class ExplorerCheckin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      login: '',
      book_ref: '',
      address: '',
      after_expedition_plan: '',
      book_ref: '',
      birth_date: '',
      email: '',
      emergency_contact_person_number: '',
      emergency_contact_person: '',
      expedition_trip_id: '',
      first_name: '',
      gender: 'male',
      id: '',
      is_checked_in: true,
      last_name: '',
      login: '',
      medical_dietary_restriction: '',
      middle_name: '',
      mobile_number: '',
      nationality: '',
      passport_number: '',
      toView: 'sending',
      api_error: '',
      radio_props: [{label: 'Male', value: "male" }, {label: 'Female', value: "female" }]
    }
  }

  componentWillMount(){
    // AsyncStorage.getItem("explorerdata").then((value) => {
    //   if (value != null){
    //     var explorerData = JSON.parse(value)
    //     this.setState({ 
    //       address: explorerData.address,
    //       after_expedition_plan: explorerData.after_expedition_plan,
    //       book_ref: explorerData.book_ref,
    //       birth_date: explorerData.birth_date,
    //       email: explorerData.email,
    //       emergency_contact_person_number: explorerData.emergency_contact_person_number,
    //       emergency_contact_person: explorerData.emergency_contact_person,
    //       expedition_trip_id: explorerData.expedition_trip_id,
    //       first_name: explorerData.first_name,
    //       gender: explorerData.gender,
    //       id: explorerData.id,
    //       is_checked_in: true,
    //       last_name: explorerData.last_name,
    //       login: explorerData.login,
    //       medical_dietary_restriction: explorerData.medical_dietary_restriction,
    //       middle_name: explorerData.middle_name,
    //       mobile_number: explorerData.mobile_number,
    //       nationality: explorerData.nationality,
    //       passport_number: explorerData.passport_number 
    //     });
    //   }
    // }).done();
    AsyncStorage.getItem("explorerdata").then((value) => {
      if (value != ''){ 
        var explorer_data = JSON.parse(value)
        if (explorer_data != null){
          console.log(explorer_data)
          Actions.liabilitywaiver()
        }
      }
    })
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  saveExplorerData(explorerData){
    AsyncStorage.setItem('explorerdata', JSON.stringify(explorerData)).then(function(){
      Actions.liabilitywaiver()
    });
  }

  createLoginExplorer(){
    this.setState({toView: 'sending'})
    Api.createLoginExplorer(this.state).then((res)=> {
      if (res["id"] == null ){
        api_error = ""
        Object.keys(res).forEach(function(key){
          api_error = key + " : " + res[key][0]
        })
        this.setState({api_error: api_error})
        this.setState({toView: "errors"})
      }else{
        this.saveExplorerData(res);
      }
    })
  }

  renderView(view){
    switch(view){
      case 'form':
        return(<ScrollView style={Styles.containerColumnx}>
                <View style={[Styles.container, {backgroundColor: "#085582"}]}>
                  <Image source={require('./assets/images/tao_logo.png')} style={{width: 200, height: 170, marginTop: 10}}/>
                  <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'ffad_matro-webfont', color: 'rgb(251,224,47)'}}>Check In</Text>
                  <TouchableOpacity onPress={() => Actions.login() } style={{padding: 10, borderWidth: 1, borderColor: 'rgb(251,224,47)' }}>
                    <Text style={{color: 'rgb(251,224,47)'}}>
                      Already Checked-In?
                    </Text>
                  </TouchableOpacity>
                  <View style={{padding: 10}}>
                    <Text style={Styles.inputLabelText}>Login:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(login) => this.setState({login})}
                      value={this.state.login}
                      tintColor={"white"}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Booking Reference #:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(book_ref) => this.setState({book_ref})}
                      value={this.state.book_ref}
                       underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>First Name:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(first_name) => this.setState({first_name: first_name})}
                      value={this.state.first_name}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Last Name:</Text>
                     <TextInput
                      style={Styles.checkInput}
                      onChangeText={(last_name) => this.setState( {last_name: last_name})}
                      value={this.state.last_name}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Middle Name:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(middle_name) => this.setState( {middle_name: middle_name})}
                      value={this.state.middle_name}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Date of Birth:</Text>
                    <DatePicker
                      style={{width: Dimensions.get('window').width-20, height: 55}}
                      date={this.state.birth_date}
                      mode="date"
                      format="YYYY-MM-DD"
                      minDate="1920-01-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: "absolute",
                          right: 0,
                          top: 4,
                          marginLeft: 10
                        },
                        dateInput: {
                          marginLeft: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderBottomWidth: 1,
                          borderBottomColor: 'white',
                          height: 50
                        },
                        dateText: {
                          color: 'white',
                          fontSize: 20
                        }
                      }}
                      onDateChange={(date) => {this.setState({birth_date: date})}}
                    />

                    <Text style={Styles.inputLabelText}>Gender:</Text>
                    <View style= {{alignSelf: 'stretch',alignItems:'center',justifyContent: 'center'}}>
                      <RadioForm formHorizontal={true} animation={true} >
                        {this.state.radio_props.map((obj, i) => {
                          var onPress = (value, index) => {
                              this.setState({
                                gender: value
                              })
                            }
                          return (
                            <RadioButton labelHorizontal={true} key={i} >
                              {/*  You can set RadioButtonLabel before RadioButtonInput */}
                              <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.gender === obj.value}
                                onPress={onPress}
                                buttonInnerColor={'white'}
                                buttonOuterColor={'white'}
                                buttonSize={30}
                                buttonStyle={{}}
                                buttonWrapStyle={{marginLeft: 10}}
                              />
                              <RadioButtonLabel
                                obj={obj}
                                index={i}
                                onPress={onPress}
                                labelStyle={{fontSize: 20, color: 'white'}}
                                labelWrapStyle={{padding: 10}}
                              />
                            </RadioButton>
                          )
                        })}
                      </RadioForm>
                    </View>
                    <Text style={Styles.inputLabelText}>Address:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(address) => this.setState({address: address})}
                      value={this.state.address}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Nationality:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(nationality) => this.setState( {nationality: nationality})}
                      value={this.state.nationality}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Email Address:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(email) => this.setState({email: email})}
                      value={this.state.email}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Mobile Number:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(mobile_number) => this.setState( {mobile_number: mobile_number})}
                      value={this.state.mobile_number}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Passport Number:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(passport_number) => this.setState({passport_number: passport_number})}
                      value={this.state.passport_number}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Emergency Contact Person:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(name) => this.setState( {emergency_contact_person: name})}
                      value={this.state.emergency_contact_person}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Emergency Contact Person Number:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(number) => this.setState({emergency_contact_person_number: number})}
                      value={this.state.emergency_contact_person_number}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>Relevant medical condition or dietary restriction:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(text) => this.setState( {medical_dietary_restriction: text})}
                      value={this.state.medical_dietary_restriction}
                      underlineColorAndroid = {'white'}
                    />
                    <Text style={Styles.inputLabelText}>After expedition travel plan or itinerary:</Text>
                    <TextInput
                      style={Styles.checkInput}
                      onChangeText={(text) => this.setState({after_expedition_plan: text})}
                      value={this.state.after_expedition_plan}
                      underlineColorAndroid = {'white'}
                    />
                  
                     
                    <View style={{flexDirection: 'column', alignItems: 'flex-end', marginTop: 20}}>
                      <TouchableHighlight
                        style={{alignItems: 'center', justifyContent: 'center', height: 50, width: 50}}
                        onPress={() => this.createLoginExplorer() }>
                            <Text>
                              {chevronRightIcon}
                            </Text>
                      </TouchableHighlight> 
                    </View>

                  </View> 
                  <View style={{height: 300, flex: 1}}>
                  </View>
                </View>
              </ScrollView>)
        break;
      case 'sending':
        return(<View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator
                  animating={this.state.animating}
                  size="large"
                  color="'rgb(251,224,47)'"
                />
                <Text style={{color: 'rgb(251,224,47)'}}>Sending information...</Text>
              </View>)
        break;
      case 'errors':
        return(<View style={[Styles.containerColumn, {alignItems: 'center', justifyContent: 'center', backgroundColor: '#085582'}]}>
                <View style={Styles.centerContent}>
                  <Text style={{textAlign: 'center', fontSize: 20, color: 'rgb(251,224,47)'}}>Oops! Looks like there is an error. Please fix the following.</Text>
                  <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20, color: 'white', marginBottom: 20}}>{ this.state.api_error }</Text>
                  <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 20}}>
                    <TouchableHighlight
                      style={[Styles.menuButton, {alignItems: 'center', justifyContent: 'center', backgroundColor: '#085582', height: 50, width: 200, borderWidth: 1, borderColor: 'rgb(251,224,47)'}]}
                      onPress={() => this.setState({toView: 'form'}) }>
                          <Text style={{color: 'rgb(251,224,47)', fontSize: 20}}>
                            Try Again
                          </Text>
                    </TouchableHighlight> 
                  </View>
                </View>
              </View>)
        break;
      case 'thankyou':
        return (<View style={[Styles.containerColumn, {alignItems: 'center', justifyContent: 'center'}]}>
        <View style={Styles.centerContent}>
          <Text style={[Styles.bigText, {textAlign: 'center'}]}>You are now checked-in.</Text>
           <TouchableHighlight
            style={[Styles.menuButton, {alignItems: 'center'}]}
            onPress={() => Actions.pop() }>
              <View style={{height: 50, width: 300, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[Styles.regText, {color: 'white'}]}>
                  Back to your trip
                </Text>
              </View>
            </TouchableHighlight> 
          </View>
        </View>)

        break;
    }
  }
  

  render() {
    return (
      <View style={[Styles.container,{backgroundColor: '#085582'}]}>
        { this.renderView(this.state.toView) } 
      </View>
    );
  }
}

export default ExplorerCheckin
