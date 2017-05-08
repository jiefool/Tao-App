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
      <View style={styles.container}>
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          pitchEnabled={false}
          rotateEnabled={false}
          provider={this.props.provider}
          ref={ref => { this.map = ref; }}
          mapType={MAP_TYPES.TERRAIN}
          style={styles.map}
          initialRegion={this.state.region}
          region = {this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
        >
        <MapView.Marker
              title="North Luzon"
              description="This is a description of North Luzon"
              coordinate={{latitude: 17.475581, longitude: 121.659319, latitudeDelta: 0, longitudeDelta: 0}}
            >
            <MapView.Callout
              onPress={() => this.navigate('tao5dayExpedition') }
              />
            </MapView.Marker>
        <MapView.Marker
              title="Manila"
              description="This is a description of Manila"
              coordinate={{latitude: 14.596662, longitude: 120.984783, latitudeDelta: 0, longitudeDelta: 0}}
            >
            <MapView.Callout
              onPress={() => this.navigate('tao5dayExpedition') }
              />
            </MapView.Marker>
        <MapView.Marker
              title="Bicol and Eastern Visayas"
              description="This is a description of North Luzon"
              coordinate={{latitude: 13.514537, longitude: 123.476000, latitudeDelta: 0, longitudeDelta: 0}}
            >
            <MapView.Callout
              onPress={() => this.navigate('tao5dayExpedition') }
              />
            </MapView.Marker>
        <MapView.Marker
              title="Central Visayas"
              description="This is a description of Central Visayas"
              coordinate={{latitude: 10.675285, longitude: 124.855975, latitudeDelta: 0, longitudeDelta: 0}}
            >
            <MapView.Callout
              onPress={() => this.navigate('tao5dayExpedition') }
              />
            </MapView.Marker>
        <MapView.Marker
              title="Palawan"
              description="This is a description of Palawan"
              coordinate={{latitude: 9.555346, longitude: 118.473482, latitudeDelta: 0, longitudeDelta: 0}}
            >
            <MapView.Callout
              onPress={() => this.navigate('tao5dayExpedition') }
              />
            </MapView.Marker>
        <MapView.Marker
              title="Mindanao"
              description="This is a description of Mindanao"
              coordinate={{latitude: 8.439924, longitude: 125.844038, latitudeDelta: 0, longitudeDelta: 0}}
            >
            <MapView.Callout
              onPress={() => this.navigate('tao5dayExpedition') }
              />
            </MapView.Marker>
        </MapView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.resetRegion()}
            style={[styles.bubble, styles.button]}
          >
          <Text>Center</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerPaddingSmall}>
          <TouchableHighlight
                style={styles.button}
                onPress={() => this.props.navigator.pop() }>
                <Text style={{fontSize: 25}}>
                  Back
                </Text>
              </TouchableHighlight>
        </View>
      </View>
    );
  }
}

GuideToPh.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = GuideToPh;
