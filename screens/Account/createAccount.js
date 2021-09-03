import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'


const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>

const createAccount = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/images/Logo.png')} />
            </View>
            <View>
                <Text style={styles.signin}>Create Account</Text>
                <Text style={styles.subtext}>One Step Away From your Desires</Text>
            </View>
            <View style={styles.textInput}>
                <Text style={styles.textInput1}>Fullname</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.sectionStyle} >
                    <Ionicons name='md-person-outline' size={25} style={styles.ImageStyle} />
                    <TextInput
                        placeholder="Enter Fullname"
                    />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.textInput1}>Username / Email address</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.sectionStyle} >
                        <Ionicons name='ios-at' size={25} style={styles.ImageStyle} />
                        <TextInput
                            placeholder="Enter Password"
                        />
                    </View>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.textInput1}>Password</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.sectionStyle} >
                        <AntDesign name='lock' size={25} style={styles.ImageStyle} />
                        <TextInput
                            placeholder="secure password"
                        />
                    </View>
                    <View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.subtext2}>Your password must contain:</Text>
                            <Text style={styles.mark} >Atleast 6 characters</Text>
                            <Text style={styles.mark1} >Contains a number</Text>
                        </View>

                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <AntDesign style={styles.arrow} name='arrowright' size={25} />
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>

    );
}

export default createAccount;
