import { StyleSheet } from "react-native";

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
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,

    },
    ImageStyle: {
        padding: 5,
        color: '#828CA2'
    },
    sectionStyle: {
        flexDirection: 'row',
        borderWidth: 2,
        height: 50,
        borderRadius: 8,
        margin: 10,
        borderColor: '#828CA2',
        marginLeft: 25,
        marginRight: 25,
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#1B2F5D',
        // paddingVertical: 15,
        // paddingHorizontal: 16,
        borderRadius: 15,
        margin: 25,
        height: 60

    },

    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        position: 'absolute',
        margin: 25
    },

    arrow: {
        color: '#FFFFFF',
        justifyContent: 'flex-end',
        marginStart: 250,
        paddingVertical: 15,
        paddingHorizontal: 15

    },
    subtext2: {
        paddingHorizontal: 20,
        paddingTop: 5,
        color: 'rgba(27, 47, 93, 0.75)',
        fontSize: 16,
        fontFamily: 'Open-sans',
        marginStart: 10
    },
})




export default styles;