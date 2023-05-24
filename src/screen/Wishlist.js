/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, Button, View, StatusBar, Image, FlatList, ImageBackground, TouchableOpacity, SafeAreaView,
  ScrollView, Easing
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const WishList = ({ navigation }) => {

  const [vals, setValues] = useState([]);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      WishItems();
    });
    return unsubscribe;
  }, [navigation]);

  const WishItems = async () => {
    let values = await AsyncStorage.getItem('wishItems');
    values = JSON.parse(values);
    //console.log('WishList', values);
    setValues(values);
  };

  const deleteItem = async (itemId) => {
    try {
      // Get the existing items from AsyncStorage
      const existingItems = await AsyncStorage.getItem('wishItems');

      // Parse the existing items to an array
      let itemsArray = JSON.parse(existingItems);

      if (itemsArray === null) {
        itemsArray = []; // If no items exist, initialize the array
      } else {
        // Find the index of the item with the specified ID
        const index = itemsArray.findIndex((item) => item.id === itemId);

        if (index !== -1) {
          // Remove the item from the array
          itemsArray.splice(index, 1);

          // Save the updated items array to AsyncStorage
          await AsyncStorage.setItem('wishItems', JSON.stringify(itemsArray));

          console.log('Item removed successfully!');
        } else {
          console.log('Item not found!');
        }
      }
    } catch (error) {
      console.log('Error removing item:', error);
    }
    console.log(itemId);
  }


  return (
    <SafeAreaView >
      <FlatList
        data={vals}
        renderItem={({ item }) => (
          <View style={{
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
          }}>

            <View style={{ width: 192, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }} >
              <TouchableOpacity onPress={() => { deleteItem(item.id) }} style={{ marginLeft: 120, marginTop: 5 }}><MaterialIcons name='delete' color='gray' size={30} /></TouchableOpacity>
              <Text style={{ marginRight: 125, marginTop: -30, backgroundColor: '#6BFE5C', color: '#000' }}>10% Off</Text>
              <Image source={item.productImage} style={{ marginTop: '4%', width: 135, height: 135 }} />
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
          </View>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  );

}
export default WishList;
