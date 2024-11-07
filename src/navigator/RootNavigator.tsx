import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import OnboardingScreen from '../authentication/Onbording';
import Login from '../authentication/Login';
import SignIn from '../authentication/SignUp';
import { ButtomTabNavigation } from './ButtomTab';
import FindRide from '../pages/drive/FindRide';



const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  onbording:undefined;
  Home: undefined;
  login: undefined;
  register: undefined;
  findRide: undefined;
  displayRide: undefined;
}

function RootNavigator() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown : false
    }}
    >
      <Stack.Screen name="onbording" component={OnboardingScreen} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={SignIn} />
      <Stack.Screen name="Home" component={ButtomTabNavigation} />
      <Stack.Screen name="findRide" component={FindRide} />
      <Stack.Screen name="displayRide" component={FindRide} />
    </Stack.Navigator>
  );
}

export default RootNavigator;