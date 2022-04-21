import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react"
import { Alert, Button, StyleSheet, Text, View, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from "react-redux";

const Paypal = (props) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (props.inShopGames) {
            let iterator = 0;
            props.inShopGames.map((game) => {
                iterator += game.price;
            });
            console.log('chauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
            console.log(iterator)
            setTotal(iterator);
        }
    },[props.inShopGames])


  const onWebviewMessage = (event) => {
    const result = JSON.parse(event.nativeEvent.data)
    if(result.success && result.name) {

        ToastAndroid.showWithGravityAndOffset('Transaction completed!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
        props.navigation.navigate("Home")

    }
    console.log()
  }

  return (
    <View style={styles.container}>
        <WebView containerStyle={{width: "100%", height: "100%"}}
        source={{uri: `file:///android_asset/index.html?price=${total}`}} onMessage={onWebviewMessage}></WebView>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
    return {
	    inShopGames:state.gamesReducer.inShopGames
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, null)(Paypal)
