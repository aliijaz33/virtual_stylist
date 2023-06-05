/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Put = ({ navigation }) => {
    const [id, setId] = useState();
    const [newName, setName] = useState();

    const updateName = async () => {

        const idToUpdate = id;
        const updatedName = newName;

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: updatedName }),
        });
        if (response.ok) {
            console.log('Name updated successfully.');
        } else {
            console.error('Failed to update name.');
        }
    };

    const buttonPress = () => {
        navigation.navigate('Delete Method');
    };
    return (
        <View style={styles.container}>
            <View style={styles.textHeaddingView}>
                <Text style={styles.textHeadding}>Id</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter ID"
                placeholderTextColor="rgba(0,0,0,0.5)"
                value={id}
                onChangeText={setId}
            />
            <View style={styles.textHeaddingView}>
                <Text style={styles.textHeadding}>New Name</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter New Name"
                placeholderTextColor="rgba(0,0,0,0.5)"
                value={newName}
                onChangeText={setName}
            />
            <TouchableOpacity onPress={updateName} style={styles.button}>
                <Text style={styles.buttonText}>Update Name</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={buttonPress} style={styles.button}>
                <Text style={styles.buttonText}>Go to Delete Method</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Put;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,150,90,0.51)',
        paddingTop: '5%',
        alignItems: 'center',
    },
    textHeaddingView: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textHeadding: {
        color: 'black',
        fontSize: 16,
        marginBottom: 7,
    },
    input: {
        width: '95%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 13,
        marginBottom: 5,
        color: 'rgba(0,0,0,1)',
        backgroundColor: 'rgba(255,255,255,0.25)',
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
})