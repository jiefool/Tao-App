import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Styles from './assets/stylesheets/Styles';
import Communications from 'react-native-communications';
const { width, height } = Dimensions.get('window');
import Hyperlink from 'react-native-hyperlink'


class TopRecommendationDetails extends Component {
   _require_image(image){
    switch(image){
      case 'manila.jpg':
        return require('./assets/images/manila.jpg')
        break
      case 'puerto_princesa.jpg':
        return require('./assets/images/puerto_princesa.jpg')
        break
      case 'elnido.jpg':
        return require('./assets/images/elnido.jpg')
        break
      case 'coron.jpg':
        return require('./assets/images/coron.jpg')
        break
    }
  }


  urlAndTextReplace(url){
    for (let link of this.props.data.links) {
      if (url == link.url){
        return link.text
      }
    }
  }

  render(){
    
    parsed_content = ""
    if (this.props.data.content != undefined){ 
      

      parsed_content =
        <View>
          <Hyperlink
            linkStyle={ { color: '#2980b9', fontSize: 20 } }
            linkText={ url =>  this.urlAndTextReplace(url)}
            onPress = { url =>  Communications.web(url) } >

            <Text style={{padding: 10, fontSize: 18}}>
              { this.props.data.content }
            </Text>

          </Hyperlink>

          <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>
        </View>

      
    }
  

    return(
      <ScrollView>
        <Image source={this._require_image(this.props.data.image)} style={{height: 250, width: width}}/>
       
        {parsed_content}
       
        <View style={{height: 100}} />
      </ScrollView>
    );
  }
}

export default TopRecommendationDetails
