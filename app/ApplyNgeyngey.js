import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, TextInput, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import Api from './utilities/Api'
import NavBar from './components/NavBar'


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
        return(<View>
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(first_name) => this.setState({first_name})}
                    value={this.state.first_name}
                    placeholder='First Name'
                  />
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(last_name) => this.setState({last_name})}
                    value={this.state.last_name}
                    placeholder='Last Name'
                  />
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(nationality) => this.setState({nationality})}
                    value={this.state.nationality}
                    placeholder='Nationality'
                  />
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(birth_date) => this.setState({birth_date})}
                    value={this.state.birth_date}
                    placeholder='Birth date'
                  />
                  <TextInput
                    style={Styles.checkInput}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder='Email'
                    keyboardType='email-address'
                  />
                  
                    <TouchableHighlight
                      style={{alignItems: 'center'}}
                      onPress={() => this.sendApplication() }>
                        <View style={Styles.btnWrapper}>
                          <Text style={[Styles.regText, {color: 'white'}]}>
                            Apply Now
                          </Text>
                        </View>
                      </TouchableHighlight> 
                   
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
          <NavBar title='Apply to Ngeyngey' navigator={this.props.navigator} />
        </View>

        <View style={Styles.containerColumn}>
          { this.renderView(this.state.toView) }
        </View>
      </View>
    );
  }
}

export default ApplyNgeyngey
