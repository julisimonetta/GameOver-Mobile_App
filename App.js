import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerNavigator from './navigation/Drawer';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_900Black, Roboto_700Bold } from '@expo-google-fonts/roboto';
// import { useFonts, LexendDeca_400Regular, LexendDeca_900Bold } from '@expo-google-fonts/lexend-deca';
// import { CroissantOne_400Regular } from '@expo-google-fonts/croissant-one';
// import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';


const App = () => {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold 
  })



  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#78228F'
    },
  };

  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (

    <NavigationContainer theme={MyTheme}>
      <Provider store={reduxStore}>
        <DrawerNavigator />
      </Provider>
    </NavigationContainer>

  );
}

export default App;