import React from "react";
import Carousel from "react-native-snap-carousel";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const MyCarousel = () => {

    const games = [
    {
        id: "01",
        url: "https://user-images.githubusercontent.com/75273639/162114896-d32a7f60-d6f9-4372-b742-b3ca3fa41347.png",
    },
    {
        id: "02",
        url: "https://user-images.githubusercontent.com/75273639/162114884-071aeede-7634-4883-939f-36d3d28513d3.png",
    },
    {
        id: "03",
        url: "https://user-images.githubusercontent.com/75273639/162114893-0619a4e0-1d3b-4981-9297-7fc3fa1caa6a.png",
    },
    {
        id: "04",
        url: "https://user-images.githubusercontent.com/75273639/162114901-b49cce7f-d2bf-43bd-9776-995c27b0511c.png",
    },
    {
        id: "05",
        url: "https://user-images.githubusercontent.com/75273639/162114888-4bd81e06-d8a2-4d3f-9e77-23f9419c41a2.png",
    },
    {
        id: "06",
        url: "https://user-images.githubusercontent.com/75273639/162114872-b47c2eb7-ebf4-47af-9a7b-4c0076479a7f.png",
    },
    

    ];

    const places = ({ item }) => {
        return (
            <View style={styles.carouselContainer}>   
            <View key={item.id} style={styles.slide}>
            <Image
                source={{ uri: item.url }}
                style={styles.image}>
            </Image>
            </View>
            </View>
        );
    };

    return (
        <View style={styles.containerCarousel}>
        <Image source={require('../assets/trending.png')} style={styles.imageTrending}/>     
        <Carousel
            data={games}
            sliderWidth={350}
            itemWidth={390}
            renderItem={places}
            autoplay={true}
            loop={true}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer:{
        height:550,
        alignItems:"center",
        // backgroundColor:"#fff",
    },
    slide:{
        width:"80%"
    },
    image:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 500,
        width: "85%",
    },
    containerCarousel: {
        marginBottom: 20,
        marginTop: 20,
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
    },
    imageTrending:{
        marginVertical:50,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: 70,
        width: "80%",
    }

});

export default MyCarousel;