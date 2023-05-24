/* eslint-disable prettier/prettier */
import React, { useState, Component, useCallback, useEffect } from 'react'
import { Text, ActivityIndicator, Alert, View, TextInput, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, ThemeProvider } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState('');

    useEffect(() => {
        getUserData();
        TokenLogin();
        console.log(userData);
    }, []);

    const getUserData = async () => {
        try {
            const data = await AsyncStorage.getItem('userData');
            if (data) {
                setUserData(JSON.parse(data));
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const SignIn = async () => {
        try {
            const user = userData.find(u => u.email === email && u.password === password);
            if (user) {
                await AsyncStorage.setItem('login', email);
                navigation.navigate('Home');
            } else {
                Alert.alert('Login Error', 'Invalid username or password');
            }
        } catch (error) {
            Alert.alert('Login Error', error.message);
        }
    };

    const TokenLogin = async () => {
        const value = await AsyncStorage.getItem('login');
        if (value !== null) {
            navigation.navigate('Home');
            console.log("Login Value", value);
        } else {
            navigation.navigate('Login');
        }
    };

    return (
        <View style={styles.containerMain}>
            <StatusBar barStyle={'light-content'} backgroundColor='#084B3D' />

            <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/images/splash.png')} style={{ width: 320, height: 300, marginTop: 30 }} />
                    </View>
                    <View style={styles.container}>
                        <View style={styles.inputView} >
                            <MaterialCommunityIcons name="email" size={35} color="rgba(0,150,90,1)" />
                            <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.input} placeholder="Enter Email" placeholderTextColor="#818181" />
                        </View>

                        <View style={styles.inputView} >
                            <MaterialCommunityIcons name="cellphone-key" size={35} color="rgba(0,150,90,1)" />
                            <TextInput value={password} onChangeText={text => setPassword(text)} style={styles.input} placeholder="Enter Password" placeholderTextColor="#818181" />
                        </View>

                        <Button onPress={SignIn} title="Login"
                            buttonStyle={{
                                backgroundColor: 'rgba(0,150,90,1)',
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: '75%',
                                marginHorizontal: 50,
                                marginVertical: 20,
                            }}
                            titleStyle={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}
                        />

                        <View style={styles.textRegisterView}>
                            <Text style={styles.textRegister}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}><Text style={{ fontSize: 18, color: 'rgba(0,150,90,1)', paddingLeft: '1.5%' }}>SignUp</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );

}

export default Login;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: 'rgba(20, 20, 20, 0.5)',
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        width: '90%',
        borderColor: '#A5D0CF',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        marginTop: '3%',
    },
    input: {
        height: 40,
        width: 300,
        margin: 5,
        borderWidth: 0,
        padding: 10,
        color: '#818181',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#0CBDB7'
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
        color: '#818181'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    textRegisterView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textRegister: {
        fontSize: 15,
        color: 'black',
    }
});