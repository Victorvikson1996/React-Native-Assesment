import React from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, Image, ScrollView, TextInput, SafeAreaView, } from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons'



const Login = () => {
    return (
        <ScrollView>
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/images/Logo.png')} />
            </View>
            <View>
                <Text style={styles.signin}>Sign In</Text>
                <Text style={styles.subtext}>Enter login credentials</Text>
            </View>
            <View style={styles.textInput}>
                <Text style={styles.textInput1}>Username / Email address</Text>
                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../../assets/images/at.png')}
                        style={styles.iconAt}
                    />
                    <TextInput
                        style={styles.emailBox}
                        placeholder="Enter Email Address"

                    />
                </View>



            </View>
        </ScrollView>

    );
}


const styles = StyleSheet.create({
    logo: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,

    },

    signin: {
        fontWeight: 'bold',
        color: '#1B2F5D',
        fontSize: 32,
        letterSpacing: 0.5,
        paddingHorizontal: 50,
        marginTop: 50,
        fontFamily: 'Open-sans'
    },
    subtext: {
        paddingHorizontal: 50,
        paddingTop: 5,
        color: 'rgba(27, 47, 93, 0.75)',
        fontSize: 16,
        fontFamily: 'Open-sans'
    },
    textInput: {
        paddingTop: 50,
        marginLeft: 20

    },

    textInput1: {
        fontWeight: 'bold',
        color: '#1B2F5D',
        fontSize: 14,
        paddingHorizontal: 20,
        fontFamily: 'Open-sans',
        marginHorizontal: 15,

    },
    emailBox: {
        borderRadius: 20,
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 2,
        marginTop: 4,
        borderColor: '#828CA2',
    },
    iconAt: {
        marginHorizontal: 10
    },
    sectionStyle: {

    }


})

export default Login;
