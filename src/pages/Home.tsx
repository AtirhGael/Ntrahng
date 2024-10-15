import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RideCard from '../components/RideCard'
import { Ride } from '../types/types';

const recentRides: Ride[] = [
  {
    origin_address: "123 Main St, Cityville",
    destination_address: "456 Elm St, Townsville",
    origin_latitude: 40.7128,
    origin_longitude: -74.0060,
    destination_latitude: 34.0522,
    destination_longitude: -118.2437,
    ride_time: 3600, // in seconds
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
    ride_time: 7200, // in seconds
    fare_price: 40.00,
    payment_status: "pending",
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
    ride_time: 5400, // in seconds
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
  return (
    <SafeAreaView>
      <FlatList 
      data={recentRides}
      renderItem={({item}) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  )
}