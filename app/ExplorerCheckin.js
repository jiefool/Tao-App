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
  Picker
} from 'react-native';

import Styles from './assets/stylesheets/Styles';

class ExplorerCheckin extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this)
    this.state = { 
      address: this.props.explorerData.address,
      after_expedition_plan: this.props.explorerData.after_expedition_plan,
      book_ref: this.props.explorerData.book_ref,
      email: this.props.explorerData.email,
      emergecy_contact_person_number: this.props.explorerData.emergecy_contact_person_number,
      emergency_contact_person: this.props.explorerData.emergency_contact_person,
      expedition_trip_id: this.props.explorerData.expedition_trip_id,
      first_name: this.props.explorerData.first_name,
      gender: this.props.explorerData.gender,
      id: this.props.explorerData.id,
      is_checked_in: this.props.explorerData.is_checked_in,
      last_name: this.props.explorerData.last_name,
      login: this.props.explorerData.login,
      medical_dietary_restriction: this.props.explorerData.medical_dietary_restriction,
      middle_name: this.props.explorerData.middle_name,
      mobile_number: this.props.explorerData.mobile_number,
      nationality: this.props.explorerData.nationality,
      passport_number: this.props.explorerData.passport_number
    }
  }


  navigate(name){
    this.props.navigator.push({name})
  }

  sendExplorerCheckIn(){
    this.setState({is_checked_in: 1})
    console.log(this.state.explorer_data)
  }

  

  render() {
    return (
      <View style={Styles.container}>
       
          <View style={Styles.containerPaddingSmall}>
           <Text style={Styles.bigText}>
            Explorer Checkin
            </Text>
          </View>
           <ScrollView style={Styles.containerColumnx}>
                <View style={Styles.centerContent}>
                  <Text style={{textAlign: 'left'}}>First Name:</Text>
                  <TextInput
                    placeholder='FIRST NAME:'
                    style={Styles.checkInput}
                    onChangeText={(first_name) => this.setState({first_name: first_name})}
                    value={this.state.explorer_data.first_name}
                  />
                  <Text>Last Name:</Text>
                   <TextInput
                    placeholder='LAST NAME:'
                    style={Styles.checkInput}
                    onChangeText={(last_name) => this.setState( {last_name: last_name})}
                    value={this.state.explorer_data.last_name}
                  />
                  <Text>Middle Name:</Text>
                  <TextInput
                    placeholder='MIDDLE NAME:'
                    style={Styles.checkInput}
                    onChangeText={(middle_name) => this.setState( {middle_name: middle_name})}
                    value={this.state.explorer_data.middle_name}
                  />
                  <Text>Date of Birth:</Text>
                  <TextInput
                    placeholder='DATE OF BIRTH (MM/DD/YYYY):'
                    style={Styles.checkInput}
                    onChangeText={(birth_date) => this.setState({birth_date})}
                    value={this.state.explorer_data.birth_date}
                  />
                  <Text>Gender:</Text>
                  <Picker
                    style={{width: 100}}
                    selectedValue={this.state.explorer_data.gender}
                    onValueChange={(gender) => this.setState( {gender: gender})}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                  <Text>First Name:</Text>
                  <TextInput
                    placeholder='HOME ADDRESS:'
                    style={Styles.checkInput}
                    onChangeText={(address) => this.setState({address: address})}
                    value={this.state.explorer_data.address}
                  />
                  <Text>Nationality:</Text>
                  <TextInput
                    placeholder='NATIONALITY:'
                    style={Styles.checkInput}
                    onChangeText={(nationality) => this.setState( {nationality: nationality})}
                    value={this.state.explorer_data.nationality}
                  />
                  <Text>Email Address:</Text>
                  <TextInput
                    placeholder='EMAIL ADDRESS:'
                    style={Styles.checkInput}
                    onChangeText={(email) => this.setState({email: email})}
                    value={this.state.explorer_data.email}
                  />
                  <Text>Mobile Number:</Text>
                  <TextInput
                    placeholder='MOBILE NUMBER:'
                    style={Styles.checkInput}
                    onChangeText={(mobile_number) => this.setState( {mobile_number: mobile_number})}
                    value={this.state.explorer_data.mobile_number}
                  />
                  <Text>Passport Number:</Text>
                  <TextInput
                    placeholder='PASSPORT NUMBER:'
                    style={Styles.checkInput}
                    onChangeText={(passport_number) => this.setState({passport_number: passport_number})}
                    value={this.state.explorer_data.passport_number}
                  />
                  <Text>Emergey Contact Person:</Text>
                  <TextInput
                    placeholder='CONTACT PERSON IN CASE OF EMERGENCY:'
                    style={Styles.checkInput}
                    onChangeText={(name) => this.setState( {emergency_contact_person: name})}
                    value={this.state.explorer_data.emergency_contact_person}
                  />
                  <Text>Emergency Contact Person Number:</Text>
                  <TextInput
                    placeholder='CONTACT  NUMBER:'
                    style={Styles.checkInput}
                    onChangeText={(number) => this.setState({emergency_contact_person_number: number})}
                    value={this.state.explorer_data.emergency_contact_person_number}
                  />
                  <Text>Relevant medical condition or dietary restriction:</Text>
                  <TextInput
                    placeholder='RELEVANT MEDICAL CONDOTION OR DIETARY RESTRICTION:'
                    style={Styles.checkInput}
                    onChangeText={(text) => this.setState( {medical_dietary_restriction: text})}
                    value={this.state.explorer_data.medical_dietary_restriction}
                  />
                  <Text>After expedition travel plan or itinerary:</Text>
                  <TextInput
                    placeholder='AFTER EXPEDITION TRAVEL PLAN OR ITINERARY:'
                    style={Styles.checkInput}
                    onChangeText={(text) => this.setState({after_expedition_plan: text})}
                    value={this.state.explorer_data.after_expedition_plan}
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
          <View style={Styles.containerPaddingSmall}>
            <TouchableHighlight
                  style={Styles.menuButton}
                  onPress={() => this.props.navigator.pop() }>
              <Text style={Styles.regText}>
                Back
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ExplorerCheckin
