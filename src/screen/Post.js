/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Post = ({ navigation }) => {

    const PostNewEntry = () => {
        const newEntry = {
            name: 'Azka Malik',
            username: 'azkam786',
            email: 'azkam810@gmail.com',
            address: {
                street: '123 Main St',
                suite: 'Apt 4',
                city: 'Islamabad',
                zipcode: '10001',
                geo: {
                    lat: '30.7128',
                    lng: '-54.0060',
                },
            },
            phone: '0300-1234567',
            website: 'azka.com',
            company: {
                name: 'comsats',
                catchPhrase: 'Lorem ipsum dolor sit amet',
                bs: 'Lorem ipsum',
            },
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry),
        })
            .then(response => response.json())
            .then(data => {
                console.log('New entry added:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const buttonPress = () => {
        navigation.navigate('Put Method');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>New Entry</Text>
            <Text style={styles.dataText}>name: 'Azka Malik',</Text>
            <Text style={styles.dataText}>username: 'azkam786',</Text>
            <Text style={styles.dataText}>email: 'azkam810@gmail.com',</Text>
            <Text style={styles.dataText}>  address:
                street: '123 Main St',
                suite: 'Apt 4',
                city: 'Islamabad',
                zipcode: '10001',
                geo:
                lat: '30.7128',
                lng: '-54.0060',</Text>
            <Text style={styles.dataText}>phone: '0300-1234567',</Text>
            <Text style={styles.dataText}>website: 'azka.com',</Text>
            <Text style={styles.dataText}>company:
                name: 'comsats',
                catchPhrase: 'Lorem ipsum dolor sit amet',
                bs: 'Lorem ipsum',
            </Text>
            <TouchableOpacity onPress={PostNewEntry} style={styles.button}>
                <Text style={styles.buttonText}>Add new Entry</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={buttonPress} style={styles.button}>
                <Text style={styles.buttonText}>Go to Put Method</Text>
            </TouchableOpacity>
        </View >
    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,150,90,0.51)',
        paddingTop: '5%',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dataText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        margin: '2%',
        alignSelf: 'flex-start',
        paddingLeft: '1%',
    },
    button: {
        width: 140,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
        marginTop: '10%',
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
