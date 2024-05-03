import React, { useEffect, useState } from 'react';

// screens
import Login from './src/screens/Login/Login';
import Home from './src/screens/Home/Home';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import Details from './src/screens/Details/Details';



export type RootStackParamList = {
  Login: undefined,
  Home: undefined,
  Details: {
    data: any
  }


}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {

  const [token, setToken] = useState<any>(false)
  const [isLoading, setisloading] = React.useState(true)

  const isLoggedIn = async () => {
    const isLoeggedIn = await AsyncStorage.getItem('user')
    console.log(isLoeggedIn, "loginSt")
    if (isLoeggedIn === "true") {
      setToken(isLoeggedIn)
      console.log(token, "token")
    }
    setisloading(false)

  }

  useEffect(() => {
    isLoggedIn()
  }, [])
  if (isLoading) {
    return (
      <SplashScreen />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {
          token ?
            <Stack.Screen name='Home'
              component={Home}
              options={{
                title: "Home Page",
              }}
            />
            :
            <>
              <Stack.Screen name='Login' component={Login} />
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;



