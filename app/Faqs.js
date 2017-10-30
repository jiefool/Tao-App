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
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Styles from './assets/stylesheets/Styles';
import NavBar from './components/NavBar';

class Faqs extends Component {
  render() {
    return (
      <ScrollView style={Styles.containerColumn}>

      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 35, marginBottom: 20}}>
        Frequently Asked Questions
      </Text>

      <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
        How’s the weather?
      </Text>

      <Text style={{padding: 10, fontSize: 18}}>
        Our expeditions put you close to nature, this includes the tropical weather. There are 2 seasons in the Philippines. The Dry season is the high season for tourism and runs from Oct/ Nov to May/Jun. The Monsoon season is the low season and runs from Jun/July to Sept/Oct. During the wet season it does not mean it rains all through out the month, sometimes long undisrupted sunshine for weeks and sometimes lots of rain. But for most it will be sunny in the morning and heavy rain in the afternoon.{"\n"}{"\n"}


        Palawan is a long stretch of land dotted with hundreds of islands with its own microclimates. If its raining heavily in EL Nido town then it doesn't mean its the same 1 hour away in another island. Mainland mostly holds the heavy clouds and the far islands easily clear out. Just to be sure we suggest packing a light rain jacket. This will protect you from wind-chill and keep you warm if there is any rain during your expedition.{"\n"}{"\n"}
      </Text>

      <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


       <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
        Can I dive during the trip?
      </Text>

      <Text style={{padding: 10, fontSize: 18}}>
        We do not do diving onboard Tao. We used to do diving in the early days of our exploration but we found that it took over from the free flowing nature of our trips. If we did diving onboard then it becomes the dominant activity and creates a divide between divers and non- divers.{"\n"}{"\n"}

        If you want to do some diving then we recommend that you spend some time in the Coron area before or after your trip with us. Coron is known as one of the world's best locations for wreck diving, and has many pristine reefs and the spectacular thermal Lakes on Coron Island. There are several dive shops in Coron town.{"\n"}{"\n"}
      </Text>

      <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>

      <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
        What kind of boat are we using?
      </Text>

      <Text style={{padding: 10, fontSize: 18}}>
      Our Bangkas are designed with 2 outriggers with no deep keel, this design is unique to the Philippines and other smaller neighbouring island kingdoms. This is perfect to navigate the many islands with scattered shallow reefs. The design has evolved from dug out canoes, then the sails came up capturing the power of the wind going farther populating the islands, the arrival of engines and fuel after the war slowly killed the sailing culture.{"\n"}{"\n"}

      Our motorised Bangkas are designed to take travellers in the remote islands with basic amenities. We have a toilet and a kitchen on board, a dry place to put bags. We are packed for fuel and our supply of food and drinking water.{"\n"}{"\n"}

      We have a couple of boat we built from scratch but most are converted fishing vessels stuck in villages after the fishing industry slowed down. This kind of bangka requires a lot of wood and repairs that we prefer to refurbish already build ones and rent it from families who cannot afford to run it for fishing.{"\n"}{"\n"}


      Our Paraw Sailing is a revival of the old big boats design that cruises around the Philippines mostly cargos and fishing. Our Speed Boat is our emergency response high powered engine boat. This boats are expensive to keep(more than our big bangkas) and needs to be in constant use, so we rather use it for shorter private expeditions but still always alert for emergencies.{"\n"}{"\n"}
      </Text>


      <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


      <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
        What kind of food will we eat?
      </Text>

      <Text style={{padding: 10, fontSize: 18}}>
      Our menu is based on traditional Filipino cooking using Fresh seafood, vegetables, fruit and rice. The seafood in Palawan is first class and we serve lots of it on-board Tao. We buy our fish direct from the fisherman as we travel through the islands. You can also fish from the boat to catch your own supper! We do not generally serve meat because we use ice boxes and we do not have refrigeration for storage on the boats. Sometimes we will buy livestock in the islands such as chickens or pigs. We stock up on fresh fruits and vegetables before we leave port so there is always something for everyone to eat. We cater for those who have allergies but cannot accommodate picky eaters, let the chef know if you have allergies. Vegetarians and vegans will enjoy the numerous healthy dishes cooked up on-board, the chef always serves fruit or vegetable dishes so there is no need to inform us in advance if you are vegetarian or vegan. We are proud of our food and we cook it with passion. We do not cook per plate but in one big batch Filipino style so it will be hard to separate ingredients just to cater for those who do not like garlic or onions. Please note that our chefs do not change their recipes or menu to accommodate any dietary requirements, our policy is eat what you want and leave the rest.{"\n"}{"\n"}
      </Text>

      <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


      <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
        Where are we sleeping?
      </Text>

      <Text style={{padding: 10, fontSize: 18}}>
        Our sleeping arrangements is mostly camping in open native beach huts . Each night we find a safe anchorage for the boat and spend the night on an island. We have 15 different base- camps throughout the islands, all are in different types of locations. Some are on their own private island, or within a traditional village or a secluded beach. At the base-camp you can shower with fresh water, grill some fish for supper and enjoy a few rums around a fire.{"\n"}{"\n"}

        Our sleeping: Shared under one roof in different rooms or base camps with individual huts. Couples are separated in a room or their own huts but there are some base camps that you will have to share the huts.{"\n"}{"\n"}

        There will be no sleeping on board as the crew also needs a space and a rest away from demands of our guests. Everyone gets a mattress, pillow, mosquito net and fresh bedding set. We recommend that you bring ear plugs if you are a light sleeper. Couples usually sleep together. If you have any special sleeping requirements or a tendency to snore, please tell us at the start of the trip and we will plan sleeping arrangements accordingly.{"\n"}{"\n"}
      </Text>


      <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


      <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
        What about toilettes and showers?
      </Text>

      <Text style={{padding: 10, fontSize: 18}}>
      The boats have basic toilets and we keep it clean - we use bucket flush. Our base camps have toilets but no plumbing in the islands so we only use bucket flush. It is always kept clean and we have toilet papers which we advice not to flush but put it in the trash.The toilet bowls are always clean but no toilet seats- this is more hygienic if using bucket flush.{"\n"}{"\n"}

      There are fresh water shower in our base camps either by the well or filled up water drums. You will be advised if you are camping in a remote island or beach with no toilet or fresh water source- but this only happens when a group is up for it.{"\n"}{"\n"}
      </Text>

      <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>


      <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
        Where are the locals?
      </Text>

      <Text style={{padding: 10, fontSize: 18}}>
        Throughout the trip you will be meeting locals who work with us, communities that keeps our base camps, villages where we buy supplies like fish/seafood, veg, rums, ice etc. One thing we don’t do is to tour you around the villages just for the sake of it. We highly respect the communities in our route and plan the season well so we don’t exhaust the villages with our visit.{"\n"}{"\n"}


        Our many crew are from these villages and we are welcome there and we make sure we have a reason to visit checking the Tao schools and projects or just passing by to get supply but never just to show our travelers around. As an individual you are welcome to go around village and talk and meet locals but don’t expect your guide to gather the group for a tour walk as this is not a genuine Tao experience. We do not visit indigenous tribal villages.{"\n"}{"\n"}

        A lot of people have a romantic idea of getting into the villages and expect something much more but they oversee the fact that the crew on board and all the people in our base camps are the islanders, as we keep on saying 'we are not a tour'. Filipinos like their photos taken but our guideline is to make sure you start a conversation first then ask for photos, show them the pictures too!{"\n"}{"\n"}

      </Text>
      <View style={{height: 100}} />
       
      </ScrollView>
    );
  }
}

export default Faqs
