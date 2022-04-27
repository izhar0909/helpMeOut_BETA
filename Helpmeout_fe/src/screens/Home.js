import React, {useState, useEffect, useContext} from 'react'
import {View, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import { Text, Avatar } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = ({navigation}) => {

    const { logout } = useContext(AuthContext)
    
    const [name, setname] = useState('')
    const [user, setUser] = useState([])
    
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            )
          if (granted) {
            console.log("You can use the Storage");
            
            Contacts.getAll().then(contacts => {
                // contacts returned
                console.log(contacts)
            })
          } else {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                  title: "Help Me Out requires Permission",
                  message:
                    "Requested you to grant permission to access storage" +
                    "Help Me Out might not work if permission denied",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK"
                }
              );
            console.log("Storage permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };    

    useEffect(() => {
        requestCameraPermission()
        getAsyncUser()
    },[])
    const getAsyncUser = async () => {
        try {
            let userAsync = await AsyncStorage.getItem('user')
            let user = JSON.parse(userAsync)
            // alert(user.name)
            setUser(user)
        } catch (error) {
            alert(error)
        }
    }

    return(
        <View style={{flex:1, backgroundColor:"white"}}>
            <View style={{flex:1.2, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20, borderBottomColor: 'black', borderBottomWidth: 5}}>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <View>
                        <Text h2>HEY {user.name},</Text>
                        <Text h4>WE ARE HERE FOR YOU</Text>
                    </View>
                <View style={{ justifyContent: "center", alignSelf: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', {user: user})}>
                    <Icon name="user-circle" size={50} color="black" />
                    </TouchableOpacity>
                </View>
                    </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', paddingTop: 40, padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Emergency')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"#DC2525", elevation: 12, width: "100%"}}>
                        <View style={{padding: 10}}>
                            <Text h3 style={{fontWeight: '20%', padding: 5, color:'white'}}>EMMERGENCY ASSISTANCE</Text>
                        </View>
                    </TouchableOpacity>
               </View>
               
                </View>
            </View>
            <View style={{flex:1.8, width: '100%'}}>
            <ScrollView>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Motoraccident')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"#8274C9", width: "100%"}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                        <View style={{padding: 10}}>
                            <Text h3 style={{padding: 10}}>MOTOR ACCIDENT</Text>
                        </View>
                        <View>
                            {/* <Text h3>Call</Text> */}
                            <TouchableOpacity onPress={() => {Linking.openURL(`tel:${100}`)}}>
                            <Icon name="phone" size={40} color="white" />
                            </TouchableOpacity>
                        </View>
                        </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Medicalemergency')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"#115DCD", width: "100%"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                    <View style={{padding: 10}}>
                        <Text h3 style={{padding: 10}}>MEDICAL EMERGENCY</Text>
                    </View>
                    <View>
                        {/* <Text h3>Call</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`tel:${102}`)}}>
                        <Icon name="phone" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Fireaccident')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"#FFA07A", width: "100%"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                    <View style={{padding: 10}}>
                        <Text h3 style={{padding: 10}}>FIRE ACCIDENT</Text>
                    </View>
                    <View>
                        {/* <Text h3>Call</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`tel:${101}`)}}>
                        <Icon name="phone" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Theft_harrassment')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"skyblue", width: "100%"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                    <View style={{padding: 10}}>
                        <Text h3 style={{padding: 10}}>THEFT/ HARASSMENT</Text>
                    </View>
                    <View>
                        {/* <Text h3>Call</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`tel:${100}`)}}>
                        <Icon name="phone" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Womens_helpline')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"pink", width: "100%"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                    <View style={{padding: 10}}>
                        <Text h3 style={{padding: 10}}>WOMENS HELPLINE</Text>
                    </View>
                    <View>
                        {/* <Text h3>Call</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`tel:${1091}`)}}>
                        <Icon name="phone" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Child_helpline')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"#09C51B", width: "100%"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                    <View style={{padding: 10}}>
                        <Text h3 style={{padding: 10}}>CHILDREN HELPLINE</Text>
                    </View>
                    <View>
                        {/* <Text h3>Call</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`tel:${1098}`)}}>
                        <Icon name="phone" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Blood_bank')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"#E3256B", width: "100%"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                    <View style={{padding: 10}}>
                        <Text h3 style={{padding: 10}}>BLOOD BANK</Text>
                    </View>
                    <View>
                        {/* <Text h3>Call</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`tel:${104}`)}}>
                        <Icon name="phone" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Rpf')} style={{justifyContent: "center", alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor:"#CD9E92", width: "100%"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center'}}>
                    <View style={{padding: 10}}>
                        <Text h3 style={{padding: 10}}>RPF</Text>
                    </View>
                    <View>
                        {/* <Text h3>Call</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`tel:${182}`)}}>
                        <Icon name="phone" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
               </View>
            </ScrollView>
            </View>
        </View>
    )
}
Home.navigationOptions = {
    headerShown: false
}
export default Home