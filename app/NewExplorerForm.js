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
  Button,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import Api from './utilities/Api';
import NavBar from './components/NavBar';
import CusButton from './components/CustomButton';



class NewExplorerForm extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this)
    this.state = {  login: '', 
                    book_ref: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    toView: 'form',
                    explorer_data: {}
                  };
  }

  createLoginExplorer(){
    if(this.state.login == '' && this.state.book_ref=='' && this.state.email == ''){
      this.setState({toView: 'fieldError'})
    }else{
      this.setState({toView: 'sending'})
      Api.createLoginExplorer(this.state).then((res)=> {
          this.setState({toView: 'thankyou', explorer_data: res })
          this.saveExplorerData(res);
      })
    }
  }


  saveExplorerData(explorerData){
    try {
      AsyncStorage.setItem('explorer_data', JSON.stringify(explorerData));
    } catch (error) {
      // Error saving data
    }
  }

  navigate(name){
    this.props.navigator.push({name})
  }

  renderView(view){
    switch(view){
      case 'form':
        return(<ScrollView style={Styles.containerColumn}>
          <Text>Login:</Text>
          <TextInput
            placeholder='Login'
            style={Styles.checkInput}
            onChangeText={(login) => this.setState({login})}
            value={this.state.login}
          />
          <Text>Booking Reference #:</Text>
          <TextInput
            placeholder='Booking Reference #'
            style={Styles.checkInput}
            onChangeText={(book_ref) => this.setState({book_ref})}
            value={this.state.book_ref}
          />
          <Text>First Name:</Text>
          <TextInput
            placeholder='First Name'
            style={Styles.checkInput}
            onChangeText={(first_name) => this.setState({first_name})}
            value={this.state.first_name}
          />
          <Text>Last Name:</Text>
          <TextInput
            placeholder='Last Name'
            style={Styles.checkInput}
            onChangeText={(last_name) => this.setState({last_name})}
            value={this.state.last_name}
          />
          <Text>Email:</Text>
          <TextInput
            placeholder='Email'
            style={Styles.checkInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            keyboardType = 'email-address'
          />


          <Button title='Submit' onPress={()=> {this.createLoginExplorer()}}>
          </Button>
        </ScrollView>)
        break;
      case 'sending':
        return(<View style={Styles.centerContent}>
                <ActivityIndicator
                  animating={this.state.animating}
                  size="large"
                />
                <Text>Fetching information...</Text>
                </View>)
        break;
      case 'thankyou':
        return (<View style={Styles.centerContent}>
          <Text style={[Styles.bigText, {textAlign: 'center'}]}>Hello {this.state.explorer_data.first_name}, find out the details of your expedition by clicking the button below:</Text>
           <TouchableHighlight
            style={[Styles.menuButton, {alignItems: 'center'}]}
            onPress={() => this.navigate({name: 'yourTaoTrip', data: this.state.explorer_data }) }>
              <View style={{height: 50, width: 300, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[Styles.regText, {color: 'white'}]}>
                  Go to My Trip
                </Text>
              </View>
            </TouchableHighlight> 
          </View>)
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
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Your TAO' navigator={this.props.navigator} />
        </View>
      
        <View style={Styles.containerColumn}>
          { this.renderView(this.state.toView) }
        </View>
      </View>
    );
  }
}

export default NewExplorerForm
