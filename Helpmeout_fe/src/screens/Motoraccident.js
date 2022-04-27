import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import {Linking} from 'react-native'
const Motoraccident = ({navigation}) => {
    return(
        <View>
         <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', paddingTop: 10, padding: 10}}>
                   
                   
                        <View style={{flexDirection:"row", justifyContent: "center", alignItems: 'center', paddingTop: 10, padding: 10,backgroundColor: 'red', width: '100%'}}>
                            <Text h3 style={{fontWeight: '20%', padding: 5, color:'white' , justifyContent: "center",alignItems: "center"}}>TIPS TO AVOID MOTOR ACCIDENT</Text>
                        </View>
                        
               </View>
               <Text>       1.Drive in the prescribed speed limits on the various roads. Always remember that “Speed thrills but kills”. </Text>
                        <Text>         2.Always put on helmets, seat belts and other safety equipments before driving a bicycle/ motor cycle/vehicle.  Always remember that “Safety saves”.</Text>
                        <Text>         3.Do not drink and drive.  Always remember that “You cannot hold a pen properly after two pegs, what about the driving wheel?”</Text>
                        <Text>         4.Never use mobile phones or ear phones while driving.  Always remember   “A mobile call on the road may be the last call of your life”.</Text>
                        <Text>         5.Know the traffic signs, signals, lights and traffic safety rules before you hit the road.  Always remember that “Road safety rules are best tools to avoid accidents”.</Text>
                        <Text>         6.Do not drive for long hours in a stretch.  Have a proper beaks after every 2 hours of continuous driving. Always remember that “Man is a man and not a machine”.  </Text>   

        </View>
    )
}

export default Motoraccident