/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Pressable, Image, SafeAreaView, TouchableOpacity, ToastAndroid } from 'react-native'
import { items } from '../database/database'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from '@rneui/base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from '../components/SideMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import SearchProduct from './SearchProduct'
import WishList from './Wishlist'
import SingalProduct from './SingleProduct'
import MyCart from './Mycart'
// import Payment from './Payment'


const Drawer = createDrawerNavigator();

function Setting({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Setting Screen</Text>

      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default function App() {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerActiveBackgroundColor: 'rgba(0,140,140,1)',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          fontSize: 17
        },
        drawerStyle: {
          width: 250,
        },
      }} drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'rgba(0,150,90,1)',
          },
          headerTitleAlign: 'center',

          drawerIcon: (({ color }) => <Ionicons name="home" size={25} color={color} />)
        }} name="Home" component={Home} />
        <Drawer.Screen options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgba(0,150,90,1)',
          },
          headerTitleAlign: 'center',
          drawerIcon: (({ color }) => <Ionicons name="md-heart-outline" size={25} color={color} />)
        }} name="Wish List" component={WishList} />
        <Drawer.Screen options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgba(0,150,90,1)',
          },
          headerTitleAlign: 'center',
          drawerIcon: (({ color }) => <MaterialIcons name="details" size={25} color={color} />)
        }} name="Product Details" component={SingalProduct} />
        <Drawer.Screen options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgba(0,150,90,1)',
          },
          headerTitleAlign: 'center',
          drawerIcon: (({ color }) => <Ionicons name="cart" size={25} color={color} />)
        }} name="My Cart" component={MyCart} />
        <Drawer.Screen options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgba(0,150,90,1)',
          },
          headerTitleAlign: 'center',
          drawerIcon: (({ color }) => <Ionicons name="settings-sharp" size={25} color={color} />)
        }} name="Settings" component={Setting} />
        {/* <Drawer.Screen options={{ headerShown: false }} name="Search Products" component={SearchProduct} /> */}
        {/* <Drawer.Screen options={{ headerShown: true }} name="Payment Page" component={Payment} /> */}

      </Drawer.Navigator>
    </NavigationContainer>
  );
}



const Home = ({ navigation }) => {

  //AsyncStorage.clear();


  const Products = async (item) => {

    try {
      await AsyncStorage.setItem('products', JSON.stringify(item));
      navigation.navigate('Product Details');
    } catch (error) {

      console.log(error);
    }
  }

  const [count, setCount] = useState(0);
  const [allId, setAllId] = useState('');

  const wishList = async (item) => {

    let values = await AsyncStorage.getItem('wishItems');
    values = JSON.parse(values);

    let itemWish = [...new Set(values)];

    let array = itemWish;
    array.push(item);
    let arra = [...new Set(array)];
    setAllId(arra)
    const cnt = Object.keys(arra).length;
    setCount(cnt);

    try {
      await AsyncStorage.setItem('wishItems', JSON.stringify(arra));
      ToastAndroid.show(
        'Item Added Successfully to Wishlist',
        ToastAndroid.SHORT,
      );
      //navigation.navigate('Home');
    } catch (error) {
      return error;
    }
  }


  return (

    <View style={{ flex: 1, marginBottom: 120 }}>



      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} >
          <MaterialIcons name='menu' color='#000' size={27} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Let's Try & Shop
        </Text>

      </View>
      <View style={styles.iconsView}>

        <TouchableOpacity onPress={() => navigation.navigate('Wish List')} style={{ flexDirection: 'row' }} >
          <FontAwesome name='heart-o' color='rgba(0,150,90,1)' size={30} />
          <Text style={{
            paddingLeft: 3,
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#000',
            borderRadius: 20,
            height: 20,
            width: 20,
            marginTop: '30%',
          }}>{count} </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('My Cart')}>
          <Text style={{ marginLeft: 15 }}><Ionicons name='cart' color='rgba(0,150,90,1)' size={30} />
          </Text></TouchableOpacity>


      </View>
      <SafeAreaView >
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Products(item)} style={styles.itemContainer}>

              <View style={{ width: 192, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }} >
                <TouchableOpacity onPress={() => wishList(item)} style={{ marginLeft: 120, marginTop: 5 }}><FontAwesome name='heart-o' color='#000' size={30} /></TouchableOpacity>
                <Text style={{ marginRight: 115, marginTop: -30, backgroundColor: '#6BFE5C', color: '#000' }}>10% Off</Text>
                <Image source={item.productImage} style={{ marginTop: '4%', width: 135, height: 180 }} />
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.productName}</Text>
                <Text style={{ fontSize: 15 }}>Rs {item.productPrice}</Text>
                <Text style={{ marginTop: '5%', alignSelf: 'center' }}>
                  <MaterialIcons name='star-rate' color='#FCB224' size={15} />
                  <MaterialIcons name='star-rate' color='#FCB224' size={15} />
                  <MaterialIcons name='star-rate' color='#FCB224' size={15} />
                  <MaterialIcons name='star-rate' color='#FCB224' size={15} />
                  <MaterialIcons name='star-rate' color='#FCB224' size={15} />
                </Text>
              </View>

            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};




const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: 'rgba(0,150,90,1)',
    alignItems: 'center',
    paddingLeft: '1%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: '19%',
  },
  iconsView: {
    flexDirection: 'row',
    marginRight: '5%',
    marginTop: '2%',
    justifyContent: 'flex-end',
    height: 50,
    width: '100%',
    padding: 8,
  },
  itemContainer: {
    //flex: 1,
    margin: 3,
    borderWidth: 1,
    borderColor: '#F2C688',
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 3,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFA801'
  },
  text: {
    fontSize: 16,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

