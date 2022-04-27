import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from './navigationnRef'
import { Provider as AuthContext} from './src/context/AuthContext'
import splashScreen from './src/screens/Splash'  
import loginScreen from './src/screens/Login'
import registerScreen from './src/screens/Register'
import home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Medicalemergency from './src/screens/Medicalemergency'
import Child_helpline from './src/screens/Child_helpline'
import Blood_bank from './src/screens/Blood_bank'
import Rpf from './src/screens/Rpf'
import Add_contacts from './src/screens/Add_contacts'
import Womens_helpline from './src/screens/Womens_helpline'
import Motoraccident from './src/screens/Motoraccident'
import Fireaccident from './src/screens/Fireaccident'
import Emergency from './src/screens/Emergency'
import Theft_harrassment from './src/screens/Theft_harrassment'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const switchNavigator = createSwitchNavigator({
  splashScreen : splashScreen,
  homeFlow: createStackNavigator({
    home: home,
    Profile: Profile,
    Medicalemergency: Medicalemergency,
    Child_helpline: Child_helpline,
    Blood_bank: Blood_bank,
    Rpf: Rpf,
    Womens_helpline: Womens_helpline,
    Motoraccident: Motoraccident,
    Fireaccident: Fireaccident,
    Emergency: Emergency,
    Add_contacts: Add_contacts,
    Theft_harrassment: Theft_harrassment
  }),
  authFlow: createStackNavigator({
    loginScreen : loginScreen,
    registerScreen : registerScreen,
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return(
    <AuthContext>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthContext>
  )
}