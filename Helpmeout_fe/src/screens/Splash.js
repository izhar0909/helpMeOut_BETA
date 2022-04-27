import React, {useContext} from "react";
import { View, TouchableOpacity, ImageBackground} from "react-native";
import {Text} from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
const Splash = ({navigation})=> {

  const { tryLocalLogin } = useContext(AuthContext)
  setTimeout(() => {
      tryLocalLogin()
  }, 3000);

  return (
   
    <View style={{flex: 1}}>
            <ImageBackground source={require('./help_me_out.png')} resizeMode="contain" style={{ 
                flex: 2, 
                justifyContent: 'center',
                alignItems:"center",
                 marginTop:100,
                 marginLeft:15}}>
            </ImageBackground>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center'}}>
            <TouchableOpacity style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 20
            }} onPress={() => {navigation.navigate('registerScreen')}}><Text h3 style={{color: 'white'}}>Register</Text></TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 20
            }} onPress={() => {navigation.navigate('loginScreen')}}><Text h3 style={{color: 'white'}}>Login</Text></TouchableOpacity>
            </View>
    </View>        
  )
}
export default Splash