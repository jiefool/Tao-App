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
        <ScrollView style={Styles.containerColumn}>
          <View style={Styles.containerRow}>
            <View style={Styles.textWrapper}>
                <Text style={Styles.headerText}>
                10 USEFUL TIPS TO GET THE MOST OUT OF YOUR EXPEDITION
                </Text>
 
                <Text style={Styles.paragraph}> 
                Be aware of cultural differences, know your part and leave first world baggages behind.
                </Text>

                <Text style={Styles.headerText}>
                1. ISLAND TIME {'\n'} 
                </Text>
                
                <Text style={Styles.paragraph}>
                It’s better not to be aware of time and to leave the planning with us.{'\n'}{'\n'}
                Island time will definitely annoy any western mindset of needing to know what’s ahead. Remember that the Filipino day is only divided by breakfast, lunch and dinner. ‘When do we leave?’- after breakfast. ‘When do we get there?’ Before lunch! If you insist on knowing the exact time from any of your crew, make sure to give a leeway of 30min to 2 hours to avoid frustration.{'\n'}{'\n'} 
                If you don’t like waiting for everyone in the morning, make the most of your time by getting busy and explore the village - swim, trek, kayak, talk to the children. The boat won’t leave without you.{'\n'}{'\n'}
                Your day will be full of action if you’  re not too busy looking at the time.{'\n'}{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                2. DON'T EXPECT A VILLAGE TOUR {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                'Where are the locals? I want tribe people!'{'\n'}{'\n'}
                There are so many misconceptions of ‘meeting the locals’, Tao does not do village tours!{'\n'}{'\n'}
                Be aware that our crew are all locals. Getting to know them is getting to know the culture and the area.{'\n'}{'\n'}
                We do not showcase the village life, romanticizing the reality of living in a fishing village. We do not go into peoples’ home taking pictures. We do not want the villagers to be uncomfortable and shy if we bring in large groups of foreigners. We are careful not to exhaust our presence in the villages.{'\n'}{'\n'} 
                However we do encourage individuals to explore by themselves. The villagers are our friends and we know them well. If you re friendly enough to communicate (even with language barrier) they will welcome you. Meeting does not mean only taking photos. Introduce yourself, ask their names, tell your name and learn some Filipino words.{'\n'}{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                3. GET TO KNOW YOUR GUIDES {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                Our guides, born and raised here, have mostly never left the Philippines. They are less familiar with statistical details but they can tell you about the way of life and cultures of the islands.{'\n'}{'\n'}
                You can learn a lot from them and they can learn a lot from you. There might be a language barrier but this should not lessen interaction. Learn about the lost boys trying program and don’t undermine the guide’s decision but encourage them to explain.{'\n'}{'\n'}
                They make decisions based on many factors- weather, tides, current, wind, sunlight, picking up fresh water, jellyfish, fiestas, rum supply etc. but sometimes they forget to tell you why you have to leave early or late, why visit this island and not the other, and which base camp is chosen for sleeping.{'\n'}{'\n'} 
                One thing is for sure, every decision is made to maximize your experience in the islands.
                </Text>
                <Text style={Styles.headerText}>
                4. DIGITAL DETOX {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                'Overly documented, under experienced.'{'\n'}
                Make sure you don’t spend half of your time taking photos and videos and the other half finding where to charge your batteries as you might miss the best part of the trip. Sunset is better experienced through your senses, not through your camera screen. Enjoy meeting new friends without the use of any gadgets and phone beeping. Do not ask for wi-fi in the island as we will trick you in climbing a tree holding your phone up for a laugh!{'\n'}{'\n'} 
                Do not play your music in a small speakers in the middle of the group as you’re probably the only one who is enjoying it. Keep it a rule. Respect other traveller and let them enjoy the sounds of nature.{'\n'}{'\n'} 
                If you want to take photos of islanders, talk to them first and make friends. And show them the picture!
                </Text>
                <Text style={Styles.headerText}>
                5. 'YOU LOOK LIKE A LOBSTER!' {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                This means get out of the sun! Someone is going to get sunstroke- make sure it’s not you The big health issue we often deal with our travelers is dehydration, sun stroke and sun burns.{'\n'}{'\n'}
                We know the importance of getting a tan before getting back to your country but this might ruin your trip.{'\n'}{'\n'}
                From experience, the issue with travelers having diarrhoea, fever and sickness is mostly caused by too much sun. Your body does not know what its doing when you absorbed too much heat.{'\n'}{'\n'}
                You cannot feel the sun on the boat with the wind blowing and it only takes 30min to get you totally fried, even with sunscreen. We advise you to get in the shade most of the day.{'\n'}{'\n'}
                Get your tan before 10am and after 4pm. It is essential to have a sarong, a hat and a rash guard that will get you covered from the sun. Remember to drink lots of water.{'\n'}{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                6. LEAVE NO TRACE {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                Yes, the locals have no concept of plastic waste. The village is covered in plastic wrappers, there are broken glasses on the reefs and there are some beaches full of drifted plastic bottles from China, Taiwan and Vietnam. But it doesn’t mean we can add on to the problem.{'\n'}{'\n'}
                We are trying our best to have zero waste in the islands even though it’s a challenge to introduce this concept to the islanders who never see it as a problem.{'\n'}{'\n'} 
                Taking all our waste with us on the boat, separating, recycling and composting in the farm is a small move towards educating our crew and the islanders about plastic waste. Please don’t be shy in reminding your crew about leaving waste in the islands as we have to keep on poking them.{'\n'}{'\n'} 
                Also your earbuds, contact lens case and mini disposables should be taken with you and not left in the islands. You can also poke other travellers who you see leaving trash.{'\n'}{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                7. GET TO KNOW THE TOILET {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                There are no plumbing in the islands which means there can’t be a holding tank for flushing, which means you have to use bucket to flush, which means you cannot have toilet seats as it get constantly wet.{'\n'}{'\n'}
                The toilet bowl is clean so you can seat on it (don’t squat), flush the toilet every time you use it, tell the crew if there’s no water or paper or if its dirty. This is called a wet toilet as you have to always wash it down to keep it clean.{'\n'}{'\n'} 
                It might not be up to your standard but remember this might be the only toilet bowl with a septic tank in the island. We provide toilet paper but please put it in the bin provided to avoid blockage.{'\n'}{'\n'} 
                </Text>
                <Text style={Styles.headerText}>
                8. JOURNEY TOGETHER BUT FIND TIME TO BE ALONE {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                You are here because you booked to meet and enjoy travelling with like-minded people. “Like-minded” people does not mean you all do and like the same things. You are like-minded because you are open to new experiences, to all cultures, all age groups and all backgrounds.{'\n'}{'\n'} 
                We are not a booze cruise party-boat but we are also not a meditation/yoga retreat boat.{'\n'}{'\n'}
                We encourage people to do what they want on their trip as long as they respect other people who want to do other things. Most of our expeditions are 24 traveller and 10 local crew. This may seem intimidating at first but this size group ensures a wide mix of characters and personalities for you to interact with.{'\n'}{'\n'}
                The boats are large and there is enough space to find a place and time to be in solitude or space for small groups to connect and be sociable. Nobody likes being heard like cattle so we try to offer several options if you don’t want to do the same thing as everyone else.{'\n'}{'\n'}
                We encourage you to use the boat and the expedition to be your base and break into smaller groups for your own experiences. Just tell your expedition leader where you are going, and come back to the boat when you hear the horn- don’t keep the rest of the group waiting.{'\n'}{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                9. UNDERSTAND THE 50/50 RULE {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
                No matter how we prepare for a trip and how much we give our best, it’s not enough to make it a great expedition without an effort from our travellers.{'\n'}{'\n'}
                We call it an expedition because we are exploring the islands together. We do not know how much time is left before the area is totally developed and open to mass tourism, so this is the time to really enjoy the rawness of the untouched islands. But we cannot serve it all to you on a plate, as this is not a tour.{'\n'}{'\n'}
                You have to understand that tours will give you options and lay it all down to you on an itinerary. This expedition will be free-flowing. It will be dictated by the weather, tides and the groups’ enthusiasm.{'\n'}{'\n'}
                50% of the experience will be in a morning walk alone in the village, helping your chef cook, fishing at the back of the boat, gathering firewood from the jungle for bonfires, going through the farm and harvesting the next meal, learning how to extract coconut milk etc, etc.{'\n'}{'\n'}
                This experience is all there for you but this cannot be listed on a menu. You have to explore it yourself. No organized trips can offer a truly authentic travel experience. We can only offer access and tools to make your own experience.{'\n'}{'\n'}
                </Text>
                <Text style={Styles.headerText}>
                10. LEARN A FEW WORDS {'\n'}
                </Text>
                <Text style={Styles.paragraph}>
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
