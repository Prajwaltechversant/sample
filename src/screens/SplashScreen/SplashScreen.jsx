import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export class SplashScreen extends Component {
  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <Image src='https://clipground.com/images/sample-logo-png.jpg' />
      </View>
    )
  }
}

export default SplashScreen
