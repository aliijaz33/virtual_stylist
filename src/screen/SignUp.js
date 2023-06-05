/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, Alert, ActivityIndicator, View, TextInput, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import { Button, ThemeProvider } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUp = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [userData, setUserData] = useState([]);



    const Registration = async () => {
        try {
            const newUser = { name, email, password };

            setUserData([...userData, newUser]);

            await AsyncStorage.setItem('userData', JSON.stringify([...userData, newUser]));

            Alert.alert('Sign Up Successfull');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Sign Up Error', error.message);
        }
    };





    return (

        < >
            <StatusBar barStyle={'light-content'} backgroundColor='#084B3D' />

            <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.signupText}>Let's SignUp First</Text>

                    <View style={styles.inputView} >
                        <Icon name="user" size={25} color="rgba(0,150,90,1)" />
                        <TextInput value={name} onChangeText={text => setName(text)} style={styles.input} placeholder="Full Name" placeholderTextColor="#818181" />
                    </View>
                    <View style={styles.inputView} >
                        <Fontisto name="email" size={25} color="rgba(0,150,90,1)" />
                        <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.input} placeholder="Email Address" placeholderTextColor="#818181" />
                    </View>

                    <View style={styles.inputView} >
                        <MaterialCommunityIcons name="cellphone-key" size={25} color="rgba(0,150,90,1)" />
                        <TextInput value={password} onChangeText={text => setPassword(text)} style={styles.input} placeholder="Password" placeholderTextColor="#818181" />
                    </View>
                    <View style={styles.inputView} >
                        <MaterialCommunityIcons name="cellphone-key" size={25} color="rgba(0,150,90,1)" />
                        <TextInput value={confirm} onChangeText={text => setConfirm(text)} style={styles.input} placeholder="Confirm Password" placeholderTextColor="#818181" />
                    </View>

                    <Button onPress={Registration} title="Sign Up"
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
                        <Text style={styles.textRegister}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}><Text style={{ fontSize: 18, color: 'rgba(0,150,90,1)', paddingLeft: '1.5%' }}>Login</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );


}


export default SignUp;


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
    },
    signupText: {
        fontSize: 30,
        padding: '10%',
        color: 'rgba(0,150,90,1)',
        fontWeight: 'bold',
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
    placeholderStyle: {
        fontSize: 16,
        color: '#818181',
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
        color: '#818181',
    },
    textRegisterView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textRegister: {
        fontSize: 15,
        color: 'black',
    },
});
