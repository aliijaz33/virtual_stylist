/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';


const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('Login');
    }, 3000);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,150,90,1)' }}>
            <StatusBar barStyle={'light-content'} backgroundColor='#084B3D' />
            <Text style={{ fontSize: 40, color: 'black' }}>Welcome To</Text>
            <Text style={{ fontSize: 40, color: 'black' }} >Virtual Stylist</Text>
            <Image source={require('../assets/images/splash.png')} style={{ width: 300, height: 300 }} />
        </View>

    );

};

export default Splash;
