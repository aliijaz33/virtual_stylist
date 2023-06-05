/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = () => {
        if (!email) {
            alert('Please Enter Your Email')
        } else if (!password) {
            alert('Please Enter Your Password')
        } else {
            navigation.navigate('Grading Policy');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.titleText}>Login your account.</Text>



            <View style={styles.inputContainer}>
                <View style={styles.textHeaddingView}>
                    <Text style={styles.textHeadding}>Email</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Email address here"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    value={email}
                    onChangeText={setEmail}
                />
                <View style={styles.textHeaddingView}>
                    <Text style={styles.textHeadding}>Password</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password here"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>

                <View style={styles.loginNavText}>
                    <Text style={{ color: 'black', fontSize: 15, marginBottom: 1 }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Signup');
                        }}>
                        <Text
                            style={{ color: 'rgba(0,150,90,1)', fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,150,90,0.51)',
        paddingTop: '5%',
        paddingBottom: 10,
    },
    title: {
        marginTop: '8%',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    titleText: {
        fontSize: 13,
        marginBottom: '20%',
        color: 'black',
    },
    inputContainer: {
        width: '95%',
        alignItems: 'center',
    },
    textHeaddingView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textHeadding: {
        color: 'black',
        fontSize: 16,
        marginBottom: 7,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 13,
        marginBottom: 5,
        color: 'rgba(0,0,0,1)',
        backgroundColor: 'rgba(255,255,255,0.25)',
    },
    forgot: {
        alignSelf: 'flex-end',
        marginTop: '3%',
    },
    forgotText: {
        color: 'rgba(0,150,90,1)',
        fontSize: 17,
        fontWeight: 'bold',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(0,150,90,1)',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    loginButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

    loginNavText: {
        flexDirection: 'row',
    },
});

export default LoginScreen;
