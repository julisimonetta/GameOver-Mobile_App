import React, {useEffect} from "react";
import {connect} from 'react-redux'

import Carousel from "react-native-snap-carousel";
import { StyleSheet, Text, View, Image, ImageBackground} from "react-native";

import { Button } from 'react-native-elements'
import gamesActions from '../redux/actions/gamesActions'

const ComingSoon = (props) => {

    const state = {
	    genre:['Aftermath', 'Evil Dead: The game','S.T.A.L.K.E.R. 2: Heart of Chernobyl', 'Chrono Cross: The Radical Dreamers']
    }

    useEffect(() => {
	    props.fetchGames()
    }, [])

    return (
	<>
        <View style={styles.containerCominSoon}>
            <Image source={require('../assets/comingsoon.png')} style={styles.image}></Image>
        </View>

	    {props.games?.map((game) => {
		    if(state.genre.includes(game.gameName)){
			    return (
				<>
					<View key={game._id} style={styles.comingSoonContainer}>
						<Image source={{uri:`https://game-over-shop.herokuapp.com/assets/gamesImages/${game.src}`}} style={styles.gameImage}></Image>
						<Text style={styles.title}>{game.gameName}</Text>

						<View style={styles.genreContainer}>
					        {game.genre?.map((genre) => 
							<Text style={styles.genre}>
								{genre}
							</Text>
						)}
						</View>

						<View>
							<Text style={styles.price}>$ {game.price} USD</Text>
							<Button title='Pre-order' buttonStyle={styles.preorder} onPress={() => props.addToShop(game)}/>
						</View>
					</View>
				</>
			    )
		    }
	    })
	}

	</>
    );
};

const styles = StyleSheet.create({
    preorder:{
        backgroundColor: "#00A3CE",
        marginBottom: 20,
    },
    containerCominSoon:{
        display: "flex",
        // backgroundColor:'orange',
        alignItems: "center",
        // justifyContent: "center",
        height: 70,
        // width: "25%",
    },
    image:{
        // backgroundColor:'red',
        height: 70,
        width: "100%",
    },

    gameImage:{
        width:'100%',
        height:250,
        // borderRadius:50,
        borderTopLeftRadius:50,
    },

    comingSoonContainer:{
	width:'90%',
	marginTop:80,
	marginLeft:20,
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:'#5d74d9',
	borderRadius:50,
    overflow:'hidden',
    },

    genre:{
	    margin:5,
	    color:'white',
	    display:'flex',
	    marginRight:5,
        fontSize:15,
    },
    
    title:{
	    color:'white',
        fontSize:20,
        marginTop:10,
        marginBottom:10,
    },

    price:{
        fontSize:25,
        marginBottom:20,
        marginTop:10,
	    color:'white'
    },
    genreContainer:{
	    display:'flex',
	    justifyContent:'center',
	    alignItems:'center',
	    flexDirection:'row'
    }
});

const mapDispatchToProps = {
	fetchGames:gamesActions.fetchGames,
	addToShop:gamesActions.addToShop
}

const mapStateToProps = (state) => {
	return {
		games:state.gamesReducer.games

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)
