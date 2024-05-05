import {
  Button,
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {RootStackParamList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ListView from '../../components/ListView';
import LoadingIcon from '../../components/LoadingIcon';
import VerticalList from '../../components/VerticalList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginContextAPI} from '../../context/AuthContext';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({route, navigation}: LoginProps) => {
  const [data, setData] = useState([]);
  const {tokenStatus, setTokenStatus} = useContext(LoginContextAPI);
  const [refreshing, setRefreshing] = useState(false);

  const getdata = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonResponse = await response.json();
    setData(jsonResponse);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setTokenStatus(null);
  };

  useEffect(() => {
    getdata();
    setRefreshing(false);
  }, [refreshing]);

  const getItem: any = (data: any, index: number) => data[index];
  const getItemCount = () => data.length;

  return (
    <View>
      <StatusBar
        backgroundColor={'blue'}
        animated={true}
        barStyle={'light-content'}
      />

      <ListView />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Logout" onPress={handleLogout} />
      </View>

      {/* <FlatList
        data={data}
        renderItem={({item}) => <VerticalList data={item} />}
        keyExtractor={(item: any) => item.id}
        // refreshing={refreshing}
        // onRefresh={() => setRefreshing(true)}
        refreshControl={
          <RefreshControl refreshing={refreshing} 
          onRefresh={()=>setRefreshing(true)} colors={['yellow']} tintColor={'yellow'} 
           progressBackgroundColor={'purple'}
           title='Loading'  />
        }
        
      /> */}
      <VirtualizedList
        data={data}
        renderItem={({item}) => <VerticalList data={item} />}
        getItem={getItem}
        getItemCount={getItemCount}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
            colors={['yellow']}
            tintColor={'yellow'}
            progressBackgroundColor={'purple'}
            title="Loading"
          />
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
