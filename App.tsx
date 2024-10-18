import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigator/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("./src/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("./src/assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("./src/assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("./src/assets/fonts/PlusJakartaSans-Medium.ttf"),
    Jakarta: require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("./src/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
});
