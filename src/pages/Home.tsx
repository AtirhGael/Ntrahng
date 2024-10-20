import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RideCard from '../components/RideCard'
import { Ride } from '../types/types';
import { noResult } from '../assets/images';
import GoogleTextInput from '../components/GoogleTextInput';
import Map from '../components/Map';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store/store';
import { setDestinationLocation, setUserLocation } from '../redux/sclice/locationSlice';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/RootNavigator';

const recentRides: Ride[] = [
  {
    origin_address: "123 Main St, Cityville",
    destination_address: "456 Elm St, Townsville",
    origin_latitude: 40.7128,
    origin_longitude: -74.0060,
    destination_latitude: 34.0522,
    destination_longitude: -118.2437,
    ride_time: 3600,
    fare_price: 25.50,
    payment_status: "completed",
    driver_id: 1,
    user_id: "user123",
    created_at: "2024-10-01T14:30:00Z",
    driver: {
      first_name: "John",
      last_name: "Doe",
      car_seats: 4,
    },
  },
  {
    origin_address: "789 Oak St, Villagetown",
    destination_address: "321 Pine St, Cityplace",
    origin_latitude: 37.7749,
    origin_longitude: -122.4194,
    destination_latitude: 40.7306,
    destination_longitude: -73.9352,
    ride_time: 7200,
    fare_price: 40.00,
    payment_status: "paid",
    driver_id: 2,
    user_id: "user456",
    created_at: "2024-10-02T09:15:00Z",
    driver: {
      first_name: "Jane",
      last_name: "Smith",
      car_seats: 5,
    },
  },
  {
    origin_address: "654 Maple St, Suburbia",
    destination_address: "987 Birch St, Metropolis",
    origin_latitude: 34.0522,
    origin_longitude: -118.2437,
    destination_latitude: 36.1699,
    destination_longitude: -115.1398,
    ride_time: 5400,
    fare_price: 30.75,
    payment_status: "completed",
    driver_id: 3,
    user_id: "user789",
    created_at: "2024-10-03T11:45:00Z",
    driver: {
      first_name: "Alice",
      last_name: "Johnson",
      car_seats: 4,
    },
  },
];

export default function Home() {

  const [hasPermision, sethasPermision] = useState(false)
  const [initialLocation, setinitialLocation] = useState('')

  const dispatch: AppDispatch = useDispatch()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        sethasPermision(false)
        return
      }

      let location = await Location.getCurrentPositionAsync()

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude!,
        longitude: location.coords.longitude
      })
      setinitialLocation(address[0].city!)
      

      dispatch(setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        address: `${address[0].name}, ${address[0].region}`,
      }));
    }
    requestLocation()
  }, [])

  const handleDestinationPres =(location:{
    latitude:number,
    longitude:number,
    address:string
  }) =>{
    dispatch(setDestinationLocation(location))
    navigation.navigate('findRide')
  }
  return (
    <SafeAreaView>
      <FlatList
      keyboardShouldPersistTaps='always'
        showsVerticalScrollIndicator={false}
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <Image
              source={noResult}
              style={styles.image}
              accessibilityLabel="No recent rides found"
              resizeMode="contain"
            />
            <Text style={styles.text}>No recent rides found</Text>
            <ActivityIndicator size="small" color="#000" />
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={{ width: '95%', alignSelf: 'center' }}>
            <Text style={{ fontSize: 20 }}>
              Welcome User name👋
            </Text>
            <GoogleTextInput handlePress={handleDestinationPres} initialLocation={initialLocation} textInputBackgroundColor='' />

            <Text style={styles.currentLocation}>Your current location</Text>
            <View style={{ display: 'flex', flexDirection: 'row', height: 300, backgroundColor: 'transparent' }}>
              <Map />
            </View>
            <Text style={styles.currentLocation}>Recent Rides</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160, 
    height: 160, 
  },
  text: {
    fontSize: 12, 
  },
  currentLocation: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 3
  }
})