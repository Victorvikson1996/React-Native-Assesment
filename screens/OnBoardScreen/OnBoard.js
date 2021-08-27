import React, { useEffect } from 'react';
import { View, StyleSheet, Image, } from 'react-native';

// const width = Dimensions.get('window');
// const height = Dimensions.get('window');

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


const styles = StyleSheet.create({


    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    image1: {

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})





export default OnBoard;
