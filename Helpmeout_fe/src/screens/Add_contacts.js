import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import Contact from "./Contact";
import MultiSelect from "react-native-multiple-select";
const Add_contacts = ({navigation}) => {

    const [contacts, setContacts] = useState([]);
    const [selectedItems, setSelectedItems] =useState([])
    const [contactList, setContactList] = useState([])

    const requestPermission = async () => {
        const granted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS
        )
      if (granted) {
        console.log("You can use the Storage");
        
        Contacts.getAll().then(contacts => {
            console.log("CONTACTS", contacts[20])
            setContacts(contacts);
        })
      }
    }

    const onSelectedItemsChange = (selectedItems) => {
        console.log(    )
        setSelectedItems(selectedItems)
    }
    const handleClick = (contact) => {
      console.log("CLICK EVENT", contact)
      const list = {
        givenName: contact.givenName,
        phoneNumber: contact.phoneNumbers[0].number
      }
      setContactList([list, ...contactList])
      // contactList.push(contact)
    }
    const keyExtractor = (item, idx) => {
        return item?.recordID?.toString() || idx.toString();
      };

      const renderItem = ({item, index}) => {
        return (
          <View style={styles.contactCon}>
          <View style={styles.imgCon}>
            <View style={styles.placeholder}>
              <Text style={styles.txt}>{item?.givenName[0]}</Text>
            </View>
          </View>
          <View style={styles.contactDat}>
            <Text style={styles.name}>
              {item?.givenName} {item?.middleName && item.middleName + ' '}
              {item?.familyName}
            </Text>
            <Text style={styles.phoneNumber}>
              {item?.phoneNumbers[0]?.number}
            </Text>
          </View>
          <View><TouchableOpacity onPress={() => handleClick(item)}><Text style={{color:"black"}}>Click Here</Text></TouchableOpacity></View>
        </View>
        );
      };

    useEffect(() => {
        requestPermission()
    },[])

    return(
        <View>
            <Text h1>Add_contacts</Text>
            <View>
              <Text>{JSON.stringify(contactList)}</Text>
            </View>
            <View>
               <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
    color:'black'
  },
  phoneNumber: {
    color: '#888',
    
  },
});
export default Add_contacts
