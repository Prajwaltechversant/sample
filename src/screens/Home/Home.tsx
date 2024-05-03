import { Button, FlatList, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { RootStackParamList } from '../../../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ListView from '../../components/ListView'
import LoadingIcon from '../../components/LoadingIcon'
import VerticalList from '../../components/VerticalList'
import AsyncStorage from '@react-native-async-storage/async-storage'


type LoginProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({ route, navigation }: LoginProps) => {

  const [data, setData] = useState([])

  const getdata = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const jsonResponse = await response.json()
    setData(jsonResponse)
    // console.log(data)
  }
const handleLogout= async()=>{
  const user=   await AsyncStorage.removeItem('user')

}

  useEffect(() => {
    getdata()
  }, [])
  return (
    <View >
      <ListView />
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Button title='Logout' onPress={handleLogout} />
      </View>

      <FlatList
          data={data}
          renderItem={({item}) =>
            <VerticalList data={item} />
 
          }
          keyExtractor={(item: any) => item.id}
        />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})