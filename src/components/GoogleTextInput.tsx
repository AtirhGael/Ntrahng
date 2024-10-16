import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GoogleInputProps } from '../types/types'

const GoogleTextInput = ({
    icon,
    initialLocation,
    containerStyle,
    textInputBackgroundColor,
    handlePress,
}:GoogleInputProps) => {
  return (
    <View style={[styles.container]}>
      <Text>GoogleTextInput</Text>
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
        borderRadius:20,
        marginBottom:5,
        backgroundColor:'#FFF',
        elevation:1,
        width:'95%',
        alignSelf:'center'
    }
})