import React, {useState} from 'react';
import {TouchableOpacity,StyleSheet,Text,View,Image,SafeAreaView, ScrollView, StatusBar,ImageBackground } from 'react-native';
import { Card} from 'react-native-elements';
import Gallery from './gallery';

const Footer= ({navigation}) => {
    var Dimensions = require('Dimensions');
    var {width, height} = Dimensions.get('window');

    return (
        <View style={{flex: 1}}>
    <View style={{width: width, height: height - 200}}>main</View>
    <View style={{width: width, height: 200}}>footer</View>
</View>

    );

}

export default Footer;