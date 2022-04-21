import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Footer = () => {
    return(

            <View style={styles.footer}>
                <Image style={styles.imgLogo} source={require('../assets/newlogo.png')}/>
                <View style={styles.footerlilcontainer}>
                <Text style={{color:'#fff', fontSize:16, marginBottom:20}}>CONTACT</Text>
                <Text style={styles.footerText}>New York, NY 10012, US</Text>
                <Text style={styles.footerText}>gameover.mindhub@gmail.com</Text>
                <Text style={styles.footerText}>+ 01 234 567 88</Text>
                <Text style={styles.footerText}>+ 01 234 567 89 </Text>
                </View>
                <View style={styles.iconsFooter}>
                    <Image style={styles.socialMedia} source={require('../assets/facebook.png')} resizeMode="contain"/>
                    <Image style={styles.socialMedia} source={require('../assets/instagram.png')} resizeMode="contain"/>
                    <Image style={styles.socialMedia} source={require('../assets/youtube.png')} resizeMode="contain"/>
                    <Image style={styles.socialMedia} source={require('../assets/twitter.png')} resizeMode="contain"/>
                    <Image style={styles.socialMedia} source={require('../assets/discord.png')} resizeMode="contain"/>
                </View>
                <Text style={styles.copyright}>&copy; 2022 - Copyright Game Over</Text>
                <Text style={styles.copyright}>All rights reserved.</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#1e0823b2',
        width:"100%",
        height:430,
    },
    imgLogo:{
        marginTop:20,
        width:100,
        height:100,
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
    },
    copyright:{
        textAlign:"center",
        backgroundColor:"#000000",
        color:"white",
        paddingVertical:5,
        
    },
    footerlilcontainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },  
    footerText:{
        color:"white",
        marginBottom:7,
        fontSize:16,
    },  
    socialMedia:{
        width:30
    },
    iconsFooter:{
        alignSelf:"center",
        width:"70%",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})

export default Footer;