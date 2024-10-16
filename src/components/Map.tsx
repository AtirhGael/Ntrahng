import { StyleSheet, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'

const Map = () => {
  return (
    <MapView 
    // provider={PROVIDER_DEFAULT} 
    style={styles.mapContainer}
    tintColor="black"
    mapType="mutedStandard"
    showsPointsOfInterest={false}
    // initialRegion={region}
    showsUserLocation={true}
    userInterfaceStyle="light"
    >
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
    mapContainer:{
        height:'100%',
        width:'100%',
        // borderRadius:,
        alignSelf:'center'
    }
})