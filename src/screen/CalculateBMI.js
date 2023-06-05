/* eslint-disable prettier/prettier */

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalculateBMI = ({ navigation }) => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('');
    //const [bmiss, setBmiss] = useState([]);


    // useEffect(() => {
    //     const allBmi = [...bmi, bmi];
    //     setBmiss(allBmi);
    // }, [calculate]);

    const calculate = () => {
        if (!weight) {
            alert('Please Enter Your weight')
        } else if (!height) {
            alert('Please Enter your height')
        } else {
            const weightInKg = parseFloat(weight);
            const heightInM = parseFloat(height) / 100;

            const bmiResult = weightInKg / (heightInM * heightInM);
            setBMI(bmiResult.toFixed(2));
            navigation.navigate('Result', bmi);
        }
    };

    const logout = async () => {
        try {
            const token = 'login';
            await AsyncStorage.removeItem(token);
            navigation.navigate('Login')
        } catch (error) {
            console.log('Logout Error', error);
        }
    };


    //console.log("Your BMIsss is  ", bmiss);
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.label}>Your Weight:</Text>
                <TextInput
                    onChangeText={(txt) => {
                        setWeight(txt);
                    }}
                    style={styles.input}
                    placeholder="Enter Your Weight in kg"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    value={weight}
                />
                <Text style={styles.label}>Your Height:</Text>
                <TextInput
                    onChangeText={(txt) => {
                        setHeight(txt);
                    }}
                    style={styles.input}
                    placeholder="Enter Your Height in cm meters"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    value={height}
                />

                <TouchableOpacity
                    onPress={calculate}
                    style={styles.btn}
                >
                    <Text style={styles.btnTxt}>Calculate BMI</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={logout}
                    style={styles.btn}
                >
                    <Text style={styles.btnTxt}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CalculateBMI;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flex: 1,
        backgroundColor: 'rgba(0,150,90,0.51)',
        paddingLeft: '5%',
    },

    label: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 2,
        paddingTop: '4%',

    },
    input: {
        width: '93%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 13,
        marginBottom: 5,
        color: 'rgba(0,0,0,1)',
        backgroundColor: 'rgba(255,255,255,0.25)',
    },
    btn: {
        width: '35%',
        height: 40,
        marginTop: 19,
        backgroundColor: 'rgba(0,150,90,1)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginEnd: '10%',
        marginBottom: '3%',
    },
    btnTxt: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subjectList: {
        flexDirection: 'row',
        width: '95%',
        height: 50,
        backgroundColor: 'rgba(0,150,90,1)',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: '3%',
        justifyContent: 'space-between',
    },
    listText: {
        fontSize: 15,
        color: 'black',
        marginLeft: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    listNameText: {
        fontSize: 22,
        color: 'black',
        marginLeft: 15,
        fontWeight: 'bold',

    },
    cross: {
        backgroundColor: 'rgba(70,160,120,1)',
        height: 50,
        width: 50,
        //borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'flex-end',
    },
});
