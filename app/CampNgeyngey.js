import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Styles from './assets/stylesheets/Styles';


class CampNgeyngey extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate(name){
    this.props.navigator.push({name})
  }
  
  render(){
    return(
        <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <Text style={Styles.bigText}>Camp Ngeyngey</Text>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <Image source={require('./assets/images/campngeyngey.jpg')}
                        style={Styles.showProjectIcon}
                      />

          <View style={Styles.textWrapper}>           
            <Text style={Styles.bigText}>Camp Ngeyngey</Text> 
            <Text style={Styles.regText}>Welcome to Camp Ngey Ngey: a Neverland for escapees searching for a break from the noise of the modern world. </Text> 
            <Text style={Styles.smallText}>The NEW project from Tao Philippines.{"\n"}{"\n"}The Lostboys have taken over the abandoned resort of Manguengey in Busuanga. A remote island in Palawan.{"\n"}{"\n"}Camp Ngey! Ngey! is our crusoe-style deserted island camp, paradise for those who understand the luxury of simplicity and disconnection.{"\n"}{"\n"}The camp retains the remains of the old resort, reclaiming the typhoon-wrecked building parts and old furniture; a mix of playful architecture and sociable spaces.{"\n"}{"\n"}Adding Tao's signature individual bamboo Tuka huts for sleeping.{"\n"}{"\n"}The island camp experience allows for spaces to retreat and find peace and solitude, and when you are ready there are sociable places to connect and share time with other like-minded adventurers.{"\n"}{"\n"}Explore the island: The camp is on the main beach with jungle trails to access further 3 wild beaches, Encompassed by its crystal blue waters, preserved reefs teaming with life, windswept cliffs and hidden caves.{"\n"}{"\n"}No room service, no menus, no WiFi. You will arrive as strangers, you will eat together, swim together, laugh together, drink together, get to know each other offline, face to face, become part of the magic of Tao and see what happens!
            </Text>
           
            <Text style={Styles.regText}>How is this experience different to the Tao Expedition?</Text>
            <Text style={Styles.smallText}>Camp Ngey Ngey has a more relaxed chilled out vibe, staying in one place. How you spend your days is up to you. A stay on the island is a great place to get in the mood before your expedition or to decompress afterwards.
            </Text>

            <Text style={Styles.regText}>How does the trip work?</Text>
            <Text style={Styles.smallText}>Join a group of like minded adventurers on a 3 day/2 night island camp experience. On the first day Departing from Coron town, hop on-board our safari boat to journey to the camp en route visiting beaches and reefs, arriving in the island early afternoon. Spending 2 nights and a full day exploring the island of Manguengey. Leaving the camp on the 3rd day afternoon to journey back to Coron.
            </Text>
            <Text style={Styles.regText}>When is a good time to visit?</Text>
            <Text style={Styles.smallText}>The Island Camp experience is available all year round. November to may is dry season with generally clear skies and winds from NE. June to October is monsoon season with winds from SW.
            </Text> 
            <Text style={Styles.regText}>When do trips depart and arrive?</Text>
            <Text style={Styles.smallText}>Trips depart from the Tao office in Coron town, meeting time is 9am, there will be a short briefing before starting your journey to the island by land or sea. Returns to Coron Town by 5/6pm on the 3rd day.
            </Text> 
            <Text style={Styles.regText}>Any other information I need to know?</Text>
            <Text style={Styles.smallText}>Take a look at the Travel information section at the bottom of the main page. Here you will find useful information and answers to your questions for travel to Coron [Busuanga], flight information, accommodation recommendations, packing lists and anything else you need to know.
            </Text>
            <Text style={Styles.regText}>Whats included?</Text>
            <Text style={Styles.smallText}>Journey to and from the island [Coron town returning to Coron town]{"\n"}2 nights hut accommodation on the island camp{"\n"}shared toilet and shower facilities{"\n"}All meals and refreshments{"\n"}Kayaks Masks and Snorkels
            </Text>
            <Text style={Styles.regText}>Whats not included?</Text>
            <Text style={Styles.smallText}>Journey to and from the island [Coron town returning to Coron town]{"\n"}2 nights hut accommodation on the island camp{"\n"}shared toilet and shower facilities{"\n"}All meals and refreshments{"\n"}Kayaks Masks and Snorkels
            </Text>
            <Text style={Styles.regText}>Is this experience for me?</Text>
            <Text style={Styles.smallText}>3 day/2 night Island Safari to Camp Ngey! Ngey!{"\n"}<Text style={Styles.bText}>15,675</Text>pesos per person{"\n"}<Text style={Styles.bText}>13,000</Text>pesos per person [as add on to 5 day Expedition, offer is only valid for April to May reservations]{"\n"}{"\n"}ALTERNATIVE PACKAGE (No Island Hopping){"\n"}2 nights stay at Camp Ngey! Ngey! (includes round-trip transfer from and to Coron town/Busuanga Airport){"\n"}<Text style={Styles.bText}>22,975</Text> for two persons{"\n"}<Text style={Styles.bText}>8,575</Text> per additional person{"\n"}{"\n"}*For alternative package, please email us your preferred dates at <Text style={Styles.bText}>ngeyngey@taophilippines.com</Text>.
            </Text>
             <Text style={Styles.regText}>Prices?</Text>
            <Text style={Styles.smallText}> Before applying to take part in this experience you must understand that what Tao offers is not a resort or a hotel. This island camp is our expression of paradise, we value a close connection to the natural world. This means that certain creature comforts that block this connection you will not find on our island. We have shared bathrooms, limited fresh water, limited electricity but we have the sea breeze, the sound of the waves and the starry skies on offer.{"\n"}{"\n"} We love it, but we understand that this is not everyone's idea of a holiday.{"\n"}{"\n"}The island camp experience allows for spaces to retreat and find peace and solitude, and when you are ready there are sociable places to connect and share time with other likeminded adventurers. Its up to you to find your own definition of paradise within the framework of Tao.{"\n"}{"\n"} ...DO YOU STILL WANT TO JOIN THIS EXPERIENCE
            </Text>
          </View>    
          <View style={Styles.btnWrapper}>    
            <View style={Styles.btnBlock}>
              <Button style={Styles.bText}
                onPress={()=> this.navigate('applyNgeyngey') }
                title="Apply Now"
                color="white"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View> 
        </ScrollView>


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

export default CampNgeyngey
