import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Button, Text, Dimensions, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Carousel, { Pagination } from "react-native-snap-carousel";
import biographyBooks from './data/biography';
import horrorBooks from './data/horror';
import romanceBooks from './data/romance';
import mysteryBooks from './data/mystery';
import Description from './description';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Gallery = ({ navigation }) => {
    const genre = navigation.getParam('genre');
    const [activeSlide, setActiveSlide] = useState(0);
    const carousel = useRef();
    if (genre === 'Love') {
        var books = romanceBooks;
    }
    if (genre == 'Mystery') {
        var books = mysteryBooks;
    }
    if (genre == 'Bio') {
        var books = biographyBooks;
    }
    if (genre == 'Horror') {
        var books = horrorBooks;
    }

    var slides = [];

    const entriesSplitter = () => {
        let size = 2;
        for (let i = 0; i < books.length; i += size) {
            slides.push(books.slice(i, i + size));
        }
    };
    const _renderItem = ({ item, index }) => {
        return (
            <ScrollView vertical={true}>
            <View style={{ flexWrap: "wrap",alignSelf: 'center',marginBottom:40}}>
                {item.map(u => {
                    return (
                       
                            <View>
                                <Card >
                                    <Image
                                            style={styles.card_image}
                                            source={{ uri: u.image }}
                                        />
                                    <Text style={styles.text}>{u.name}</Text>
                                    <Button onPress={() => {
                                        navigation.navigate('BookDetails',
                                            {
                                                name: u.name,
                                                author: u.author,
                                                image: u.image,
                                                description: u.description,
                                                rating: u.rating
                                            });
                                    }}
                                        icon={
                                            <Icon
                                                name="code"
                                                color="#ffffff"
                                                iconStyle={{ marginRight: 10 }}
                                            />
                                        }
                                        buttonStyle={{
                                            borderRadius: 0,
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginBottom: 0,
                                        }}
                                        title="View More"
                                    />
                                </Card>
                            </View>
                       
                    );
                })}
            </View>
            </ScrollView>
        );
    };


    return (
        <View>
            {entriesSplitter()}
            
            <Pagination 
                containerStyle={{paddingVertical:20,paddingBottom:20}}
                dotsLength={slides.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 25,
                    backgroundColor: "black"
                }}
                inactiveDotStyle={{
                    backgroundColor: "grey"
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}    
                            
            />
            <Carousel
                ref={carousel}
                data={slides}
                renderItem={_renderItem}
                onSnapToItem={index => setActiveSlide(index)}
                sliderWidth={screenWidth}
                sliderHeight={screenHeight}
                itemWidth={screenWidth}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding:10
    },
    
    card_image: {
        width: 250,
        height: 400,
        borderRadius: 10,
        alignSelf: 'center'
    },
    text_container: {
        position: "absolute",
        width: 250,
        height: 30,
        bottom: 0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    card_title: {
        color: "white",
    },
    text:{
        textAlign: 'center',
        fontSize: 24,
        paddingTop :10,
        fontWeight: "bold",
        color :"black",
        marginBottom:10,
     },
});

export default Gallery;