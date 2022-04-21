import React, {useState } from "react";
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Footer from '../components/Footer';
import { Button } from 'react-native-elements';


const SignUp = (props) =>{

    const countries = ["Argentina", "Canada", "Colombia","Croatia", "Finland", "France", "Germany", "Iceland", "Italy","Japan", "Norway", "Poland", "Russia", "Slovensko", "Switzerland", "Uruguay", "USA"]

    const [userData, setUserData] = useState({ firstname: '', lastname: '',  country: '', urlimage: 'gameover', email: '', password: '', from: 'app' })

    const signUpForm = async () => {
        console.log(userData)
        if (userData.firstname === '' || userData.lastname ==='' || userData.email === '' || userData.password === '', userData.urlimage === '', userData.country === '') {
            ToastAndroid.showWithGravityAndOffset('You must fill all the fields!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25, 50)
        }else{
            try{
                let response = await props.signUpUser(userData)
                console.log(response.data)
                if(response.data.success){
                    props.navigation.navigate('Log in')
                    ToastAndroid.showWithGravityAndOffset('Thanks for signing up, you can now login!', ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50)
                }else if (response.data.errors){ 
                    let errors= response.data.errors
                    errors.map(error => ToastAndroid.showWithGravityAndOffset( error.message, ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50))
                    }else{
                        ToastAndroid.showWithGravityAndOffset('Please try again!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,50)
                    }
            }catch(error){
                console.log(error)
            }   
        }
    }

    return(
    
    <ScrollView style={{backgroundColor:'#1f1f24', height:'100%'}}>
<View style={{display:'flex',  justifyContent:"center", alignContent:"center", alignItems:'center'}}>
    <View style={styles.signUpContainer}>
        <View style={{marginTop:'10%'}}>
    <Text style={styles.signUpTitle}>Hello, Friend!</Text>
    </View>
    <View style={styles.inputContainer}>

        <TextInput style={styles.inputs} placeholder="First name" onChange={(e) => setUserData({...userData, firstname:e.nativeEvent.text})}/>

        <TextInput style={styles.inputs} placeholder="Last name" onChange={(e) => setUserData({...userData, lastname:e.nativeEvent.text})}/>

        <SelectDropdown style={styles.inputSelect} data={countries} defaultButtonText={"Select your country"} buttonStyle={styles.dropdown1BtnStyle}  buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={() => {
            return (
                <FontAwesome name="chevron-down" color={"grey"} size={10} /> )
            }}
            dropdownIconPosition={"right"} onSelect={(selectedItem) => setUserData({...userData, country:selectedItem})} buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}} rowTextForSelection={(item, index) => {return item}} onValueChange={(e) => userHandler(e, "country")}/>
            
        {/* <TextInput style={styles.inputs} placeholder="URL image" onChange={(e) => setUserData({...userData, urlimage:e.nativeEvent.text})}/> */}

        <TextInput style={styles.inputs} placeholder="Email" onChange={(e) => setUserData({...userData, email:e.nativeEvent.text})}/>

        <TextInput style={styles.inputs} secureTextEntry={true} placeholder="Password" onChange={(e) => setUserData({...userData, password:e.nativeEvent.text})}/>

        <Button title="                      SIGN UP                      " buttonStyle={styles.getStarted} onPress={signUpForm}/>

            <TouchableOpacity onPress={() => props.navigation.navigate('Log in')}>
                <Text style={styles.already}>Already have an account?</Text>
                <Text style={styles.loginhere}>Sign in here</Text>
            </TouchableOpacity >
    </View>

    </View>
    </View>
    <Footer/>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    getStarted: {
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
        marginBottom: '10%',
    },
    noResults: {
        color: "black",
        fontSize: 18,
        fontWeight: "500",
        padding: "2%",

    },
    signUpTitle:{
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
    inputSelect:{
        fontSize:5,
        borderRadius: 5,
        borderWidth: 2,

    },
    dropdown1BtnStyle:{
        borderColor: "#EEEEEE",
        borderStyle: "solid",
        backgroundColor:'#EEEEEE',
        height: 45,
        width: 250,
        margin: 9,
        padding: 5,
        borderRadius: 2,
        borderWidth: 2,
        borderRadius: 5,
        
    }

})

const mapDispatchToProps = {
    signUpUser: usersActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp);