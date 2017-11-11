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
      case 'zhostel.jpg':
        return require('./assets/images/zhostel.jpg')
        break
      case 'black_market.png':
        return require('./assets/images/black_market.png')
        break
      case 'museum.jpg':
        return require('./assets/images/museum.jpg')
        break
      case 'food.png':
        return require('./assets/images/food.png')
        break
      case 'intramuros.jpg':
        return require('./assets/images/intramuros.jpg')
        break
      case 'manila_traffic.jpg':
        return require('./assets/images/manila_traffic.jpg')
        break
      case 'puerto_princesa.jpg':
        return require('./assets/images/puerto_princesa.jpg')
        break
      case 'elnido.jpg':
        return require('./assets/images/elnido.jpg')
        break
      case 'lost_boys.jpg':
        return require('./assets/images/lost_boys.jpg')
        break
      case 'campngeyngey.jpg':
        return require('./assets/images/campngeyngey.jpg')
        break
      case 'tao_foundation.png':
        return require('./assets/images/tao_foundation.png')
        break
      case 'Tao.img10.jpg':
        return require('./assets/images/Tao.img10.jpg')
        break
      case 'tao_sailing.png':
        return require('./assets/images/tao_sailing.png')
        break
      case 'tao_farming.jpg':
        return require('./assets/images/tao_farming.jpg')
        break
      case 'women_livelihood.jpg':
        return require('./assets/images/women_livelihood.jpg')
        break
    }
  }


  urlAndTextReplace(url){
    switch(url){
      case "https://zhostel.com":
        return 'Z hostel'
        break
      case "https://www.facebook.com/AlamatFilipinoPub":
        return 'Alamat'
        break
    }
    // url === '' ?  : url
    // url === 'https://www.facebook.com/finderskeepersMNL' ? 'Finders Keepers MNL' : url
    // url === 'https://www.facebook.com/blackmarketmnl' ? 'Black Market MNL' : url
    // url === 'https://www.facebook.com/2020bar' ? '2020 Bar' : url
    // url === 'https://www.facebook.com/obarphilippines' ? 'Obar Philippines' : url
    // url === 'https://www.facebook.com/TIMEinManila' ? 'Time in Manila' : url
  }

  render(){
    


    subContents = []
    if (this.props.data.sub_contents != undefined){ 
      for(let i=0;i<this.props.data.sub_contents.length;i++){
        links = [] 
        for(let x=0;x<this.props.data.sub_contents[i].links.length;x++){
          links.push(
            <TouchableOpacity key={x} activeOpacity={0.5} onPress={() => Communications.web(this.props.data.sub_contents[i].links[x].link) }>
              <Text style={{paddingLeft: 20, fontSize: 15, color: 'blue'}}>{this.props.data.sub_contents[i].links[x].title}</Text>
            </TouchableOpacity>
          )
        }
        subContents.push(
          <View key={i}>
            <TouchableOpacity key={i} activeOpacity={0.5} onPress={() => Communications.web(this.props.data.sub_contents[i].link) }>
            </TouchableOpacity>
            <Hyperlink
              linkStyle={ { color: '#2980b9', fontSize: 20 } }
              linkText={ url =>  this.urlAndTextReplace(url)}
              onPress = { url =>  Communications.web(url) }
            >
              <Text style={{padding: 10, fontSize: 18}}>
                { this.props.data.sub_contents[i].content }
              </Text>
            </Hyperlink>
            <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>
          </View>

        )
      }
    }
  

    return(
      <ScrollView>
        <Image source={this._require_image(this.props.data.image)} style={{height: 250, width: width}}/>
        <Text style={{fontSize: 18, padding: 10}}>
          {this.props.data.content}
        </Text>
        {subContents}
        <View style={{height: 100}} />
      </ScrollView>
    );
  }
}

export default TopRecommendationDetails
