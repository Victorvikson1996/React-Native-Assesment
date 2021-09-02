import React from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, Image, ScrollView, TextInput, Pressable, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import FlashMessage, { showMessage } from "react-native-flash-message";
// import { Root, Toast, Popup } from 'react-native-popup-confirm-toast'
// import { getStatusBarHeight } from 'react-native-status-bar-height';

const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>
console.log(showMessage)


const SignUp = () => {
    return (
        <ScrollView>
            <FlashMessage position="top" />
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
            </View>
            <View style={styles.container}>
                <View style={styles.sectionStyle} >
                    <Ionicons name='ios-at' size={25} style={styles.ImageStyle} />
                    <TextInput
                        placeholder="Enter Email Address"
                    />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.textInput1}>Password</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.sectionStyle} >
                        <Ionicons name='ios-mail' size={25} style={styles.ImageStyle} />
                        <TextInput
                            placeholder="Enter Password"
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() =>
                            showMessage({
                                message: "Invalid Username or Password",
                                type: "danger",

                            })
                        }
                        style={styles.button}

                    >
                        <AntDesign style={styles.arrow} name='arrowright' size={25} />
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <Pressable>
                        <Text style={styles.subtext2}>Don't Have an account? <Bold onPress={() => navigation.navigate('')}>Create Account</Bold></Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>

    );
}

export default SignUp;
