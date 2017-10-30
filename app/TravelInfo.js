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
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Styles from './assets/stylesheets/Styles';


class TravelInfo extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 25, padding: 10}}>
          Passports & Visas
        </Text>

        <Text style={{padding: 10, fontSize: 18}}>
          Over 150 Countries can enter The Philippines for a maximum of thirty (30) days,
          provided they are holders of a passport valid at least six (6) months beyond the period of
          stay in the Philippines, and present a return or outward bound ticket to their country of origin
          or to a next country of destination. {"\n"}{"\n"}

          30 days extensions are available in Immigration Offices in
          Manila, Cebu, Puerto Princesa and other main cities and cost around 3000 pesos.{"\n"}{"\n"}

          Further extensions require a formal Alien Registration Card (50 USD) on top of the visa fees. Don’t
          turn up with flip flops, shorts or vest. Make sure you dress up appropriately to see
          immigration officers.
        </Text>
        <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


        <Text style={{fontWeight: 'bold', fontSize: 25, padding: 10}}>
          Palawan - Getting There and Away
        </Text>

        <Text style={{padding: 10, fontSize: 18}}>
          You will have to travel at least 1 day prior to the expedition to Palawan, we strongly
          recommend to allow time for flexibility in your travel plans. Flights can be cancelled or
          departures of expeditions can be effected by bad weather. We recommend that you have least
          2 days in both El Nido and Coron.{"\n"}{"\n"}

          You are required to check-in and attend a group briefing at 17:00h the evening before your
          departure. Trips arrive in the destination port at approx. 18:00h so onward travel
          arrangements must be made for the next day at the earliest.{"\n"}{"\n"}

          Busuanga Airport in Coron is 40min away from town and has daily connections to Manila
          and Cebu with PAL Express, Cebu Pacific and SkyJet (Manila only).{"\n"}{"\n"}

          You can travel to Coron by sea with www.2gotravel.com. it takes around 14 hours
          El Nido airport can only be accessed with www.air-swift.com from Manila, Cebu, Clark or
          Caticlan (Boracay) tickets cost up to 150USD one-way.{"\n"}{"\n"}

          Budget Airlines fly to Puerto
          Princesa, the provincial capital is 4 to 5 hours away with commuter van services. Cebu
          Pacific, PAL Express and AirAsia have several daily departures from Manila, Cebu, Iloilo,
          Davao and Clark.{"\n"}{"\n"}

          For a comfortable van to El Nido book online with https://
          www.facebook.com/DaytripperPalawan/ (around 800 pesos) if unavailable just take any van
          offered outside the airport, these are usually 500-600 depending on the season.
        </Text>
        <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


        <Text style={{fontWeight: 'bold', fontSize: 25, padding: 10}}>
          Cash in Palawan
        </Text>

        <Text style={{padding: 10, fontSize: 18}}>
          There are cash machines in Coron and El Nido. Exchange rates are less favorable as in bigger
          cities. Most businesses don’t accept credit card payments. {"\n"}{"\n"}

          You will need to bring cash with
          you to the briefing to prepay your drinks, buy any last minute stuff from our shop and after
          the expedition to tip your crew.
        </Text>
        <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


        <Text style={{fontWeight: 'bold', fontSize: 25, padding: 10}}>
          Departure and Arrival Times
        </Text>


        <Text style={{padding: 10, fontSize: 18}}>
          First will need to 'check-in' at our office in town of your departure 17:00h the day before you
          depart. Please read the info in the 'PREPARATIONS' section.
          All Expeditions depart/start at 8:30H from:{"\n"}{"\n"}

          TAO EL NIDO OFFICE: Tao House, Corong Corong.{"\n"}
          TAO CORON OFFICE: Don Pedro St. Centre of town.{"\n"}{"\n"}

          * Both of our offices are easy to find and both of the town is not that big that you cannot find
          us.{"\n"}{"\n"}

          For anyone who misses the departure of the expedition due to disrupted travel plans, there is
          a possibility to catch up with a private boat transfer. Boat hire costs from 5,000 PHP - 10,000
          PHP depends on how far you need to travel. {"\n"}{"\n"}

          This can be arranged by our staff in our office.
          Please take note of our emergency contact numbers so that you can inform us of changes to
          your travel plans due to flight delays, cancellations or other travel disruptions.{"\n"}{"\n"}
          
          We have the right to cancel your booking if you do not inform us or if you do not show up on
          the briefing.{"\n"}{"\n"}

          For Private Expeditions, we will depart when you and your group are ready.
          All expeditions usually arrive/end between 17:00H - 18:00H. There will be time for you to
          transfer to your accommodation before it gets dark if you are staying on the mainland.{"\n"}{"\n"}

          If you are staying in an island resort please inform them that you will be traveling with Tao
          and that you will be arriving in town between 17h and 18h. They will be able to advise you
          on their transfer policies.{"\n"}{"\n"}
        </Text>
        <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>

        <Text style={{fontWeight: 'bold', fontSize: 25, padding: 10}}>
          Planning Your Itinerary
        </Text>


        <Text style={{padding: 10, fontSize: 18}}>
          Try not to take on too much destination as traveling in the Philippine islands takes time. You
          don’t want to spend half your trip on a bus or waiting in an airport as most destinations will
          take a day journey. {"\n"}{"\n"}

          If you would like to visit several provinces, try to plan to spend a week in
          each place. This is enough time to take it all in, and at the same time get as much as possible
          out of your trip.{"\n"}{"\n"}

          You should make at least a 2-day puffer after your expedition. If there is a severe weather
          warning or a typhoon and the Coast Guard does not give us clearance to leave in the
          scheduled date, we will reschedule within the next two days.
        </Text>
        <View style={{height: 100}} />
      </ScrollView>    
    );
  }
}

export default TravelInfo
