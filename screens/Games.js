import React from 'react';
import Footer from '../components/Footer';
import gamesActions from '../redux/actions/gamesActions';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { useEffect, useState } from "react";
import { Button } from 'react-native-elements'


const Games = (props) =>{

    const [unfilteredGames, setunfilteredGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            try{
                await props.fetchGames()

            } catch(error) {
                console.log(error)
            }
        }
        fetchGames()
    }, [])

    const inputsearch = (e) => {
        props.filterGames({games: unfilteredGames}, e, null)
    }

    useEffect(() => {
        if(props.games.length > unfilteredGames.length){
            setunfilteredGames(props.games)
        }
    },[props.games])

    const image = { uri: "https://user-images.githubusercontent.com/75273639/163312873-998df823-a22d-4d94-a9b9-a325a10c620c.jpg" }

    return(
        <ScrollView  style={{backgroundColor:'#1f1f24'}}>
            <ImageBackground  source={image} style={styles.popular}>
            <View style={styles.calltoactions}>
            <Image  style={styles.hero} source={require('../assets/top.png')} resizeMode="contain"/>
            </View>
            <View style={styles.containergames}>
            <TouchableWithoutFeedback >
            <View style={styles.boxSearch}>
                <TextInput style={styles.search} onChangeText={inputsearch} placeholder='Search by game..'/>
            </View>
            </TouchableWithoutFeedback>
            </View>
            <ScrollView style={styles.allGamesContainer}>
            <View style={styles.mapContainer}>
                {(props.games.length !== 0) ? props.games.map ((game, index) => {
                return (
                    <View style={styles.boxGame} key={index}>
                    {/* <TouchableOpacity onPress={() => {
                                props.navigation.navigate('city', {
                                    id: game._id
                                })
                            }}> */}
                        
                        <Image source={{uri:`https://game-over-shop.herokuapp.com/assets/gamesImages/${game.src}`}} style={styles.image}/>
                            <View style={styles.genreContainer}>
                            {game.genre.map((genre, index) => <Text style={styles.eachgenre} key={index}>{genre}</Text>)}
                            </View>
                        <Text style={styles.place}>{game.gameName} </Text>
                        <View style={styles.priceContainer}>
                        <Text style={styles.pricetag}>$ {game.price} USD</Text>
                        </View>
                        <View style={styles.xxx}>
                        <Button title="ADD TO CART" buttonStyle={styles.addtocart} onPress={() => props.addToShop(game)}/>
                        </View>
                        
                    {/* </TouchableOpacity> */}
                    </View>
                )
            }): <View style={styles.noResultsContainer}>

                    <Image source={require("../assets/aboutImages/search.png")} style={styles.imageone}/>
                
                    <Text style={styles.noResults}>GAME NOT FOUND!</Text>
                    <Text style={styles.noResults}>PLEASE TRY WITH ANOTHER ONE</Text>
                    {/* <Image style={styles.imageNoResult} source={require('../assets/noresult.png')}></Image> */}
                </View>
            }
            </View>
        </ScrollView>



            <Footer/>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    hero:{
        width:"100%",
        height:200,
        alignItems:"center",
        // marginHorizontal:30,
        // marginVertical:30,
        // marginTop:72,
    },
    calltoactions:{
        
        alignItems:"center",
        marginHorizontal:10,
        // marginVertical:10,
    },
    popular:{
        width:"100%",
        height:"100%",
    },
    imageone:{
        width: 52,
        height: 52,
        // marginTop:15,  
    },
    priceContainer:{
        marginTop:10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 30,
    },
    pricetag:{
        fontSize:20,
        color:'#fff',
    },
    genreContainer:{
        marginTop:10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    eachgenre:{
        paddingLeft: 5,
        color: '#fff',
        fontSize: 15,
    },  
    xxx:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },

    addtocart:{
        width:150,

    },
    containergames:{
        marginTop:20,
    },
    search: {
        fontSize: 14,
        color: "black",
        marginTop: 10,
        
    },
    boxSearch: {
        borderColor: "#9e9ba0",
        borderWidth: 2,
        width: "60%",
        borderRadius: 50,
        marginBottom: 30,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        // marginTop: "5%",
    },
    image:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 250,
        width: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    allGamesContainer:{
        width: "100%",
        height: "100%",
    },
    popularTitle:{
        color: "white",
        letterSpacing: 1,
        textShadowColor:"rgb(112, 3, 45)",
        textShadowOffset:{width: 1.5, height: 0.5},
        textShadowRadius: 5,
        fontSize:20,
        width: "100%",
        marginBottom: 20,
        textAlign:"center"
    },
    mainContainer: {
        flex: 1,
        height: "100%",
        backgroundColor:'rgb(255, 234, 252)',
    },
    mapContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    search: {
        fontSize: 14,
        padding: "2.5%",
        color: "black",
        
    },
    boxGame: {
        width: "90%",
        height: 525,
        marginVertical: "3%",
        backgroundColor:'#d4d1d560',
        borderRadius: 50,
    },
    place: {
        color: "white",
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        padding: 20,
    },
    noResultsContainer: {
        marginTop: "5%",
        marginBottom: "5%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
    },
    noResults: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
        padding: "2%",
    },
    imageNoResult:{
        width: 100,
        height: 200,
    },
})

const mapStateToProps = (state) => {
    return {
        games: state.gamesReducer.games,
    }
}

const mapDispatchToProps = {
    fetchGames: gamesActions.fetchGames,
    filterGames: gamesActions.filterGames,
    addToShop: gamesActions.addToShop
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)