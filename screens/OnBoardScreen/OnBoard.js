import React, { useEffect } from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import styles from './styles'

const OnBoard = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate('Login')
    }, 3000)
    return (
        <View>
            <View style={styles.container}>
                <Image source={require('../../assets/images/Logo.png')} />
                <Image source={require('../../assets/images/Image1.png')} />
                <Image source={require('../../assets/images/Image2.png')} />
                <Image source={require('../../assets/images/Image3.png')} />
            </View>
        </View>
    );



}




export default OnBoard;
