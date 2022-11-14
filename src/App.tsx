import 'expo-dev-client';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  markerView: {
    padding: 16,
    backgroundColor: 'white',
  },
});

MapboxGL.setAccessToken(Constants.expoConfig?.extra?.mapboxAccessToken);

export const App = () => {
  return (
    <MapboxGL.MapView style={styles.root}>
      <MapboxGL.Camera
        defaultSettings={{
          centerCoordinate: [8.6821, 50.1109],
          zoomLevel: 10,
        }}
      />

      <MapboxGL.MarkerView coordinate={[8.6821, 50.1109]}>
        <View style={styles.markerView}>
          <Text>Hello World!</Text>
        </View>
      </MapboxGL.MarkerView>
    </MapboxGL.MapView>
  );
};
