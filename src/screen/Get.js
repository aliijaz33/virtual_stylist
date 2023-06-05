/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Get = ({ navigation }) => {
    const [data, setData] = useState();

    const getApiData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log(data);
    };

    useEffect(() => {
        getApiData();
    }, []);


    const buttonPress = () => {
        navigation.navigate('Post Method');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={buttonPress} style={styles.button}>
                <Text style={styles.buttonText}>Go to Post Method</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                {data?.map((item, index) => {
                    const { address } = item;
                    const { city, zipcode } = address;
                    return (
                        <View style={styles.dataView} key={index}>
                            <Text style={styles.dataText}>ID: {item.id}</Text>
                            <Text style={styles.dataText}>User Name: {item.username}</Text>
                            <Text style={styles.dataText}>Name: {item.name}</Text>
                            <Text style={styles.dataText}>Email: {item.email}</Text>
                            <Text style={styles.dataText}>Address:  City: {city}  Zip Code: {zipcode}</Text>
                            <Text style={styles.dataText}>Phone {item.phone}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Get;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,150,90,0.51)',
        paddingTop: '5%',
    },
    containerScroll: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,150,90,0.41)',
        paddingTop: '2%',
    },
    dataView: {
        width: '95%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: '2%',
    },
    dataText: {
        fontSize: 15,
        color: 'black',
        margin: '2%',
    },
    button: {
        width: 140,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
        alignSelf: 'flex-end',
        marginRight: '2%',
        borderRadius: 10,
        backgroundColor: 'rgba(0,150,90,1)',
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    }
});
