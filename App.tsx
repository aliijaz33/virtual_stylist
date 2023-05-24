/* eslint-disable prettier/prettier */
import React from 'react';

import Splash from './src/screen/Splash';
import Login from './src/screen/login';
import Home from './src/screen/Home';
import SignUp from './src/screen/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="splash"
          component={Splash}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'rgba(0,150,90,1)',
            },
            headerTitleAlign: 'center',
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'rgba(0,150,90,1)',
            },
            headerTitleAlign: 'center',
          }}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
