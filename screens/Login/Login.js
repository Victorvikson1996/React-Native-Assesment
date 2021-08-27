import React from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, Image, ScrollView } from 'react-native';




const Login = () => {
    return (
        <ScrollView>
            <View style={styles.logo}>
                <Image source={require('../../assets/images/Logo.png')} />
            </View>
            <View style={styles.SignIn}>
                <Text>Sign In</Text>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    logo: {
        marginLeft: '13%',
        marginRight: '77%',
        marginTop: '5%',

    },
    SignIn: {
        display: 'flex',
        flex: 1,
        fontFamily: 'sans'

    }

})

export default Login;
