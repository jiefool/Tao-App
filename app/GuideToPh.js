import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import MapView, { MAP_TYPES } from 'react-native-maps';
import NavBar from './components/NavBar';
import Styles from './assets/stylesheets/Styles';



const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 12.40971;
const LONGITUDE = 121.8691;
const LATITUDE_DELTA = 15.96311;
const LONGITUDE_DELTA = 10.22928;

class GuideToPh extends React.Component {

  navigate(name){
    this.props.navigator.push({name})
  }
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }
  resetRegion() {
    this.setState({ region: this.defaultRegion() });
  }

  defaultRegion() {
    const { region } = this.state;
    return {
      ...this.state.region,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.containerPaddingSmall}>
          <NavBar title='Guide to PH' navigator={this.props.navigator} />
        </View>

        <View style={Styles.containerRow}>
          <MapView
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            provider={this.props.provider}
            ref={ref => { this.map = ref; }}
            mapType={MAP_TYPES.STANDARD}
            style={Styles.map}
            initialRegion={this.state.region}
            region = {this.state.region}>

          <MapView.Marker
                title="North Luzon"
                //description="This is a description of North Luzon"
                coordinate={{latitude: 17.475581, longitude: 121.659319, latitudeDelta: 0, longitudeDelta: 0}}
                onPress={() => this.navigate('mapNorthLuzon') }
              />
          <MapView.Marker
                title="Manila"
                //description="This is a description of Manila"
                coordinate={{latitude: 14.596662, longitude: 120.984783, latitudeDelta: 0, longitudeDelta: 0}}
                onPress={() => this.navigate('mapNorthLuzon') }
              />
          <MapView.Marker
                title="Bicol and Eastern Visayas"
                //description="This is a description of North Luzon"
                coordinate={{latitude: 13.514537, longitude: 123.476000, latitudeDelta: 0, longitudeDelta: 0}}
                onPress={() => this.navigate('mapNorthLuzon') }
              />
          <MapView.Marker
                title="Central Visayas"
                //description="This is a description of Central Visayas"
                coordinate={{latitude: 10.675285, longitude: 124.855975, latitudeDelta: 0, longitudeDelta: 0}}
                onPress={() => this.navigate('mapNorthLuzon') }
              />
          <MapView.Marker
                title="Palawan"
                //description="This is a description of Palawan"
                coordinate={{latitude: 9.555346, longitude: 118.473482, latitudeDelta: 0, longitudeDelta: 0}}
                 onPress={() => this.navigate('mapNorthLuzon') }
              />
          <MapView.Marker
                title="Mindanao"
                //description="This is a description of Mindanao"
                coordinate={{latitude: 8.439924, longitude: 125.844038, latitudeDelta: 0, longitudeDelta: 0}}
                onPress={() => this.navigate('mapNorthLuzon') }
              />
          </MapView>
        </View>
      </View>
    );
  }
}

GuideToPh.propTypes = {
  provider: MapView.ProviderPropType,
};

module.exports = GuideToPh;
