/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultScreen = ({ route }) => {
    const bmi = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.resultText, { fontSize: 25, marginTop: '3%' }]}>Calculated Result</Text>
            <Text style={styles.resultText}>Your BMI is:  {bmi}</Text>

        </ScrollView>
    )
}

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,150,90,0.51)',
    },
    resultText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: '3%',
    },
    detailsText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'flex-start',
        marginLeft: '5%',
    },
    listView: {
        width: '90%',
    },
    subjectList: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(0,150,90,1)',
        borderRadius: 5,
        marginTop: '3%',
        justifyContent: 'space-between',
        padding: '2%'
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
});