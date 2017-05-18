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
import NavBar from './components/NavBar';


class TaoTenTips extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Tao Ten Tips' navigator={this.props.navigator}/>
        </View>

        <ScrollView style={Styles.containerColumn}>
          <View style={Styles.containerRow}>
            <View style={Styles.textWrapper}>
              <Text style={Styles.headerText}>10 USEFUL TIPS TO GET THE MOST OUT OF YOUR EXPEDITION</Text>
 
                <Text style={Styles.descriptionText}> 
                Be aware of cultural differences, know your part and leave first world 
                baggage behind.{'\n'}
                </Text>
                <Text style={Styles.headerText}>1. ISLAND TIME {'\n'} 
                </Text>
                <Text style={Styles.descriptionText}>
                It's better not to be aware of time and to leave the planning with us.{'\n'}{'\n'}
                Island time will definitely anooy any western mindset of needing to know what's ahead.
                Remember that the Filipino day is only divided by breakfast, lunch,and dinner. 'When do we leave?' - After breakfast. 
                'When do we get there?' - Before lunch. If you insist on knowing the exact time from any of your crew, make sure to give a leeway of 30 min.
                to 2 hours to avoid frustration.{'\n'}
                if you dont like waitiing for everyone in the morning make the most of your time by getting busy
                and explore the village - swim, trek, kayak and talk to the children. The boat won't leave without you.{'\n'}{'\n'}
                Your day will be full of action if you're not too busy looking at the time.{'\n'}{'\n'} 
                </Text>
                <Text style={Styles.headerText}>
                2. VILLAGE TOUR? WHERE ARE THE LOCALS? I WANT TRIBE PEOPLE {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                Tao does not do village tours!{'\n'}{'\n'}
                If you are waiting for a cultural thing to happen in front you then you are on the wrong trip. We do not 
                showcase the village liffe. We do not go into people's home taking pictures. We do not encourage individuals to
                explore by themselves and not in groups. The village are our friends and we know them well. If you're friendly  enough
                to communicate (even with language barrier) they will welcome you.{'\n'}
                {'\n'}
                We do not visit tribal communities with our guests. We have a lot of projects with the Tagbanua people but we
                cannot take our travelers to see them. They are already aloof with the immigrant communities in the area and it took time for 
                our projects to be welcomed in their villages.{'\n'}
                {'\n'}
                There are so many misconceptions of 'meeting the locas'. Firstly, your crew are all locals. Getting to know them is getting to
                know the culture and the area. Secondly, are you sure the locals want to meet you? We do not want the villager to be uncomfortable
                and shy when we bring in foreigners. We are careful not to exhaust our presence in the villages. Thirdly,
                meeing does not mean only taking photos. Introduce yourself, ask their names, tell your name and learn some Filipino
                words.{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                3. DIGITAL DETOX! {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                'Overly documented, under experienced'{'\n'}
                Make sure you don't spend half of your time taking photos/videos and the other half finding where to charge your batteries as
                you might miss the best part of the trip. Sunset is better experienced through your senses, not through your camera screen.
                Do not ask for Wi-Fi in the island as we will trick you in climbing a tree holding youre phone up for a laugh! Do not 
                play your music in a small speakers in the middle of the group as you're probably the only one who is enjoying it. enjoying
                meeting new friends without the use of any gadgets and phone beeping. If you want to take photos of the islanders, talk to 
                them first and make friend. Keep it a rule. And show them the picture!
                </Text>
                <Text style={Styles.headerText}>
                4. GET TO KNOW THE TOILET {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                There are no plumbing in the islands which means there can't be a holding tank for flushing, which means you have to use
                bucket to flush, which means you cannot have toilet seats as it get constantly wet.{'\n'} {'\n'}
                The toilet bowl is clean, so you can seat on it (dont squat), flush the toilet every time you
                use it, tell the crew if there's no water or paper or if it's dirty. This is called a wet toilets as you have to always wash
                it down to keep it clean. It might not be up to your standard but remember this might be the only toilet bowl with a septic tank
                in the island. We provide toilet paper, but please put it in the bin provided to avoid blockage.{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                5. 'LOOK LIKE A LOBSTER!' {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                This means get out of the sun!{'\n'}{'\n'}
                The big health issue we often deal with our travelers is dehydration, sun stroke and sun burns, We know the importance of 
                getting a tan before getting back to your country but this might ruin your trip. From experience, the issue with travelers
                having diarrhea, fever and sickness is mostly caused by too much sun. Your body does not know what it's doing when you
                absorbed too much heat. You cannot feel the sun on the boat with the wind blowing and it only takes 30 mins. to get you totally
                fried, even with sunscreen. We advise you to get in the shade most of the day. Get your tan before 10am and after 4pm. It is 
                essentiall to have a sarong, a hat or rash guard that will get you covered from the sun. Drink lots of water.{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                6. LEAVING NO TRACE {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                Yes the locals have no concept of plastic waste. The village is concerned in plastic wrappers. There are broken glasses on the
                reefs and there are some beaches full of driffted plastic from China, Taiwan and Veitnam. But it doesn't mean we can
                add on to the problem{'\n'}{'\n'}
                We are trying our best to have zero waste in the islands even though it's a challenge to introduce this concept to the
                islanders who never see it as a problem. Taking all our waster with us on the boot, separating, recycling and composting in 
                the farm is a small move towards educating our crew and the islanders about plastic waste. Please don't be shy in reminding
                your crew about leaving waste in the islands as we have to keep on poking them. Also your earbuds, contact lens case and 
                mini disposables should be taken with you and not left in the islands. You can also poke other travelers who you see leaving
                trash {'\n'}
                </Text>
                <Text style={Styles.headerText}>
                7. PLEASE BE GUIDE YOUR GUIDE! {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                Our guides,born and raised here, have never left the Philippines. They are less familiar with statistical details but they can
                tell you about the way of life and cultures of the island. You can learn a lot from them but they can learn a lot more from
                you. There might be  a language barrier but this does not lessen the experience.{'\n'}{'\n'}
                Don't undermine the guide's decision but encourage them to explain. They make decision based on many factors- weather,
                tides, current, wind, sunlight, water supply, jellyfish, fiestas, rum supply etc. But sometimes they forgot to tell you why you 
                have to leave eary or late, why visit this island and not the other, and which base camp is chosen for sleeping. One thing is 
                for sure, every decision is made to maximize your experience in the islands.
                </Text>
                <Text style={Styles.headerText}>
                8. SOCIABLE! SOCIABLE! SOCIABLE! {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                This is a sociable trip on a sociable boat with sociable people{'\n'}{'\n'}
                We are not a booze cruise party-boat but we are also not a meditation/yoga retreat boat. We encourage people to do what
                they want on their trip as long as they respect other people who want to do other things. PEOPLE BUY ENOUGH ALCOHOL 
                FOR THEIR CONSUMPTION FOR 5 DAYS, SO SHOULD YOU! NOBODY WANTS PETTY BEER POLITICS IN THE 
                ISLANDS. We have cocktails for everyone but just enough to TAGAY the end of the day at sundown.
                </Text>
                <Text style={Styles.headerText}>
                9. 50/50 {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                No matter how we prepare for a trip and how much we give our best, it's not enough to make it a great expedition without an
                effort from our travelers. we call an expedition because we are exploring islands together. We do not know how much
                time is left before the area is totally developed and open to a mass tourism, so this is the time to really enjoy the rawness of
                the untouched islands. But we cannot serve it all to you on a plate, as this is not a tour. You have to understand that tours
                will give you option to lay it all down to you on an itinerary.{'\n'}{'\n'}
                This expedition will be free-flowing. It will be dictated by the weather, tides and the group enthusiasm. 50% of the
                experience will be in a morning walk alone in the village, helping your chef cook, fishing at the back of the boat, gathering
                firewood from the jungle for bonfires, going through the farm and harvesting the next meal, learning how to extract coconut
                milk etc. This experience is all there for you but this cannot be listed on a menu. You have to explore it yourself! No
                organized trips can offer a truly authentic travel experience. We can only offer access and tools to make your own
                experience
                </Text>
                <Text style={Styles.headerText}>
                10. LEARN A FEW WORDS {'\n'}
                </Text>
                <Text style={Styles.descriptionText}>
                (all A pronounce Ah!, all I pronounce Ee! U pronounce in Uber! NG pronounced in soNG, O in Opera){'\n'}{'\n'}
                • TAO - people, human, person {'\n'}• KUMUSTA - How are you? {'\n'}• SALAMAT - Thank you! {'\n'}• KAIN NA - let's eat{'\n'}• 
                PAALAM - Goodbye {'\n'}• TAGAY - Cheers' Drink up, shot {'\n'}• MAGANDA - Beautiful {'\n'}• ANO YAN? - What is that? {'\n'}• TUBIG - water {'\n'}• 
                BUHAY - life, alive {'\n'}• ANONG PANGALAN MO? - What is{'\n'}{"\t"}{"\t"}your name{'\n'}• GUSTO KO - I like {'\n'}• AYAW KO - I dont like {'\n'}• 
                ISDA - Fish {'\n'}• KAPE - Coffee {'\n'}• SALABAT - Ginger tea {'\n'}• KANIN - rice {'\n'}• PIRATA - boatmen {'\n'}• SUNOG - burnt {'\n'}• LASING - drunk/tipsy
                {'\n'}• MASAYA - happy {'\n'}• PANGIT - not nice, ugly {'\n'}• MAHAL - it means - My love! or{'\n'}{"\t"}{"\t"}expensive depending on the tone {'\n'}• 
                SIGE - (magic word for anything{'\n'}{"\t"}{"\t"}positive!){'\n'}{"\t"}{"\t"}{"\t"}{"\t"}- yes please!,{'\n'}{"\t"}{"\t"}{"\t"}{"\t"}- see ya!,{'\n'}{"\t"}{"\t"}{"\t"}{"\t"}- more please,{'\n'}{"\t"}{"\t"}{"\t"}{"\t"}- your welcome,{'\n'}{"\t"}{"\t"}{"\t"}{"\t"}- lets go,{'\n'}{"\t"}{"\t"}{"\t"}{"\t"}- oh yeah?{'\n'}• 
                MABUHAY! - (say it in a loud{'\n'}{"\t"}{"\t"}excited tone with open arms!){'\n'}{"\t"}{"\t"}means, Long life,{'\n'}{"\t"}{"\t"}{"\t"}{"\t"}- Alive. A welcome introduction to an audience
                declaring your presence. Mostly used in revolutionary slogans and beauty pageants!{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                ENJOY YOUR EXPEDITION!
                </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TaoTenTips
