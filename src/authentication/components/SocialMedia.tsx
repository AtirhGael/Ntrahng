import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const SocialMedia = () => {
  const handleLogin = (platform:string) => {
    console.log(`Login with ${platform}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleLogin('Google')} style={[styles.button,{backgroundColor: '#db4437'}]}>
        <FontAwesome name="google" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLogin('Facebook')} style={[styles.button,{backgroundColor: '#3b5998'}]}>
        <FontAwesome name="facebook" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLogin('Apple')} style={[styles.button,{backgroundColor: '#000'}]}>
        <MaterialCommunityIcons name="apple" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    // backgroundColor: '#3b5998', 
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  googleButton: {
    backgroundColor: '#db4437', 
  },
  appleButton: {
    backgroundColor: '#000',
  },
});

export default SocialMedia;
