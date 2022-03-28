import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';

const Description = ({navigation}) =>{
    const name = navigation.getParam('name');
    const author= navigation.getParam('author');
    const image= navigation.getParam('image');
    const rating=navigation.getParam('rating');
    const desc=navigation.getParam('description');
    return(
       
        <View style={styles.conainer}>
             <ScrollView vertical={true}>
            <Image style={styles.image} source={{uri:image}}/>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>By</Text>
            <Text style={styles.text}>{author}</Text>
            <Text style={styles.rate}>Rating : {rating}</Text>
            <Text style={styles.content}>{desc}</Text>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.loginText}>Subscribe To Read More</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
       
    );
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
 image:{
     height :350,
     width :400,
     marginTop: 20,
     resizeMode: 'contain',
    alignSelf: 'center',
 },
 text:{
    textAlign: 'center',
    fontSize: 24,
    paddingTop :10,
    fontWeight: "bold",
    color :"black",
 },
 rate:{
    textAlign: 'center',
    fontSize: 20,
    paddingTop :10,
    color :"black",
 },
 content:{
    fontSize:16,
    flexDirection: "row",
    fontFamily: "Cochin",
    color:'black',
    justifyContent: "center",
    marginLeft:20,
    marginRight:20,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'justify',
    lineHeight:20,  
 },
 Btn: {
    width: "80%",
    textAlign:'center',
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    marginTop: 5,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
},
loginText: {
    color: "black",
    textAlign:'center',
    fontSize:20,
},
});

export default Description;