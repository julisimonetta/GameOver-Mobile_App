import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import gamesActions from "../redux/actions/gamesActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from 'react-native-elements'

const OnSale = (props) => {
    // console.log(props)
    // const [games, setGames] = useState([])
    const gameList = [
    {name:'Monster Hunter: World', disc:'60%', oldprice: '33.00'}, 
    {name:'Hades', disc:'10%', oldprice:'25.00'},
    {name: 'Mario Party Superstars', disc: '50%', oldprice:'60.00' },
    {name: 'Mortal Kombat 11', disc:'90%', oldprice:'49.99'}
    ]

    useEffect(() => {
        async function fetchGames() {
            try{

                await props.fetchGames()
                // setGames(allgames)

            } catch(error) {
                console.log(error)
            }
        }
        fetchGames()
    }, [])

    return (
        <ScrollView>
        <View style={styles.onsaleContainer}>
            <Image source={require('../assets/onsale.png')} style={styles.image}></Image>
        </View>

        <ScrollView>
        <View style={styles.mapContainer}>
        <View style={styles.boxCity}>
                
                {props.games?.map((game) => {
                    if(gameList.map(element => element.name).includes(game.gameName)) {
                    return(
                        <View style={styles.eachcontainer} key={game._id}>

                        <Image source={{uri:`https://game-over-shop.herokuapp.com/assets/gamesImages/${game.src}`}} style={styles.gameimage} />

                        <Text style={styles.gamenamestyle}>{game.gameName}</Text>
                        <View style={styles.boxprice}>
                            <Text  style={styles.pricestyles}>  {gameList.find(x => x.name === game.gameName).disc} </Text>
                        <Text style={styles.discstyles}> $ {gameList.find(x => x.name === game.gameName).oldprice} USD</Text>
                            <Text style={styles.pricestyles}> $ {game.price} USD</Text>
                        <Button title="ADD TO CART" buttonStyle={styles.addtocart} onPress={() => props.addToShop(game)}/>
                        </View>

                        </View>
                    )
                    }}
                    )}
        </View>

        </View>
        </ScrollView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    addtocart:{
        backgroundColor: "#00A3CE",
        color: "white",
        alignSelf: "center",
        alignItems:"center",
        borderRadius:10,
        width:150,
        height:50,
        borderColor: "#fff",
        borderWidth: 1,
        marginTop:15,
    }
    ,
    onsaleContainer:{
        display: "flex",
        // backgroundColor:'orange',
        alignItems: "center",
        // justifyContent: "center",
        height: 70,
    },
    pricestyles:{
        fontSize: 40,
        color: '#fff',
        textAlign: "center",
    },
    discstyles:{
        fontSize: 40,
        color: '#e6e6e6',
        textAlign: "center",
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    eachcontainer:{
        marginBottom: 50,
    },
    gameimage:{
        width:'100%',
        height:250,
        // borderRadius:50,
        borderTopLeftRadius:50,
    },
    gamenamestyle:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
        backgroundColor:'#7F2198',
    },
    image:{
        // backgroundColor:'red',
        height: 70,
        width: "80%",
        
    },
    mapContainer: {
	marginTop:70,
        justifyContent: "center",
        alignItems: "center",

    },

    boxCities:{
        // backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        
    },
    boxCity: {
        width: "90%",
        borderRadius: 15,
        height: 2300,
        marginVertical: "3%",
        // backgroundColor: "white",

    },
    place: {
        color: "black",
        fontSize: 35,
        fontWeight: "600",
        textAlign: "center",
        padding: 40,
        backgroundColor: "white",
    },
    boxprice:{
        backgroundColor:'#DB35D5',
        height:250,
    }
});

const mapStateToProps = (state) => {
    return {
	    games:state.gamesReducer.games,
	    // inShopGames:state.gamesReducer.inShopGames
    }
}
const mapDispatchToProps = {
    fetchGames: gamesActions.fetchGames,
    addToShop: gamesActions.addToShop

}

export default connect(mapStateToProps, mapDispatchToProps)(OnSale)
