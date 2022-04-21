import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'

const CalltoActions = (props) => {
    return(

            <View style={styles.calltoactions}>
                <Image style={styles.hero} source={require('../assets/calltoactions.png')} resizeMode="contain"/>
                <Button title="CHECK GAMES" buttonStyle={styles.checkgames} onPress={() => props.navigation.navigate('Games')}/>
            </View>
    )
}

const styles = StyleSheet.create({

    calltoactions:{
        alignItems:"center",
        marginHorizontal:30,
        marginVertical:10,
    },
    hero:{
        width:"100%",
        height:500,
        alignItems:"center",
        marginHorizontal:30,
        marginVertical:30,
        marginTop:72,
    },
    checkgames:{
        backgroundColor: "#00A3CE",
        color: "white",
        alignSelf: "center",
        alignItems:"center",
        borderRadius:30,
        width:150,
        height:50,
        borderColor: "#fff",
        borderWidth: 1,
    }

})

export default CalltoActions;