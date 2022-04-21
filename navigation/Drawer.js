
import React, {useState, useEffect } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList  } from '@react-navigation/drawer';
import { StackHome, StackGames, StackSignUp,StackLogIn,StackAboutUs, StackCart, StackPaypal} from './Stack';
import { connect } from 'react-redux';
import { Image } from 'react-native'
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import usersActions from '../redux/actions/usersActions';

const Drawer = createDrawerNavigator()

const DrawerNavigator = (props) => {

function Logo() {
    return (
    <Image style={{ width: 50, height: 50, marginRight: 13,resizeMode:'contain'}} source={require('../assets/newlogo.png')}/>
    )
}
const [firstname, setFirstName] = useState(undefined)

useEffect(() => {
        setFirstName(props.user?.firstname)
        refreshUserToken()
    
}, [props.user])

const [token, setToken] = useState(undefined)

useEffect(()=> {
    const asyncStore = async () => {
        let insideStorage = await AsyncStorage.getItem("token")
        if (insideStorage){
            const tokenFromStorage = await AsyncStorage.getItem("token")
            setToken(tokenFromStorage)
            console.log(tokenFromStorage)
        return await props.verifyToken(tokenFromStorage)

        }
    }
    asyncStore()
}, [])

const refreshUserToken = async () => {
    
    const tokenFromStorage = await AsyncStorage.getItem("token")
    setToken(tokenFromStorage)
    console.log(tokenFromStorage)


}

const CustomDrawerContent = (props) => {

        return(

            <DrawerContentScrollView {...props}>

                    <View style={styles.containerUserFoto}>
                     {props.token
                      ? <Text style={styles.nameUser}>{props.firstname}</Text>
                      : <Text style={styles.nameUser}></Text>}
                    </View>
                    <DrawerItemList {...props}  /> 
                    {props.token && <DrawerItem label="Log Out" 
                        onPress={() => { 
                            AsyncStorage.removeItem('token')
                            ToastAndroid.showWithGravityAndOffset('Goodbye!', ToastAndroid.LONG, ToastAndroid.CENTER, 25,50)
                            props.refreshUserToken()
                            props.navigation.navigate('Home') 
                        }} 
                        activeBackgroundColor='#3fced341' activeTintColor='#2ab6bb'/>}


            </DrawerContentScrollView>
        )

}

return (

    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} token={token} firstname={firstname} refreshUserToken={refreshUserToken} />} >

        <Drawer.Screen name="Home" component={StackHome} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } } />

        <Drawer.Screen name="Games" component={StackGames} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></>}}/>
        <Drawer.Screen name="About us" component={StackAboutUs} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } }/>

        <Drawer.Screen name="Cart" component={StackCart} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } }/>

        <Drawer.Screen name="Paypal" component={StackPaypal} options={{drawerItemStyle: { height: 0 }, headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } }/>

        {!token && <Drawer.Screen name="Log in" component={StackLogIn} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></>}}/>}

        {!token && <Drawer.Screen name="Sign up" component={StackSignUp} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></>}}/>} 

    </Drawer.Navigator>

);
} 

const styles = StyleSheet.create({
    nameUser: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    containerUserFoto: {
        alignItems: 'center'
    },
    drawerCustom:{
        flex:1,
        marginTop:15,
    },
    userProfile:{
        minWidth: 55,
        height: 57,
        borderRadius: 50
    }
})

const mapStateToProps = (state) => {
    return{
        user:state.userReducer.user,
    }
}

const mapDispatchToProps = {
    verifyToken: usersActions.verifyToken,
    signOutUser: usersActions.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator)
