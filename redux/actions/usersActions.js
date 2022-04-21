import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ToastAndroid} from 'react-native'

const userActions = {

    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            const res = await axios.post('https://game-over-shop.herokuapp.com/api/auth/signUp', { userData })
            return res
        }
    },

    signInUser: (userData) => {

        return async (dispatch, getState) => {
            const user = await axios.post('https://game-over-shop.herokuapp.com/api/auth/logIn', { userData })
            console.log(user)
            if (user.data.success) {
                AsyncStorage.setItem('token', user.data.response.token)

                dispatch({ type: 'user', payload: user.data.response.userData });

                return user
            }

        }
    },

    signOutUser: (closeuser) => {

        return async (dispatch, getState) => {
            AsyncStorage.removeItem('token')

            dispatch({ type: 'user', payload: null});
            
            ToastAndroid.showWithGravityAndOffset('Goodbye! ', ToastAndroid.LONG, ToastAndroid.CENTER, 25,50)
        }
    },

    verifyToken: (token) => {

        return async (dispatch, getState) => {

            const user = await axios.get('https://game-over-shop.herokuapp.com/api/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
	    
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response });

		return user.data.response

            } else {
                AsyncStorage.removeItem('token')

		        return false
            }

        }
    }

}

export default userActions;