import React, {useEffect} from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import PushNotification from "react-native-push-notification";

const Profile = ({navigation}) => {

    const user = navigation.getParam('user')
    useEffect(() => {
        createChannel()
        // setNotify()
    },[])

    const createChannel = () => {
        PushNotification.createChannel({
            channelId: 'todoCreate-channel',
            channelName: 'todoCreate-channel'
        })
    }

    const setNotify = () => {
        PushNotification.localNotification({
            channelId: "todoCreate-channel",
            autoCancel: true,
            // bigText:
            //   'This is local notification demo in React Native app. Only shown, when expanded.',
            subText: `You created todo`,
            title: ` created Successfully`,
            message: `hunirijryikiuinyi`,
            vibrate: true,
            vibration: 300,
            playSound: true,
            soundName: 'default',
        })
        console.log(`yhfxjhj`)
    }
    return(
        <View>
            
            <Text h1>Hey {user.name}</Text>
            <View style={{padding: 2}}>
                <TouchableOpacity style={{padding: 10}} onPress={() => setNotify()} >
                    <Text>Click to notify</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Add_contacts')} style={{justifyContent: "center", alignItems: 'center',
            borderRadius: 20,
            backgroundColor:"skyblue", width: "100%"}}>
                <View>
                    <Text h3 style={{padding: 5}}>Add Contacts</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
        
    )
    
}

export default Profile