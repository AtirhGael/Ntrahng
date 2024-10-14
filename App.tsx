import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigator/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
