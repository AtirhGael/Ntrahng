import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Settings from '../pages/Settings';
import Activities from '../pages/Activities';
import Home from '../pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export function ButtomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
    >
      <Tab.Screen
        name="dashboard"
        component={Home}
        options={{
        headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-lightning-bolt" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="delivery"
        component={Home}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color }) => (
            <Ionicons name="car-sport-sharp" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-path" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color="black" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}