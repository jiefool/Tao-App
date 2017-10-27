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

class TaoTopRecommendations extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>Manila</Text>
          <Image source={require('./assets/images/page_island.png')} style={{height: 100}}/>
          <Text style={{padding: 10, fontSize: 18}}>
            Manila is alive. You feel the energy in the streets, the density of people, the culture of smiles. Despite the negative, the hospitable filipino is present in almost everyone. Remember this and you will have a different perspective on this otherwise dark city.
          </Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>Z hostel</Text>
          <Image source={require('./assets/images/page_island.png')} style={{height: 250}}/>
          <Text style={{padding: 10, fontSize: 18}}>
            The Poblacion area in Makati, once the red light district is a lively area where innovative ideas sprout. To stay in the middle of it go to Z hostel. There's a variety of drinking and dining options around the hostel and across the big avenue. We like Alamat for its craft beer, cocktails and tasty "Polutan" (filipino for food to go with drinks).
          </Text>
          <Text style={{paddingLeft: 20, fontSize: 15, color: 'blue'}}>
            Links:{"\n"}
            https://zhostel.com {"\n"}
            https://www.facebook.com/AlamatFilipinoPub/
          </Text>
          <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>
          


          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>La Fuerza</Text>
          <Image source={require('./assets/images/page_island.png')} style={{height: 250}}/>
          <Text style={{padding: 10, fontSize: 18}}>
            La Fuerza Compound in Chino Roces Ave hosts galleries, cocktail bars and clubs. Go to finders keepers first and then either black market for younger crowds, hiphop and RnB or XX:XX (twenty twenty) for a Berlin inspired space with electronic music. Or visit Obar after 1am. This 12 year old institution has amazing drag shows, they make their own costumes and every night is different. For after-hours go to Time Club, back in Poblacion, usually opens till 8am.
            Links
          </Text>
          <Text style={{paddingLeft: 20, fontSize: 15, color: 'blue'}}>
            Links:{"\n"}
            https://www.facebook.com/finderskeepersMNL{"\n"}
            https://www.facebook.com/blackmarketmnl{"\n"}
            https://www.facebook.com/2020bar{"\n"}
            https://www.facebook.com/obarphilippines{"\n"}
            https://www.facebook.com/TIMEinManila{"\n"}
          </Text>
          <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>



          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>Museums & Markets</Text>
          <Image source={require('./assets/images/page_island.png')} style={{height: 250}}/>
          <Text style={{padding: 10, fontSize: 18}}>
            There are two established museums in Makati, Ayala and Yuchengco. The Silverlens Gallery shows contemporary filipino artists. If you are around on the weekend don’t miss the markets in Salcedo (saturday) and Legazpi (sundays) villages - farmer's market with food stalls and crafts. For cheap wholesale go to greenhills. The Philippine Artisan Trade in Salcedo curated a group of Filipino startups worth checking out.
          </Text>
          <Text style={{paddingLeft: 20, fontSize: 15, color: 'blue'}}>
            Links{"\n"}
            www.ayalamuseum.org{"\n"}
            https://yuchengcomuseum.org{"\n"}
            http://www.silverlensgalleries.com{"\n"}
            https://www.facebook.com/legazpisundaymarket{"\n"}
            https://www.facebook.com/SalcedoCommunityMarket{"\n"}
            https://www.greenhills.com.ph{"\n"}
            https://www.philippineartisantrade.com{"\n"}
          </Text>
          <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>




          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>Foods</Text>
          <Image source={require('./assets/images/page_island.png')} style={{height: 250}}/>
          <Text style={{padding: 10, fontSize: 18}}>
            If well Manila isn't famous for its street food as other asian cities, it hosts some great local and world restaurants. Our picks are warung indo homey, unpretentious Indonesian place for lunch. Hey Handsome offers modern malay fusion and People's Palace serves refined thai food. For filipino comfort food visit a Buddy’s branch or get delivery. We also love the flavors and decoration of Cafe Juanita in Passig and for an especial fine dining experience you can visit Toyo. If you are craving for sweets and good coffee visit a tilde
          </Text>
          <Text style={{paddingLeft: 20, fontSize: 15, color: 'blue'}}>               
            Links{"\n"}
            https://www.facebook.com/warungindoo{"\n"}
            https://www.facebook.com/handsomecome{"\n"}
            http://www.peoplespalacethai.com{"\n"}
            https://www.buddys.com.ph{"\n"}
            https://www.facebook.com/cafe.juanita.ph{"\n"}
            https://www.facebook.com/toyoeatery{"\n"}
            https://www.facebook.com/TildeCafe{"\n"}
          </Text>
          <View style={{height: 1, marginTop: 30, marginBottom: 30, backgroundColor: 'gray'}}/>



          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>Tours</Text>
          <Image source={require('./assets/images/page_island.png')} style={{height: 250}}/>
          <Text style={{padding: 10, fontSize: 18}}>
            Old Manila and Intramuros for spanish colonial flair - take a bambike tour to explore the walled city. visit Rizal Park for national history monuments and museums. In Quiapo there’s a famous Iron Basilica. The foundation in charge of restoration holds 3 monthly talks on saturday mornings, visit their Facebook for schedules. San Sebastian Street and Quiapo market are further attractions close by.
          </Text>
          <Text style={{paddingLeft: 20, fontSize: 15, color: 'blue'}}>   
            Links{"\n"}
            https://www.bambike.com/ecotours{"\n"}
            http://www.nationalmuseum.gov.ph{"\n"}
            https://www.facebook.com/savessbasilica{"\n"}
          </Text>




        <Text>Traffic in Manila</Text>
        <Text>
          Rush hour traffic in the city can cause hours on delays. Keep this in mind when moving around specially to catch flights. To commute between Manila and Makati you can use the MRT/LRT systems - tip, if you dont take a bag, you can avoid long security check queues. The Pasig river ferry is a great alternative but service can be unreliable, always research online for newest schedules. It is worth visiting the Guadaloupe stop to check, because if its not working the MRT station is 5min walk from there. Grab and Uber are great for moving around Makati and to/from the airport. Also langka app (motorcycles) for solo travellers.
        </Text>

        <Text>Puerto and the road to/from El Nido</Text>
        <Text>
          For slow paced explorers is worth to check out some of the other attractions in Palawan. We start in the provincial capital where you can stay two nights and one full day. Start your day around 8-9 at the Publicmarket to see all the fresh produce coming in. This might be the most biodiverse fish market in the world. After this you can visit one of the specialized shops around town, like asiano for tribal crafts specially wood carvings. Puerto is also famous for its pearls. Dont miss kusina ni tito ernie for lunch. Next door there's a weaving centre and a boutique where they sell their signature pineapple textiles and designs. After all this you might want to go back to your hotel for a nap. Use your afternoon to realax in a spa or more retail therapy and then for sunset visit the butterfly garden. The microbrewery Palaweño is a great spot for craft beers and then dine in KaLui for seafood or Kinabuch to try local delicacies like wood worms or alligator sissig.
        </Text>
        <Text>
          Links{"\n"}
          http://asiano.ph{"\n"}
          https://www.facebook.com/camiciapearls{"\n"}
          https://www.facebook.com/titoernies{"\n"}
          https://www.facebook.com/PalawanButterflyEcoGardenAndTribalVillage{"\n"}
          http://www.palawenobrewery.com{"\n"}
          http://www.kaluirestaurant.com{"\n"}
          https://www.facebook.com/Kinabuchs-Palawan-128793830486080{"\n"}
        </Text>
        <Text>
          There are several full day experiences to arrange out of Puerto. Dolphin and whaleshark (seasonal) interactions or a visit to the Underground River @OPERATOR can organize these experiences. The highway between Puerto and El Nido has a few surprises. San Vicente has a 14km long beach, the longest in The Philippines, Port Barton looks and feels like El Nido 10 years a go and in Roxas you can visit a small vietnamese restaurant that has tasty Bahn- Mi and Pho - reminder of a wave of vietnamese war refugees. These are low key destinations so you can just visit, explore and ask around for places to stay and eat.
        </Text>
        <Text>
          El Nido and Coron
          After or before your trip you might want to explore El Nido Bay or Coron Island, we usually avoid the busy tourist attractions like the lagoons, „Secret“ beach, etc... our expertise are the remote islands and our boats are too big to access these super crowded places. Organize one of the island hopping trips in town or go diving.
          A way to explore the mainland is by renting a motor bike, you can visit villages and waterfalls. In El Nido area go to Kalitang and Sibaltan, in Busuanga the Makinit hotspings, Lahala or Sagrada. You can ask any of the crew for tips. Be extra careful on your bikes please. Remember health services are limited in both towns.
          El Nido eats: Bulalo Plaza for filipino slow food, Altrove serves good fire oven pizza in 2 outlets - Pop’s District in Corong Corong and in town, Tamboks is close to the airport and serves signature dishes from a local chef, spanish run Republica has the perfect sunset spot, cocktails and good Paella
          To sleep we prefer Corong Corong, check Palauyu, Telasfora and Coral Cove. Or just research online for promotions and other traveller’s suggestions as new places open all the time.
          In Coron we suggest you come and stay with us in our newly opened Camp Ngey! Ngey! there are promotions as Expedition add-on and it is the perfect place to prepare for your expedition or decompress afterwards.
          Coron is a great spot for wreck diving. Arrange a trip with one of the several operators. For places to stay just research online, Coron has an even more dynamic offer as El Nido, is hard for us to keep track of the good places. For dinner we like to go to Altrove.
        </Text>
        </View>
      </ScrollView>
    );
  }
}

export default TaoTopRecommendations
