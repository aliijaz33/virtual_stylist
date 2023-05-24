/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  StyleSheet, Text, Alert, Button, View, StatusBar, Image, ImageBackground, TouchableOpacity, SafeAreaView,
  ScrollView, Easing
} from 'react-native'
import {

  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SideMenu = (props) => {
  // console.log('Propsssssss', props.navigation);
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('login');
      props.navigation.canGoBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0,150,90,1)' }}>
        <ImageBackground source={require("../../src/assets/images/background.jpg")} style={{ height: 150, width: '100%' }}>
          <View style={{ paddingTop: '20%' }}>
            <Image source={require("../../src/assets/images/p-img.jpg")} style={{ width: 70, height: 70, borderRadius: 100 / 2, borderWidth: 2, marginLeft: '3%' }} />
            <Text style={{ textAlign: 'left', marginLeft: '3%', color: '#000', fontWeight: 'bold' }}>Azka Malik</Text>
          </View>
        </ImageBackground>

        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity onPress={logout} style={{ flexDirection: 'row', margin: 20, width: '100%' }}>
          <MaterialCommunityIcons name="logout" size={25} color={'black'} />
          <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: 'bold', color: 'black' }}>Log Out</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  )

}

export default SideMenu;
