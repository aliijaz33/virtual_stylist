/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Delete = () => {
    const [id, setId] = useState();

    const DeleteByID = async () => {

        const idToDelete = id;

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idToDelete}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log('Entry deleted successfully');
        } else {
            console.error('Failed to delete the entry');
        }
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
            <TouchableOpacity onPress={DeleteByID} style={styles.button}>
                <Text style={styles.buttonText}>Delete Entry</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Delete;

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