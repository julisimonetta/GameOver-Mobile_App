import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native'
import Footer from '../components/Footer';
import gamesActions from '../redux/actions/gamesActions';
import { connect } from "react-redux";
import { useEffect, useState } from "react"
import { Button } from 'react-native-elements'

const Cart = (props) =>{
    console.log(props.inShopGames)
    
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (props.inShopGames) {
            let iterator = 0;
            props.inShopGames.map((game) => {
                iterator += game.price;
            });
            console.log(iterator)
            setTotal(iterator);
        }
    },[props.inShopGames])

    const image = { uri: "https://user-images.githubusercontent.com/91817152/163213332-abb446f0-0a2a-4484-b57c-a188df1d6c55.jpg" };
    return(
        <ScrollView style={{backgroundColor:'#1f1f24'}}>
            <ImageBackground  source={image} style={styles.popular}>
            <View>
                {props.inShopGames?.map((game) => {

                    return(

                        <View key={game._id} style={styles.gameContainer}>
			    <Image style={styles.image} source={{uri:`https://game-over-shop.herokuapp.com/assets/gamesImages/${game.src}`}}></Image>
                            <Text style={{color:'#fff'}}>{game.gameName}</Text>
                            <Text style={{color:'#fff'}}>$ {game.price} USD</Text>
                            <Button title="DELETE" buttonStyle={styles.addtocart} onPress={() => props.deleteFromShop(game)}/>
                        </View>
                    )

                })}
		<View style={styles.total}>
                <Text style={{color:'#000', fontSize:18}}>TOTAL:</Text>
                <Text style={{color:'#000', fontSize:18}}>$ {total.toFixed(2)} USD</Text>
		</View>

                <Button title='CHECKOUT WITH PAYPAL' onPress={() => props.navigation.navigate('Paypal')} />

            </View>




            <Footer/>
            </ImageBackground>
        </ScrollView>
    )
}

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
    },

    gameContainer:{
	    display:'flex',
	    justifyContent:'center',
	    alignItems:'center',
	    marginBottom:30
    },

    image:{
	    width:'90%',
	    height:250,
	    borderRadius:30
    },
    popular:{
        width:"100%",
        height:"100%",
    },

    total:{
	    display:'flex',
	    justifyContent:'center',
	    alignItems:'center',
	    backgroundColor:'white',
        marginHorizontal:100,
        marginBottom:30,
    }
})


const mapStateToProps = (state) => {
    return {
	    // games:state.gamesReducer.games,
	    inShopGames:state.gamesReducer.inShopGames
    }
}
const mapDispatchToProps = {
    deleteFromShop: gamesActions.deleteFromShop
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

