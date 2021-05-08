import React , { useEffect, useState } from 'react';
import { StyleSheet,View, Text, Button, SafeAreaView } from 'react-native';

import { fetchUserDetails} from '../Api/RequestApi';


const UserDetails = ({route, navigation}) => {
  const { item } = route.params;
  console.log(item.id);

  return(
    <SafeAreaView style={styles.container}>
      <View style= {styles.list}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>{item.username}</Text>
        <View style={styles.row} />
        <Text style={styles.baseText}>Email : 
          <Text style={styles.innerText}>{item.email}</Text>
        </Text> 
        <Text style={styles.baseText}>Phone: 
          <Text style={styles.innerText}>{item.phone}</Text>
        </Text>
        
      </View>
      <View style={styles.companyFlex}><Text style={styles.company} >Compagny</Text></View>
      <View style={styles.list}>
        <Text style={styles.username}>{item.company.name}</Text>
        <Text style={styles.catchPhrase}>{item.company.catchPhrase}</Text>
        <Text style={styles.bs}>{item.company.bs}</Text>
        <Text style={styles.web}>{item.website}</Text>
      </View>
      <View style={styles.companyFlex}><Text style={styles.company}>Address</Text></View>
      <View style={styles.list}>
        <Text style={styles.username}>{item.address.suite}</Text>
        <Text style={styles.address}>{item.address.street}, {item.address.zipcode} </Text>
        <Text style={styles.address}>{item.address.city}</Text>
      </View>
    </SafeAreaView>
  );

  }
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
  company:{
    color: 'gray',
    fontWeight: 'normal',
    fontSize: 30,
    paddingTop: 25,
    paddingRight: 20,
  },
  companyFlex:{
    marginBottom: 0,
    marginTop:0,
    margin: 20
  },
  catchPhrase:{
    fontSize: 18,
    color: 'black'
  },
  bs:{
    color: 'gray',
    fontWeight: 'normal',
    fontSize: 15,
  },
  web:{
    paddingTop: 9,
    fontSize: 17, 
    color: 'blue',
    textDecorationLine: 'underline',
  },
  address:{
    fontSize: 18,
    color: 'black'
  }
})
export default UserDetails ;
