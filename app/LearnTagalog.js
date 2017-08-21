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

class LearnTagalog extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Learn Tagalog' navigator={this.props.navigator}/>
        </View>
        <ScrollView style={Styles.containerColumn,{padding: 20}}>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>Learn a few words.</Text>
          </Text>
          <Text style={Styles.paragraph}>
          (all A pronounce Ah!, all I pronounce Ee!  U pronounce in Uber, NG pronounced in soNG, O in Opera)
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>TAO</Text> - people, human, person
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>KAMUSTA</Text> - How are you?
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>SALAMAT</Text> - Thank you!
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>KAIN NA</Text> - lets eat
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>PAALAM</Text> - Goodbye
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>TAGAY</Text> - Cheers! Drink up, shot
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>MAGANDA</Text> - Beautiful!
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>ANO YAN?</Text> - What is that?
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>TUBIG</Text> - water 
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>BUHAY</Text> - life, alive
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>ANONG PANGALAN MO?</Text> - What is your name?
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>GUSTO KO</Text> - I like
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>AYAW KO</Text> - I dont like
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>ISDA</Text> - Fish
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>KAPE</Text> - Coffee
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>SALABAT</Text> - Ginger tea
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>KANIN</Text> - Rice
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>PIRATA</Text> - boatmen
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>SUNOG</Text> - Burnt
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>LASING</Text> - drunk/tipsy
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>MASAYA</Text> - happy
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>PANGIT</Text> - not nice, ugly. 
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>MAHAL</Text> -  it means - My love!  or  Expensive! depending on the tone.
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>SIGE</Text> - (magic word for anything positive!)yes please!, see ya!, more please, you’re welcome,Lets go, oh yeh!
          </Text>
          <Text style={Styles.paragraph}>
          <Text style={{fontWeight: 'bold'}}>MABUHAY!</Text> - (say it in a loud excited tone with open arms!) means Long life, Alive!. A welcome or introduction to an audience, declaring your presence. Mostly used in revolutionary slogans and beauty pageants!
          </Text>
          <Text style={{height: 40}}></Text>
        </ScrollView>
      </View>
    );
  }
}

export default LearnTagalog

