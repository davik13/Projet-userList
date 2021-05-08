import React, { useEffect, useState, useLayoutEffect } from 'react';
import { inject, observer } from 'mobx-react';
import {FlatList, StyleSheet,View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';

import {fetchUsers}  from '../Api/RequestApi'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-reanimated';




const UserListScreen = ({navigation}) => {
    const [users, setUsers] = useState([]);

    const logout = async() => {
      try{
        await AsyncStorage.removeItem('token')
        navigation.navigate('SignIn')

      }catch(error){
        console.log("Something went wrong");

      }

    }



    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={logout.bind(this)} title="deconnexion"/>
        ),
        headerLeft: null,
      });
    }, []);

   useEffect(() => {
     fetchUsers()
       .then((res) => {
         setUsers(res)
       })
       .catch(err => {
         console.log(err)
       });
   }, []);
 
   return (

            <View style={styles.container} >
                <FlatList 
                    data={users} 
                    renderItem={({item}) => 
                   
                    <TouchableOpacity onPress={()=>navigation.navigate('Details', {item: item})}>
                       <View style= {styles.list}>
                           <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.username}>{item.username}</Text>
                            <View style={styles.row} />
                           <Text style={styles.baseText}>Email:  
                              <Text style={styles.innerText}> {item.email}</Text>
                          </Text> 
                            <Text style={styles.baseText}>Phone: 
                                <Text style={styles.innerText}> {item.phone}</Text>
                            </Text> 
                         </View>
                    </TouchableOpacity>
                    }
                    keyExtractor={ item => item.id.toString() }
                />
            </View>
       
   );
 };

 const styles = StyleSheet.create({
    list:{
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset:{
        height: 0,
        width: 0,
      },
      backgroundColor: 'white',
      height: 120,
      width: 340,
      borderWidth: 2  ,
      borderColor:'white',
      borderRadius: 10,
      margin: 20,
      padding: 15,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0,
    },
    name:{
      fontSize: 18,
      color: 'gray'
    },
    username:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    row:{
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      marginBottom: 10
    },
    baseText: {
      fontWeight: 'bold',
      fontSize: 17,
      color: 'gray'
    },
    innerText: {
      color: 'gray',
      fontWeight: 'normal',
      fontSize: 15,
    },
  })

 export default UserListScreen;