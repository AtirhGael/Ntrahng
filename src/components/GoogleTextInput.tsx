import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { GoogleInputProps } from '../types/types'
import 'react-native-get-random-values';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { search } from '../assets/images';

const GoogleTextInput = ({
    initialLocation,
    textInputBackgroundColor,
    handlePress,
}:GoogleInputProps) => {
  return (
    <View >
      <GooglePlacesAutocomplete
      fetchDetails={true}
      query={{
        key: 'AIzaSyCimQmlpDofy0SJ8G39L5AeNx5Z3KW8dWs',
        language: 'en',
      }}
      placeholder='where do want to go'
      debounce={200}
      styles={{
        textInputContainer:{
            alignItems:'center',
            justifyContent:'center',
            // borderRadius:10,
            // marginHorizontal:20
            shadowColor:'#d4d4d4',
            position:'relative',
            // elevation:0.1
        },
        textInput:{
            backgroundColor:textInputBackgroundColor || 'white',
            fontSize:16,
            fontWeight:'600',
            marginTop:5,
            width:'100%',
            borderRadius:10
        },
        listView:{
            backgroundColor:textInputBackgroundColor || 'white',
            position:'relative',
            top:0,
            width:'100%',
            borderRadius:10,
            shadowColor:'#d4d4d4',
            zIndex:99,

        }
      }}
      onPress={(data, details)=>{
        console.log(data, details,'details');
        handlePress({
            latitude:details?.geometry.location.lat!,
            longitude:details?.geometry.location.lng!,
            address:data.description
        })
      }}
    textInputProps={{
        placeholderTextColor:'gray',
        placeholder:initialLocation || 'where do you want to go'
    }}
      />
      
    </View>
  )
}

export default GoogleTextInput

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        marginBottom:5,
        marginTop:15,
        // backgroundColor:'#FFF',
        // elevation:1,
        width:'100%',
        alignSelf:'center'
    }
})