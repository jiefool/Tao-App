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

import { Actions } from 'react-native-router-flux';
import Styles from './assets/stylesheets/Styles';
import Api from './utilities/Api';



class NewExplorerForm extends Component {
  constructor(props) {
    super(props);
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
    if(this.state.book_ref== '' || this.state.email == ''){
      this.setState({toView: 'fieldError'})
    }else{
      this.setState({toView: 'sending'})
      Api.createLoginExplorer(this.state).then((res)=> {
        console.log(res)
        this.saveExplorerData(res);
      })
    }
  }


  saveExplorerData(explorerData){
    AsyncStorage.setItem('explorerdata', JSON.stringify(explorerData)).then(()=>{
      Actions.liabilitywaiver()
    });
  }

  renderView(view){
    switch(view){
      case 'form':
        return(<ScrollView style={{flex: 1, padding: 10, backgroundColor: "#61c0bf"}}>
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
              onChangeText={(first_name) => this.setState({first_name})}
              value={this.state.first_name}
              underlineColorAndroid = {'white'}
            />
            <Text style={Styles.inputLabelText}>Last Name:</Text>
            <TextInput
              style={Styles.checkInput}
              onChangeText={(last_name) => this.setState({last_name})}
              value={this.state.last_name}
              underlineColorAndroid = {'white'}
            />
            <Text style={Styles.inputLabelText}>Email:</Text>
            <TextInput
              style={Styles.checkInput}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              keyboardType = 'email-address'
              underlineColorAndroid = {'white'}
            />


            <TouchableHighlight
              style={[Styles.menuButton, {alignItems: 'center'}]}
              onPress={() => {this.createLoginExplorer()} }>
                <View style={{height: 50, width: 300, backgroundColor: '#085582', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'rgb(251,224,47)', fontSize: 20, fontWeight: 'bold'}}>
                    Submit
                  </Text>
                </View>
            </TouchableHighlight> 

            <View style={{height: 350}}/>

           
         
        </ScrollView>)
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
      case 'thankyou':
        return (<View style={Styles.centerContent}>
          <Text style={[Styles.bigText, {textAlign: 'center'}]}>Hello {this.state.explorer_data.first_name}, find out the details of your expedition by clicking the button below:</Text>
            <TouchableHighlight
              style={[Styles.menuButton, {alignItems: 'center'}]}
              onPress={() => this.navigate({name: 'yourTaoTrip', data: this.state.explorer_data }) }>
                <View style={{height: 50, width: 300, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[Styles.inputLabelText, {color: 'white'}]}>
                    Go to My Trip
                  </Text>
                </View>
            </TouchableHighlight> 
          </View>)
        break;
      case 'fieldError':
        return(
          <View style={[Styles.centerContent, {alignItems: 'center', justifyContent: 'center', flex: 1}]}>
            <Text style={{textAlign: 'center', fontSize: 20, padding: 20}}>Some fields should not be blank. Please fill-up accordingly.</Text>
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
        <View style={Styles.containerColumnx}>
          { this.renderView(this.state.toView) }
        </View>
      </View>
    );
  }
}

export default NewExplorerForm
