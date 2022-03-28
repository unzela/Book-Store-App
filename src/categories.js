import React, {useState} from 'react';
import {TouchableOpacity,StyleSheet,Text,View,Image,SafeAreaView, ScrollView, StatusBar,ImageBackground } from 'react-native';
import { Card} from 'react-native-elements';
import Gallery from './gallery';
const Category= ({navigation}) => {
    
 return(
    
    <View style={{ Height: "auto"}}>
         <ScrollView vertical={true}>
     <TouchableOpacity onPress={()=> navigation.navigate('Gallery',{genre:'Love'})}>
        <Card>
        <ImageBackground source={require('./../assets/g-l.jpg')} resizeMode="cover" style={styles.image}>
       </ImageBackground>
        </Card>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> navigation.navigate('Gallery',{genre:'Mystery'})}>
        <Card>
        <ImageBackground source={require('./../assets/g-m.png')} resizeMode="cover" style={styles.image}>
       </ImageBackground>    
        </Card>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('Gallery',{genre:'Horror'})}>
        <Card>
        <ImageBackground source={require('./../assets/g-h.jpg')} resizeMode="cover" style={styles.image}>
       </ImageBackground>  
        </Card>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('Gallery',{genre:'Bio'})}>
        <Card>
        <ImageBackground source={require('./../assets/g-b.jpg')} resizeMode="cover" style={styles.image}>
       </ImageBackground>     
        </Card>
    </TouchableOpacity>
    </ScrollView>
    </View>
    
  );
};
const styles=StyleSheet.create(
    {
        image : {
            width : '100%',
            height : 200,
            alignItems:'center',
            paddingTop: 10
        },        
}
);
export default Category;