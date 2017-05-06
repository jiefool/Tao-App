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
  AsyncStorage
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import Api from './utilities/Api';


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
    this.setState({toView: 'sending'})
    Api.createLoginExplorer(this.state).then((res)=> {
        this.setState({toView: 'thankyou', explorer_data: res })
        this.saveExplorerData(res.book_ref);
        console.log(this.state.explorer_data)
    })
  }


  saveExplorerData(bookRef){
    try {
      AsyncStorage.setItem('explorer_book_ref', bookRef);
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
        return(<View style={Styles.containerColumn}>
          <TextInput
            placeholder='Login'
            style={Styles.checkInput}
            onChangeText={(login) => this.setState({login})}
            value={this.state.login}
          />
          <TextInput
            placeholder='Booking Reference #'
            style={Styles.checkInput}
            onChangeText={(book_ref) => this.setState({book_ref})}
            value={this.state.book_ref}
          />
          <TextInput
            placeholder='First Name'
            style={Styles.checkInput}
            onChangeText={(first_name) => this.setState({first_name})}
            value={this.state.first_name}
          />
          <TextInput
            placeholder='Last Name'
            style={Styles.checkInput}
            onChangeText={(last_name) => this.setState({last_name})}
            value={this.state.last_name}
          />
         <TextInput
            placeholder='Email'
            style={Styles.checkInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            keyboardType = 'email-address'
          />

          <View style={Styles.btnWrapper}>    
            <View style={Styles.btnBlock}>
              <Button style={Styles.bText}
                onPress={()=> this.createLoginExplorer() }
                title="Submit"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View> 
        </View>)
        break;
      case 'sending':
        return(<Text>Logging in...</Text>)
        break;
      case 'thankyou':
        return (<View style={Styles.containerColumn}>
          <Text>Hello {this.state.explorer_data.first_name}, find out the details of your expedition by clicking the button below:</Text>
           <TouchableHighlight
            style={Styles.menuButton}
            onPress={() => this.navigate('yourTaoTrip') }>
            <Text>Go to My Trip</Text>
            </TouchableHighlight> 
          </View>)

        break;
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>
            Your TAO
          </Text>
        </View>
      
       
          { this.renderView(this.state.toView) }
    

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

export default NewExplorerForm
