import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native'
import Footer from '../components/Footer';

const AboutUs = () =>{

    const image = { uri: "https://user-images.githubusercontent.com/91817152/163213332-abb446f0-0a2a-4484-b57c-a188df1d6c55.jpg" };
    return(
        <ScrollView >
            <ImageBackground  source={image} style={styles.popular}>
            <View style={styles.containerAbout}>
                <ImageBackground  style={styles.image}>
            <View style={styles.containerTittle}>
            <Text style={{color:'#6C0B36',marginTop:2,}}>WE CARE ABOUT GAMES</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>GAME OVER is a digital distribution platform with a curated selection of games, a "you buy it, you own it" philosophy, and utmost care about customers.</Text>
            </View>     
            </ImageBackground>
            <View style={styles.gamingInfo}>
            <Image source={require("../assets/aboutImages/searching.png")} style={styles.imageone}/>
            {/* <ImageBackground  style={styles.image}> */}
            <Text style={{color:"#781393", marginTop:3}}> Hand-picking the best in gaming</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3, marginBottom:20}}>A selection of great DRM-free games, from modern hits to all-time classics, that you really shouldn't miss.</Text>
            {/* </ImageBackground> */}
            <ImageBackground  style={styles.image}>
            <Image source={require("../assets/aboutImages/winer.png")} style={styles.imagetwo}/>
            <Text style={{color:"#781393", marginTop:3}}> A curated selection of games</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>From exceptional AAAs, unique indies to the best of classic gaming. Every game is here because we chose it for you.</Text>
            </ImageBackground>
            <ImageBackground  style={styles.image}>
            <Image source={require("../assets/aboutImages/surprise.png")} style={styles.imagetwo}/>
            <Text style={{color:"#781393", marginTop:3}}> Feeding your inner collector</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}> Offering games with as many goodies as possible is the GAME OVER way - even if it means exploring our long forgotten basements and attics.</Text>
            </ImageBackground>
            </View>

            <View style={styles.gamingInfo}>
            <Image source={require("../assets/aboutImages/user.png")} style={styles.imageone}/>
            {/* <ImageBackground  style={styles.image}> */}
            <Text style={{color:"#6f0731b2", marginTop:3}}>Customer-centric approach</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3, marginBottom:20}}>Delivering a user-friendly support enriched with additional customer benefits.</Text>
            {/* </ImageBackground> */}
            <ImageBackground  style={styles.image}>
            <Image source={require("../assets/aboutImages/support.png")} style={styles.imagetwo}/>
            <Text style={{color:"#6f0731b2", marginTop:3}}> Stellar support</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>We bring you the comfort in knowing that anytime you need help, we're right here for you. Our customer support team works in-house round-the-clock solving all games-related issues.</Text>
            </ImageBackground>
            <ImageBackground  style={styles.image}>
            <Image source={require("../assets/aboutImages/cashback.png")} style={styles.imagetwo}/>
            <Text style={{color:"#6f0731b2", marginTop:3}}>No risk, full refunds</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}> Feel safe about your purchase - get your money back if a game doesn't work for you, cancel pre-orders, and get a refund on games in development within 30 days of purchase - no strings attached.</Text>
            </ImageBackground>
            </View>

            <View style={styles.gamingInfo}>
            <Image source={require("../assets/aboutImages/more.png")} style={styles.imageone}/>
            {/* <ImageBackground  style={styles.image}> */}
            <Text style={{color:"white", marginTop:3}}>More</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3, marginBottom:20}}>Delivering a user-friendly support enriched with additional customer benefits.</Text>
            {/* </ImageBackground> */}
            <ImageBackground  style={styles.image}>
            <Image source={require("../assets/aboutImages/owner.png")} style={styles.imagetwo}/>
            <Text style={{color:"#b45bf7", marginTop:3}}>Owning the things you buy</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>We don't believe in controlling you and your games. Here, you won't be locked out of titles you paid for, or constantly asked to prove you own them - this is DRM-free gaming.</Text>
            </ImageBackground>
            <ImageBackground  style={styles.image}>
            <Image source={require("../assets/aboutImages/settings.png")} style={styles.imagetwo}/>
            <Text style={{color:"#993ae1", marginTop:3}}>An optional gaming client</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}> GAME OVER Galaxy is the tailor-made optional client that adds features like cloud saves, update roll-backs, crossplay, achievements, is a convenient way to install & update games, and stay in touch with friends.</Text>
            </ImageBackground>
            </View>
{/*             
            <View>
            <Text style={{color:'white', textAlign: "center", marginTop:10}}>OUR PARTNERS AND ALLIES.</Text>
            <View style={styles.containerAllies}>
             <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/unity.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/ea.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/capcom.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/play.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/ubisoft.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/neogeo.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/2k.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/konami.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/activision.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/nintendo.png")} style={styles.imageallies}/>
            </View>
            
            
          
           
   </View>  

            </View>
 */}


            </View>
            <Footer/>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    containerAbout:{
        marginTop: 4,
        textAlign: "center",
        alignItems:"center",
        color:'white',
        padding: 30,               
    },
    containerTittle:{
        textAlign: "center",
        alignItems:"center",
        paddingHorizontal:5,
        paddingVertical:5,
        borderRadius:5,
    },
    gamingInfo:{
        marginTop: 13,
        textAlign: "center",
        alignItems:"center",
         paddingHorizontal:10,
    },
    imageone:{
      width: 52,
      height: 52,
      marginTop:15,  
    },
    imagetwo:{
        width: 35,
        height: 35,
        marginTop:10,  
      },
      popular:{
        width:"100%",
        height:"100%",
    },
    image: {
        borderRadius:10,
        backgroundColor:'rgba(255, 255, 255, 0.113)',
        paddingHorizontal:4,
        marginVertical:5,
        alignItems:"center",
        paddingVertical:6,
        width:275,
       
           
      },

    //   containerAllies:{
    //     display:"flex",
    //     width:"100%",
    //     flexDirection:"row",
    //     flexWrap:"wrap",
    //     marginTop:5,
      
    //   },
    //   logoAllies:{
    //    height:54,
    //    width:62, 
    //    marginHorizontal:15,
    //    marginVertical:8,  
    //   },

    //   imageallies:{
    //   height:30,
     
    //   }



})
export default AboutUs;

