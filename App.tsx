// App.tsx
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import ContextShare, {LoginContextAPI} from './src/context/AuthContext';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Details from './src/screens/Details/Details';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: {
    data: any;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const [token, setToken] = useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const {tokenStatus, setTokenStatus} = useContext(LoginContextAPI);

  const checkIsLoggedIn = async () => {
    const isLoggedIn = await AsyncStorage.getItem('user');
    
    if (isLoggedIn) {
      setToken(isLoggedIn);
    }else{
      setToken(null)
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkIsLoggedIn();
  // console.log(token,"tokenU")
  // console.log(tokenStatus,"context")
  }, [tokenStatus,token]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {token ? 
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home Page',
            }}
          />
         : 
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function Main(){
  return(
    <ContextShare>
      <App/>
    </ContextShare>
  )
}