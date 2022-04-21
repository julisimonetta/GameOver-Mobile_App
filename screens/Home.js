import React from 'react';
import MyCarousel from '../components/MyCarousel';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import ComingSoon from '../components/ComingSoon';
import OnSale from '../components/OnSale';
import Footer from '../components/Footer';
import CalltoActions from '../components/CalltoActions';

ComingSoon
const Home = (props) =>{

    const image = { uri: "https://user-images.githubusercontent.com/91817152/163213332-abb446f0-0a2a-4484-b57c-a188df1d6c55.jpg" };

    return(
        <ScrollView> 
        <ImageBackground  source={image} style={styles.popular}>
            <CalltoActions navigation={props.navigation}/>
            <MyCarousel/>
            <OnSale/>
            <ComingSoon/>
            <Footer/>
            </ImageBackground> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    popular:{
        width:"100%",
        height:"100%",
    }

})
export default Home;