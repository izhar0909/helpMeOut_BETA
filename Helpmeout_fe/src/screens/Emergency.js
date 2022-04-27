import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import actions from '../api/actions'

const Emergency = ({navigation}) => {

    const handlePress = () => {
        actions.post('/api/notifications').then(res => {
            console.log(res)
        })
    }

    return(
        <View style={{flex: 1, padding: 10, flexDirection: "row", justifyContent: "center", alignItems: 'center'}}>
        <TouchableOpacity onPress={() => handlePress()} style={{justifyContent: "center", alignItems: 'center',
        borderRadius: 100,
        backgroundColor:"#DC2525", elevation: 12, width: "100%"}}>
            <View style={{padding: 10}}>
                <Text h3 style={{fontWeight: '20%', padding: 5, color:'white'}}>EMMERGENCY</Text>
                <Text h3 style={{fontWeight: '20%', padding: 5, color:'white'}}>ASSISTANCE</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default Emergency