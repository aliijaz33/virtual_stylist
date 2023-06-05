/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GradePolicyScreen = ({ navigation }) => {

    const handlePress = () => {
        navigation.navigate('Calculate CGPA');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Letter Grades</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <Text style={styles.gradeText}>A Grade: 90-100</Text>
                <Text style={styles.gradeText}>B+ Grade: 85-89</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <Text style={styles.gradeText}>B Grade: 80-84</Text>
                <Text style={styles.gradeText}>C+ Grade: 75-79</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <Text style={styles.gradeText}>C Grade: 70-74</Text>
                <Text style={styles.gradeText}>D+ Grade: 65-69</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <Text style={styles.gradeText}>D Grade: 60-64</Text>
                <Text style={styles.gradeText}>E+ Grade: 55-59</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <Text style={styles.gradeText}>E Grade: 50-54</Text>
                <Text style={styles.gradeText}>F : Less than 50</Text>
            </View>

            <Text style={styles.headingText}>Grade Points</Text>
            <Text style={styles.gradeText}>90-100: 4.0</Text>
            <Text style={styles.gradeText}>85-89:  3.7</Text>
            <Text style={styles.gradeText}>80-84:  3.3</Text>
            <Text style={styles.gradeText}>75-79:  3.0</Text>
            <Text style={styles.gradeText}>70-74:  2.7</Text>
            <Text style={styles.gradeText}>65-69:  2.3</Text>
            <Text style={styles.gradeText}>60-64:  2.0</Text>
            <Text style={styles.gradeText}>55-59:  1.7</Text>
            <Text style={styles.gradeText}>50-54:  1.3</Text>
            <Text style={styles.gradeText}>Less than 50:  Faill</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Go to Calculate</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GradePolicyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,150,90,0.51)',

    },
    headingText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: '5%',
        paddingBottom: 10,
    },
    gradeText: {
        color: 'rgba(0,0,0, 0.5)',
        fontSize: 18,
    },
    button: {
        width: '50%',
        height: 50,
        backgroundColor: 'rgba(0,150,90,1)',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
})