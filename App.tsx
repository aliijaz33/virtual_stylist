/* eslint-disable prettier/prettier */
// import React, {useState, useEffect} from 'react';

// import Splash from './src/screen/Splash';
// import Login from './src/screen/login';
// import Home from './src/screen/Home';
// import SignUp from './src/screen/SignUp';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Alert} from 'react-native';
// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState('');

//   useEffect(() => {
//     HandleIsLoggedIn();
//   }, []);

//   const HandleIsLoggedIn = async () => {
//     try {
//       const data = await AsyncStorage.getItem('login');
//       setIsLoggedIn(data);
//       if (data) {
//         console.log('At Home for Logout', data);
//       }
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="splash">
//         <Stack.Screen
//           options={{headerShown: false}}
//           name="splash"
//           component={Splash}
//         />

//         <Stack.Screen
//           options={{headerShown: false}}
//           name="Home"
//           component={Home}
//         />
//         <Stack.Screen
//           options={{
//             headerShown: true,
//             headerStyle: {
//               backgroundColor: 'rgba(0,150,90,1)',
//             },
//             headerTitleAlign: 'center',
//           }}
//           name="Login"
//           component={Login}
//         />
//         <Stack.Screen
//           options={{
//             headerShown: true,
//             headerStyle: {
//               backgroundColor: 'rgba(0,150,90,1)',
//             },
//             headerTitleAlign: 'center',
//           }}
//           name="SignUp"
//           component={SignUp}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Get from './src/screen/Get';
import Post from './src/screen/Post';
import Put from './src/screen/Put';
import Delete from './src/screen/Delete';
// import LoginScreen from './src/screen/LoginScreen';
// import GradePolicyScreen from './src/screen/GradePolicyScreen';
// import CalculateCGPAScreen from './src/screen/CalculateCGPAScreen';
// import ResultScreen from './src/screen/ResultScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Get Method"
          component={Get}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'rgba(0,150,90,1)',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
