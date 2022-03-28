import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,Image } from 'react-native';


const BaseHome = ({navigation}) => {

      
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Welcome! </Text>
            <Text style={styles.logo}>Books App</Text>
            <TouchableOpacity  onPress={()=> navigation.navigate('Login')} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('Register')}  style={styles.loginBtn}>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
            


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card_image: {
        width: 250,
        height: 250,
        borderRadius: 10
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "black",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "black"
    }
});

export default BaseHome;