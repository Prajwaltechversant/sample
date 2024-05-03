import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoadingIcon from './LoadingIcon'

type itemProps = {
  name: any
}






const ListView = () => {

  const [data, setData] = useState([])

  const [isLoading, setIsloading] = useState(true)
  const getData = async () => {
    let data = await fetch('https://fakestoreapi.com/users')
    let jsonData = await data.json()
    setData(jsonData)
    setIsloading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  if (isLoading) {
    return (
      <LoadingIcon />
    )
  }

  const handledetails = (item: any) => {

  }
  return (
    <View>
      <View>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({item, index, separators}) =>
            
            <TouchableOpacity 
            onPress={() => handledetails(item)} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal:20,padding:5 }}
            
            >
              <View style={styles.card}>
                <Text style={styles.text}>
                  {item.username}
                </Text>
                <Text style={styles.text}>
                  {item.email}
                </Text>
                <Text style={styles.text}>
                  {item.city}
                </Text>
              </View>
            </TouchableOpacity>
          }

          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  )
}

export default ListView

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  card: {
    backgroundColor: 'beige',
    width: 130,
    height: 130,
    marginVertical: 10,
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
  },
  
})