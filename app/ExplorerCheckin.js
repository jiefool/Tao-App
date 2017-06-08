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
  AsyncStorage
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import DatePicker from 'react-native-datepicker'
import Api from './utilities/Api';
import NavBar from './components/NavBar';

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
    AsyncStorage.getItem("explorer_data").then((value) => {
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


  navigate(name){
    this.props.navigator.push({name})
  }

  sendExplorerCheckIn(){
    this.setState({toView: 'sending'})
    Api.updateExplorer(this.state).then((res) => { 
      AsyncStorage.setItem('explorer_data', JSON.stringify(res));
      this.setState({toView: 'thankyou'})
    });
    //console.log(this.state)
  }


  renderView(view){
    switch(view){
      case 'form':
        return(<ScrollView style={Styles.containerColumnx}>
                <View style={Styles.centerContent}>
                  <Text style={{textAlign: 'left'}}>First Name:</Text>
                  <TextInput
                    placeholder='FIRST NAME:'
                    style={Styles.checkInput}
                    onChangeText={(first_name) => this.setState({first_name: first_name})}
                    value={this.state.first_name}
                  />
                  <Text>Last Name:</Text>
                   <TextInput
                    placeholder='LAST NAME:'
                    style={Styles.checkInput}
                    onChangeText={(last_name) => this.setState( {last_name: last_name})}
                    value={this.state.last_name}
                  />
                  <Text>Middle Name:</Text>
                  <TextInput
                    placeholder='MIDDLE NAME:'
                    style={Styles.checkInput}
                    onChangeText={(middle_name) => this.setState( {middle_name: middle_name})}
                    value={this.state.middle_name}
                  />
                  <Text>Date of Birth:</Text>
                  <DatePicker
                    style={{width: 300}}
                    date={this.state.birth_date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="1920-01-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 80
                      },
                      dateInput: {
                        marginLeft: 120

                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({birth_date: date})}}
                  />
                  <Text>Gender:</Text>
                  <View style= {{alignSelf: 'stretch',alignItems:'center',justifyContent: 'center'}}>
                  <Picker
                    style={{width: 100}}
                    selectedValue={this.state.gender}
                    onValueChange={(gender) => this.setState( {gender: gender})}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                  </View>
                  <Text>Address:</Text>
                  <TextInput
                    placeholder='HOME ADDRESS:'
                    style={Styles.checkInput}
                    onChangeText={(address) => this.setState({address: address})}
                    value={this.state.address}
                  />
                  <Text>Nationality:</Text>
                  <TextInput
                    placeholder='NATIONALITY:'
                    style={Styles.checkInput}
                    onChangeText={(nationality) => this.setState( {nationality: nationality})}
                    value={this.state.nationality}
                  />
                  <Text>Email Address:</Text>
                  <TextInput
                    placeholder='EMAIL ADDRESS:'
                    style={Styles.checkInput}
                    onChangeText={(email) => this.setState({email: email})}
                    value={this.state.email}
                  />
                  <Text>Mobile Number:</Text>
                  <TextInput
                    placeholder='MOBILE NUMBER:'
                    style={Styles.checkInput}
                    onChangeText={(mobile_number) => this.setState( {mobile_number: mobile_number})}
                    value={this.state.mobile_number}
                  />
                  <Text>Passport Number:</Text>
                  <TextInput
                    placeholder='PASSPORT NUMBER:'
                    style={Styles.checkInput}
                    onChangeText={(passport_number) => this.setState({passport_number: passport_number})}
                    value={this.state.passport_number}
                  />
                  <Text>Emergey Contact Person:</Text>
                  <TextInput
                    placeholder='CONTACT PERSON IN CASE OF EMERGENCY:'
                    style={Styles.checkInput}
                    onChangeText={(name) => this.setState( {emergency_contact_person: name})}
                    value={this.state.emergency_contact_person}
                  />
                  <Text>Emergency Contact Person Number:</Text>
                  <TextInput
                    placeholder='CONTACT  NUMBER:'
                    style={Styles.checkInput}
                    onChangeText={(number) => this.setState({emergency_contact_person_number: number})}
                    value={this.state.emergency_contact_person_number}
                  />
                  <Text>Relevant medical condition or dietary restriction:</Text>
                  <TextInput
                    placeholder='RELEVANT MEDICAL CONDOTION OR DIETARY RESTRICTION:'
                    style={Styles.checkInput}
                    onChangeText={(text) => this.setState( {medical_dietary_restriction: text})}
                    value={this.state.medical_dietary_restriction}
                  />
                  <Text>After expedition travel plan or itinerary:</Text>
                  <TextInput
                    placeholder='AFTER EXPEDITION TRAVEL PLAN OR ITINERARY:'
                    style={Styles.checkInput}
                    onChangeText={(text) => this.setState({after_expedition_plan: text})}
                    value={this.state.after_expedition_plan}
                  />
                
                    <Text style={Styles.bigText}>
                    AKNOWLEDGEMENT OF RISK, RESPOSIBILITY AND LIABILITY WAIVER
                    </Text>
                    <Text style={Styles.bigText}>Assumption of Risk:</Text>
                    <Text>I understand that Tao Philippines / Tao LostBoys, Inc. is an adventure campany travelling in a very remote area of the Philippines. I understand that will be in an unfamilliar sorroundings and will be exposed to risks. I understand that i may suffer from physical injury, disease, sickness, damage or loss of my items as a result of my parcitipation in the expedition. I freely and voluntarily accept and assume all such risks, dangers and hazards</Text>
                    <Text style={Styles.bigText}>Responsibility:</Text>
                    <Text>I understand that participants are ultimately responsible for their personal safety and the consequences of their actions. I understand that the expedition leader will discuss points about safety during our briefing and I will pay attention to this points. I also confirm that I have relevant medical / travel insurance that will cover the cost of any medical / emergency action required on my behalf.</Text>
                    <Text style={Styles.bigText}>Liability Waiver:</Text>
                    <Text>I release Tao Philippines/ Tao LostBoys, Inc. and its employees all liability for any loss, damge, injury or expense that i may suffer as a result of my participation in this expidition. </Text>

                </View>  
                  <View style={Styles.centerContent}>
                  <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.sendExplorerCheckIn() }>
                  <Image source={require('./assets/images/button.png')}
                          resizeMode='contain'
                          style={Styles.iconStyle}
                        />
                </TouchableHighlight>
                <Text>BY PRESSING SUBMIT YOU AGREE TO THESE TERMS.</Text>
                </View>  
               </ScrollView>)
        break;
      case 'sending':
        return(<View style={Styles.containerColumn}>
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
        return (<View style={Styles.containerColumn}>
        <View style={Styles.centerContent}>
          <Text style={[Styles.bigText, {textAlign: 'center'}]}>You are now checked-in.</Text>
           <TouchableHighlight
            style={[Styles.menuButton, {alignItems: 'center'}]}
            onPress={() => this.props.navigator.pop() }>
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
       
          <View style={Styles.containerPaddingSmall}>
            <NavBar title='Explorer Checkin' navigator={this.props.navigator}/>
          </View>

          { this.renderView(this.state.toView) } 
      </View>
    );
  }
}

export default ExplorerCheckin
