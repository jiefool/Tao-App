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
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';

class PackingList extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={Styles.paragraph}>
            To make things simple we recommend that you pack two bags the night before departure; 
          </Text>

          <Text style={Styles.paragraph}>
            1. Your <Text style={{fontWeight: 'bold'}}>MAIN LUGGAGE </Text>- this will be kept safely onboard, locked in the cabin, the captain has the key. You can access this luggage twice a day, once in the morning and then again in the afternoon before going down to the basecamp. Everything you don’t need, leave it here, DO NOT TAKE VALUABLES DOWN ONTO THE ISLANDS. Leave your watch, wallet, passport, jewelry, expensive sunglasses inside your luggage onboard. 
          </Text>

          <Text style={Styles.paragraph}>
            2. Your <Text style={{fontWeight: 'bold'}}>DRYBAG</Text> - You don’t need much stuff for your expedition. Below is a list of essentials that you will need to pack in DRYBAG [aprox 25-35 Liters] You have access to this bag during the day and and take it down to the basecamps at night.
          </Text>

          <Text style={Styles.paragraph}>
          Check that you have everything on the Packing list. Essential items are available in our shops at the briefing the night before departure. 
          </Text>
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • DRYBAG 
        </Text>
        <Text>
          aprox 25-35 Liters- available in the Tao shop.
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • SUN PROTECTION  
        </Text>
        <Text>
          hat or cap, sunscreen and sun glasses
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • SARONG 
        </Text>
        <Text>
          for boys and girls, can be used as a day towel, sun protection, beach loungers - available in the Tao Shop
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • WATER BOTTLE  
        </Text>
        <Text>
          Can refill onboard- its important to keep hydrated
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • DAY CLOTHES 
        </Text>
        <Text>
          shorts and t shirts/ vest for the days 
        </Text>


        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • SWIMWEAR 
        </Text>
        <Text>
          for during the day because you will be in and out of the water
        </Text>


        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • EVENING CLOTHES 
        </Text>
        <Text>
          you can shower and put on some very light weight trousers and long sleeve top or shirt to minimize insect bites.
        </Text>


        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • TOWEL 
        </Text>
        <Text>
          We do not provide towels
        </Text>


        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • WASHKIT 
        </Text>
        <Text>
          Shampoo, tooth brush, toothpaste
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • INSECT REPELLANT 
        </Text>
        <Text>
          We recommend KWAN LOONG - the best ever- available in the Tao shop
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • FLASHLIGHT or HEAD TORCH 
        </Text>
        <Text>
          to find your way around in the dark - available in the Tao Shop
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • SANDLES or FLIP FLOPS  
        </Text>
        <Text>
          Light trainers or sneakers are recommended for trekking, but leave them in your luggage
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • RASH GUARD 
        </Text>
        <Text>
          optional but recommended for sun protection and guard against jellyfish stings - available in the Tao Shop
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • REEFSHOES 
        </Text>
        <Text>
          optional - available in the Tao Shop
        </Text>


        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • FINS 
        </Text>
        <Text>
          optional - available in the Tao Shop
        </Text> 
        
        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • CAMERA 
        </Text>
        <Text>
          be careful with salt water damage, can bring small drybag 3-5 Liters for electronics
        </Text>

        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
          • HEADPHONES FOR MUSIC 
        </Text>
        <Text>
          no speakers allowed
        </Text>


        <Text style={Styles.paragraph, {fontWeight: 'bold', marginTop: 5}}>
            • A GOOD BOOK or JOURNAL 
          </Text>
       
        <Text style={{fontWeight: 'bold', marginTop: 20}}>CASHLESS SYSTEM</Text>
        <Text style={Styles.paragraph}>
          Don't take your wallet down from the boat. Leave it safely inside your luggage onboard. We have a cashless system in Tao that you can use to pay for drinks from the onboard bar, massage and items from the Tao community shop. {'\n'}{'\n'}
          Get a cashless wristband from check in desk before departure. Store some money on the wristband by loading credit.{'\n'}{'\n'}
          We recommend minimum 3000 pesos initial load. You can refund any unused credit in the office at the end of your trip. You can load onboard through the purser.
        </Text>

        <Text style={{fontWeight: 'bold', marginTop: 20}}>MASSAGE PROJECT</Text>
        <Text style={Styles.paragraph}>
          In selected remote base camps, you can enjoy a massage on the beach. Local women formed a cooperative to provide this service and earn additional income.{'\n'}{'\n'}
          The first massage is included in the price of the trip. You will be given a coupon bracelet by the crew. You can avail your massage from any therapist. {'\n'}{'\n'}
          At the end of the massage simply give the bracelet to the therapist. She can redeem the bracelet for cash at any of our offices. Additional massages can be purchased for 300 pesos through the cashless system from the crew or Tao shops in the islands. 
        </Text>
        
          <Text style={{height: 40}}></Text>
        </ScrollView>
      </View>
    );
  }
}

export default PackingList

