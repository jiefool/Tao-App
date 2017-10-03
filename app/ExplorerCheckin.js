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
  Dimensions
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import DatePicker from 'react-native-datepicker'
import Api from './utilities/Api';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const chevronRightIcon = (<FAIcon name="chevron-right" size={40} color="yellow" />)

class ExplorerCheckin extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this)
    this.state = { 
      address: '',
      after_expedition_plan: '',
      book_ref: '',
      birth_date: '',
      email: '',
      emergency_contact_person_number: '',
      emergency_contact_person: '',
      expedition_trip_id: '',
      first_name: '',
      gender: '',
      id: '',
      is_checked_in: true,
      last_name: '',
      login: '',
      medical_dietary_restriction: '',
      middle_name: '',
      mobile_number: '',
      nationality: '',
      passport_number: '',
      toView: 'form'
    }
  }

  componentWillMount(){
    AsyncStorage.getItem("explorerdata").then((value) => {
      if (value != null){
        var explorerData = JSON.parse(value)
        this.setState({ 
          address: explorerData.address,
          after_expedition_plan: explorerData.after_expedition_plan,
          book_ref: explorerData.book_ref,
          birth_date: explorerData.birth_date,
          email: explorerData.email,
          emergency_contact_person_number: explorerData.emergency_contact_person_number,
          emergency_contact_person: explorerData.emergency_contact_person,
          expedition_trip_id: explorerData.expedition_trip_id,
          first_name: explorerData.first_name,
          gender: explorerData.gender,
          id: explorerData.id,
          is_checked_in: true,
          last_name: explorerData.last_name,
          login: explorerData.login,
          medical_dietary_restriction: explorerData.medical_dietary_restriction,
          middle_name: explorerData.middle_name,
          mobile_number: explorerData.mobile_number,
          nationality: explorerData.nationality,
          passport_number: explorerData.passport_number 
        });
      }
    }).done();
  }

  componentDidMount(){
    SplashScreen.hide();
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  sendExplorerCheckIn(){
    this.setState({toView: 'sending'})
    Api.updateExplorer(this.state).then((res) => { 
      AsyncStorage.setItem('explorerdata', JSON.stringify(res));
      this.setState({toView: 'thankyou'})
    });
    //console.log(this.state)
  }


  renderView(view){
    switch(view){
      case 'form':
        return(<ScrollView style={Styles.containerColumnx}>
                <Image source={require('./assets/images/Tao.img6.jpg')}  style={Styles.container}>
                  <Image source={require('./assets/images/tao_logo.png')} style={{width: 200, height: 170, marginTop: 10}}/>
                  <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'ffad_matro-webfont', color: 'white'}}>Check In</Text>
                <View style={{padding: 10}}>
                  <Text style={Styles.inputLabelText}>First Name:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(first_name) => this.setState({first_name: first_name})}
                    value={this.state.first_name}
                  />
                  <Text style={Styles.inputLabelText}>Last Name:</Text>
                   <TextInput
                    style={Styles.checkInput}
                    onChangeText={(last_name) => this.setState( {last_name: last_name})}
                    value={this.state.last_name}
                  />
                  <Text style={Styles.inputLabelText}>Middle Name:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(middle_name) => this.setState( {middle_name: middle_name})}
                    value={this.state.middle_name}
                  />
                  <Text style={Styles.inputLabelText}>Date of Birth:</Text>
                  <DatePicker
                    style={{width: Dimensions.get('window').width-20}}
                    date={this.state.birth_date}
                    mode="date"
                    placeholder="YYYY-MM-DD"
                    format="YYYY-MM-DD"
                    minDate="1920-01-01"
                    maxDate="2016-06-01"
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
                        marginLeft: 0
                      }
                    }}
                    onDateChange={(date) => {this.setState({birth_date: date})}}
                  />
                  <Text style={Styles.inputLabelText}>Gender:</Text>
                  <View style= {{alignSelf: 'stretch',alignItems:'center',justifyContent: 'center'}}>
                  <Picker
                    style={{width: 100, width: Dimensions.get('window').width-20, backgroundColor: 'rgba(255, 255, 255, .5)'}}
                    selectedValue={this.state.gender}
                    onValueChange={(gender) => this.setState( {gender: gender})}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                  </View>
                  <Text style={Styles.inputLabelText}>Address:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(address) => this.setState({address: address})}
                    value={this.state.address}
                  />
                  <Text style={Styles.inputLabelText}>Nationality:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(nationality) => this.setState( {nationality: nationality})}
                    value={this.state.nationality}
                  />
                  <Text style={Styles.inputLabelText}>Email Address:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(email) => this.setState({email: email})}
                    value={this.state.email}
                  />
                  <Text style={Styles.inputLabelText}>Mobile Number:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(mobile_number) => this.setState( {mobile_number: mobile_number})}
                    value={this.state.mobile_number}
                  />
                  <Text style={Styles.inputLabelText}>Passport Number:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(passport_number) => this.setState({passport_number: passport_number})}
                    value={this.state.passport_number}
                  />
                  <Text style={Styles.inputLabelText}>Emergey Contact Person:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(name) => this.setState( {emergency_contact_person: name})}
                    value={this.state.emergency_contact_person}
                  />
                  <Text style={Styles.inputLabelText}>Emergency Contact Person Number:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(number) => this.setState({emergency_contact_person_number: number})}
                    value={this.state.emergency_contact_person_number}
                  />
                  <Text style={Styles.inputLabelText}>Relevant medical condition or dietary restriction:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(text) => this.setState( {medical_dietary_restriction: text})}
                    value={this.state.medical_dietary_restriction}
                  />
                  <Text style={Styles.inputLabelText}>After expedition travel plan or itinerary:</Text>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(text) => this.setState({after_expedition_plan: text})}
                    value={this.state.after_expedition_plan}
                  />
                
                   
                  <View style={{flexDirection: 'column', alignItems: 'flex-end', marginTop: 20}}>
                    <TouchableHighlight
                      style={[Styles.menuButton, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', height: 50, width: 50}]}
                      onPress={() => this.sendExplorerCheckIn() }>
                          <Text style={{color: 'white'}}>
                            {chevronRightIcon}
                          </Text>
                    </TouchableHighlight> 
                  </View>

                </View> 
               </Image>
              </ScrollView>)
        break;
      case 'sending':
        return(<View style={[Styles.containerColumn, {alignItems: 'center', justifyContent: 'center'}]}>
                <View style={Styles.centerContent}>
                        <ActivityIndicator
                          animating={this.state.animating}
                          size="large"
                        />
                        <Text>Fetching information...</Text>
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
      <View style={Styles.container}>
        { this.renderView(this.state.toView) } 
      </View>
    );
  }
}

export default ExplorerCheckin
