import React, {useState} from "react";
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid} from "react-native";
import Footer from '../components/Footer';
import { Button } from 'react-native-elements';

const LogIn = (props) =>{

    const [logInUsers, setLogInUsers] = useState({ email: '', password: '' })

    const handleSubmit = async () => {

		if(logInUsers.email === '' || logInUsers.password === ''){

			ToastAndroid.showWithGravityAndOffset('You must fill all the fields!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)

		}else{
            
            try{
                let res = await props.signInUser(logInUsers)
                if(!res.data.success){
                    ToastAndroid.showWithGravityAndOffset('Email and password dont match', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
                }else{
                    ToastAndroid.showWithGravityAndOffset('Hey, welcome!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
                    props.navigation.navigate('Home')
                }
            }catch (error){
                console.log(error)
                return false
            }
            
		}
	}


    return(

        <ScrollView style={{backgroundColor:'#1f1f24', height:'100%'}}>
        <View style={{display:'flex', justifyContent:"center", alignContent:"center", alignItems:'center'}}>
            <View style={styles.signUpContainer}>
                <View style={{marginTop:'10%'}}>
            <Text style={styles.signInTitle}>Welcome back!</Text>
                </View>
            <View style={styles.inputContainer}>
        
            <TextInput style={styles.inputs} placeholder="Email" onChange={(e) => setLogInUsers({...logInUsers, email:e.nativeEvent.text})}/>

            <TextInput style={styles.inputs} secureTextEntry={true} placeholder="Password"onChange={(e) => setLogInUsers({...logInUsers, password:e.nativeEvent.text})}/>

            <Button title="                      SIGN IN                      " buttonStyle={styles.signInBotton} onPress={handleSubmit}/>
            
            <TouchableOpacity onPress={() => props.navigation.navigate('Sign up')}>
                <Text style={styles.already}>Don't have an account yet?</Text>
                <Text style={styles.loginhere}>Sign up here</Text>
            </TouchableOpacity >

            </View>
        
            </View>
            </View>
            <Footer/>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    signInBotton: {
        backgroundColor: "#78228F",
        color: "white",
        marginTop:20,
        marginBottom:20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    signUpContainer: {
        marginTop: "10%",
        alignItems: "center",
        display:'flex',
        width: '85%',
        backgroundColor:"white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: '25%',
    },
    signInTitle:{
        textAlign: "center",
        // fontFamily:"Roboto_700Bold ",
        fontSize:35,
        fontWeight:"bold",
        letterSpacing: 1,
        color: "#4F4F4F",
        marginBottom: "5%",
    },
    inputs: {
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: '#EEEEEE',
        borderColor: "#EEEEEE",
        height: 40,
        width: 250,
        margin: 10,
        padding: 10,
        textAlign: "center",
    },
    inputContainer:{
        alignItems:"center",
        textAlign:"center",
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginBottom: 20,
        backgroundColor: 'black',
        width: 150,
        height: 50,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    loginhere: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        color: '#78228F',
        marginBottom:'10%',
        textAlign:'center',
    },
    already:{
        marginTop: 5,
    },

})
const mapStateToProps = (state) => {
    return{
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = {
	signInUser: usersActions.signInUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);