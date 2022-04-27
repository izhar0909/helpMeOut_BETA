import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from './createDataContext'
import { Alert } from "react-native";
import { navigate } from "../../navigationnRef";    
import actions from '../api/actions'
import messaging from '@react-native-firebase/messaging'
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload}
        case 'reg_error':
            return { ...state, errorMessage: action.payload}
        case 'login':
             return { errorMessage: '', token: action.payload}

        case 'register':
            return { errorMessage:''}

        case 'logout':
            return { errorMessage: '', token: null}
            
        default: return state
            break;
    }
}

const tryLocalLogin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        const asyncU = await AsyncStorage.getItem('user')
        let user = JSON.parse(asyncU)
        dispatch({type:"login", payload: token})
        navigate('homeFlow')
    } else {
        console.log("user not exist")
    }
}

const register = dispatch => ({ name, mobileNumber, email, password}) => {
    // let deviceToken = 123456890
    messaging().getToken().then(deviceToken => {
        actions.post('/api/register', {name, mobileNumber, email, deviceToken, password}).then(res => {
            console.log("Register Response: ", res.data)
            dispatch({ type: 'register'})
            // navigate('Login', {emailExist: email})
        }).catch(error => {
            return Alert.alert(
                "Registration Error",
                `${error.response.data.error}`,
                [
                    {
                    text: "OK"
                    }
                ]
            )
            // dispatch({ type: 'add_error', payload: error.response.data.error})
            // console.log(error.response.data)
        })
    })
}

const login = dispatch => ({email, password}) => {
    messaging().getToken().then(deviceToken => {
        console.log(deviceToken)
        actions.post('/api/login', {email, password, deviceToken}).then(res => {
            console.log("Login Response: ", res.data)
            AsyncStorage.setItem('token', res.data.token)
            let user = {
                id: res.data.user._id,
                name: res.data.user.name
            }
            AsyncStorage.setItem('user', JSON.stringify(user))

            dispatch({ type: 'login', payload: res.data.token})
            if (res.data){
                navigate('home')
            }
        }).catch(error => {
            return Alert.alert(
                "Login Error",
                `${error.response.data.error}`,
                [
                    {
                    text: "OK"
                    }
                ]
            )
        })
    })

}

export const {Provider, Context} = createDataContext (
    authReducer, {register, login, tryLocalLogin}, {token: null, errorMessage: ''}
)