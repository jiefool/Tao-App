import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, TextInput, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import Api from './utilities/Api'


class ApplyNgeyngey extends Component {
  constructor(props) {
    super(props);
    this.state = {  first_name: '',
                    last_name: '',
                    nationality: '',
                    birth_date: '',
                    email: '',
                    toView: 'form'
                  };
  }

  sendApplication(){
    this.setState({toView: 'sending'})
    Api.sendNgeyngeyApplication(this.state.first_name,this.state.last_name,this.state.nationality,this.state.birth_date,this.state.email).then(()=> this.setState({toView: 'thankyou'})) 
  }

  renderView(view){
    switch(view){
      case 'form':
        return(<View style={Styles.textInputWrapper}>
                  <TextInput
                    style={Styles.regTextInput}
                    onChangeText={(first_name) => this.setState({first_name})}
                    value={this.state.first_name}
                    placeholder='First Name'
                  />
                  <TextInput
                    style={Styles.regTextInput}
                    onChangeText={(last_name) => this.setState({last_name})}
                    value={this.state.last_name}
                    placeholder='Last Name'
                  />
                  <TextInput
                    style={Styles.regTextInput}
                    onChangeText={(nationality) => this.setState({nationality})}
                    value={this.state.nationality}
                    placeholder='Nationality'
                  />
                  <TextInput
                    style={Styles.regTextInput}
                    onChangeText={(birth_date) => this.setState({birth_date})}
                    value={this.state.birth_date}
                    placeholder='Birth date'
                  />
                  <TextInput
                    style={Styles.regTextInput}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder='Email'
                    keyboardType='email-address'
                  />
                  <View style={Styles.btnWrapper}>    
                  <View style={Styles.btnBlock}>
                    <Button style={Styles.bText}
                      onPress={()=> this.sendApplication() }
                      title="Apply"
                      color="blue"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View>
                </View>
              </View>)
        break;
      case 'sending':
        return(<Text>Sending application...</Text>)
        break;
      case 'thankyou':
        return (<Text>Thank you! You're application was received. Please check your email for confirmation.</Text>)
        break;
    }
  }
  
  render(){
    return(
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>Apply to Camp Ngeyngey</Text>
        </View>

        <View style={Styles.containerColumn}>
          { this.renderView(this.state.toView) }
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
      </View>
    );
  }
}

export default ApplyNgeyngey
