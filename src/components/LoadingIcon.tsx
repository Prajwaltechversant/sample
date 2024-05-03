import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingIcon = () => {
  return (
    <View  style={{backgroundColor:'black', alignItems:'center', justifyContent:'center', flex:1, height:'100%'}}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
}

export default LoadingIcon

const styles = StyleSheet.create({})